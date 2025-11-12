#!/bin/bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="$PROJECT_ROOT/build"
CONFIG_FILE="$PROJECT_ROOT/config/deploy.json"

CONFIG_BUCKET=""
CONFIG_REGION=""
CONFIG_CLOUDFRONT=""

if [[ -f "$CONFIG_FILE" ]]; then
  while IFS= read -r line; do
    if [[ -z "$CONFIG_BUCKET" ]]; then
      CONFIG_BUCKET="$line"
    elif [[ -z "$CONFIG_REGION" ]]; then
      CONFIG_REGION="$line"
    else
      CONFIG_CLOUDFRONT="$line"
    fi
  done < <(CONFIG_PATH="$CONFIG_FILE" python3 - <<'PY'
import json, sys
import os

config_path = os.environ.get("CONFIG_PATH")
with open(config_path, "r", encoding="utf-8") as fh:
    data = json.load(fh)

print(data.get("bucket", ""))
print(data.get("region", ""))
print(data.get("cloudfrontDistributionId", ""))
PY
)
fi

BUCKET_NAME="${AWS_S3_BUCKET:-${CONFIG_BUCKET:-}}"
AWS_REGION="${AWS_REGION:-${CONFIG_REGION:-}}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-${CONFIG_CLOUDFRONT:-}}"

if [[ -z "$BUCKET_NAME" ]]; then
  echo "❌ S3 bucket not specified. Set AWS_S3_BUCKET env var or update $CONFIG_FILE."
  exit 1
fi

if [[ -z "$AWS_REGION" ]]; then
  echo "❌ AWS region not specified. Set AWS_REGION env var or update $CONFIG_FILE."
  exit 1
fi

echo "👉 Building project..."
cd "$PROJECT_ROOT"
npm run build

if [ ! -d "$BUILD_DIR" ]; then
  echo "❌ Build directory '$BUILD_DIR' not found. Aborting."
  exit 1
fi

echo "🚀 Syncing '$BUILD_DIR' to S3 bucket 's3://$BUCKET_NAME' in region '$AWS_REGION'..."
aws s3 sync "$BUILD_DIR" "s3://$BUCKET_NAME" --delete --region "$AWS_REGION"

if [[ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]]; then
  echo "🧊 Creating CloudFront invalidation for distribution '$CLOUDFRONT_DISTRIBUTION_ID'..."
  aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*"
else
  echo "ℹ️  CloudFront distribution not configured; skipping invalidation."
fi

echo "✅ Deployment complete."


#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'csv-parse/sync';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const csvPath = path.resolve(projectRoot, 'translations', 'translations.csv');
const outputDir = path.resolve(projectRoot, 'src', 'locales');

function setNestedValue(target, key, value) {
  const segments = key.split('.');
  let current = target;

  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1;

    if (isLast) {
      current[segment] = value;
      return;
    }

    if (!(segment in current) || typeof current[segment] !== 'object') {
      current[segment] = {};
    }

    current = current[segment];
  });
}

function normalizeObject(value) {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeObject(item));
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value).map(([key, val]) => [key, normalizeObject(val)]);
    const keys = entries.map(([key]) => key);
    const numeric = keys.every((key) => /^\d+$/.test(key));

    if (numeric) {
      const sorted = entries
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map(([, val]) => val);
      return sorted;
    }

    return entries.reduce((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
  }

  return value;
}

function trimValue(value) {
  if (typeof value === 'string') {
    return value.trim();
  }
  return value;
}

function main() {
  const csvContent = readFileSync(csvPath, 'utf8');
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
  });

  const locales = {};

  for (const record of records) {
    const { key, ...translations } = record;
    if (!key) {
      continue;
    }

    Object.entries(translations).forEach(([language, rawValue]) => {
      const value = trimValue(rawValue);
      if (value === '') {
        return;
      }

      if (!locales[language]) {
        locales[language] = {};
      }

      setNestedValue(locales[language], key, value);
    });
  }

  mkdirSync(outputDir, { recursive: true });

  Object.entries(locales).forEach(([language, data]) => {
    const normalized = normalizeObject(data);
    const filePath = path.resolve(outputDir, `${language}.json`);
    writeFileSync(filePath, `${JSON.stringify(normalized, null, 2)}\n`, 'utf8');
    console.log(`Generated ${path.relative(projectRoot, filePath)}`);
  });
}

main();


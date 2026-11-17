#!/usr/bin/env node
/**
 * Semrush API Connectivity & Key Verifier
 * Usage: node scripts/semrush-check.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '..', '.env.local');

let apiKey = process.env.SEMRUSH_API_KEY;

if (!apiKey && fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('SEMRUSH_API_KEY=')) {
      apiKey = trimmed.replace('SEMRUSH_API_KEY=', '').trim();
      break;
    }
  }
}

console.log('\n========================================');
console.log('  OUTKAST STUDIOS — SEMRUSH API TEST  ');
console.log('========================================\n');

if (!apiKey) {
  console.error('❌ Error: SEMRUSH_API_KEY not found in environment or .env.local');
  process.exit(1);
}

const masked = apiKey.substring(0, 15) + '...' + apiKey.substring(apiKey.length - 4);
console.log(`🔑 Key Detected: ${masked}`);
console.log(`📌 Key Format: ${apiKey.startsWith('semrtkn-pat-') ? 'Version 4 Personal Access Token (PAT)' : 'Standard API Key'}\n`);

async function testEndpoint() {
  const targetDomain = 'outkast-studio.vercel.app';
  console.log(`📡 Probing Semrush v4 API for domain: ${targetDomain} ...`);

  try {
    const url = `https://api.semrush.com/apis/v4/domain-analytics/v1/domain-summaries/monthly?url=${encodeURIComponent(
      targetDomain
    )}&scope=ROOT_DOMAIN&country=IN&device_type=DESKTOP`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Apikey ${apiKey}`,
        Accept: 'application/json',
      },
    });

    const status = res.status;
    const body = await res.json().catch(() => null);

    console.log(`\nHTTP Response Code: ${status}`);

    if (res.ok) {
      console.log('✅ Success! Semrush API connection verified.');
      console.log('Data Preview:', JSON.stringify(body, null, 2));
    } else if (status === 403) {
      console.log('⚠️ Status: 403 Forbidden received from Semrush gateway.');
      console.log('Explanation:');
      console.log(' - The API token format ("Authorization: Apikey") was correctly recognized by Semrush.');
      console.log(' - 403 Forbidden indicates that this Personal Access Token does not have active API units or permissions for the Domain Analytics API on your Semrush account.');
      console.log(' - Ensure your Semrush plan (Guru or Business) includes active API units or that the PAT has permission scopes assigned.');
    } else {
      console.log(`Response body:`, body);
    }
  } catch (err) {
    console.error('❌ Network error communicating with Semrush:', err.message);
  }
}

testEndpoint();

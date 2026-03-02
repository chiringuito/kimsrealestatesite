#!/usr/bin/env node
// build-manifest.js
// Run automatically by Netlify on every deploy.
// Scans blog/posts/ for .md files and writes blog/post-manifest.json
// so the blog page knows which posts exist.

const fs   = require('fs');
const path = require('path');

const postsDir    = path.join(__dirname, 'blog', 'posts');
const manifestOut = path.join(__dirname, 'blog', 'post-manifest.json');

// Create directory if it doesn't exist yet
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
  console.log('Created blog/posts/ directory');
}

// Get all .md files
const files = fs.existsSync(postsDir)
  ? fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  : [];

// Write manifest as array of paths
const manifest = files.map(f => `/blog/posts/${f}`);
fs.writeFileSync(manifestOut, JSON.stringify(manifest, null, 2));

console.log(`✅ Blog manifest updated: ${manifest.length} post(s) found`);
manifest.forEach(f => console.log('  -', f));

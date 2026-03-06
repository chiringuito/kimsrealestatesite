#!/usr/bin/env node
// build-manifest.js
// Run automatically by Netlify on every deploy AND by GitHub Actions
// when CMS commits changes to blog posts or testimonials.
//
// Generates two manifest files:
//   blog/post-manifest.json          — list of all blog post .md paths
//   content/testimonial-manifest.json — list of all testimonial .md slugs

const fs   = require('fs');
const path = require('path');

// ── 1. BLOG POSTS ─────────────────────────────────────────────────────────────

const postsDir   = path.join(__dirname, 'blog', '_posts');
const postsOut   = path.join(__dirname, 'blog', 'post-manifest.json');

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
  console.log('Created blog/_posts/ directory');
}

const postFiles = fs.existsSync(postsDir)
  ? fs.readdirSync(postsDir).filter(f => f.endsWith('.md')).sort()
  : [];

const postManifest = postFiles.map(f => `/blog/_posts/${f}`);
fs.writeFileSync(postsOut, JSON.stringify(postManifest, null, 2));
console.log(`✅ Blog manifest updated: ${postManifest.length} post(s)`);
postManifest.forEach(f => console.log('  -', f));

// ── 2. TESTIMONIALS ───────────────────────────────────────────────────────────

const testimonialsDir = path.join(__dirname, 'content', 'testimonials');
const testimonialsOut = path.join(__dirname, 'content', 'testimonial-manifest.json');

if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
  console.log('Created content/testimonials/ directory');
}

const testimonialFiles = fs.existsSync(testimonialsDir)
  ? fs.readdirSync(testimonialsDir).filter(f => f.endsWith('.md')).sort()
  : [];

// Store just the slugs (filename without .md) — matches how the pages fetch them
const testimonialManifest = testimonialFiles.map(f => f.replace(/\.md$/, ''));
fs.writeFileSync(testimonialsOut, JSON.stringify(testimonialManifest, null, 2));
console.log(`✅ Testimonial manifest updated: ${testimonialManifest.length} testimonial(s)`);
testimonialManifest.forEach(f => console.log('  -', f));

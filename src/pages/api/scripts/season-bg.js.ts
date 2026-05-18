// src/pages/api/scripts/season-bg.js.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const jsPath = path.resolve('src/pages/scripts/season-bg.js');
  try {
    const jsContent = fs.readFileSync(jsPath, 'utf-8');
    return new Response(jsContent, {
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Error reading season-bg.js:', error);
    return new Response('File not found', { status: 404 });
  }
}
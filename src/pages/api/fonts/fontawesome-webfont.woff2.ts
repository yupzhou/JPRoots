// src/pages/api/fonts/fontawesome-webfont.woff2.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const fontPath = path.resolve('src/pages/fonts/fontawesome-webfont.woff2');
  const fontBuffer = fs.readFileSync(fontPath);
  return new Response(fontBuffer, {
    headers: {
      'Content-Type': 'font/woff2',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
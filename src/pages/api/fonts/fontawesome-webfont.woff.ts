// src/pages/api/fonts/fontawesome-webfont.woff.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const fontPath = path.resolve('src/pages/fonts/fontawesome-webfont.woff');
  const fontBuffer = fs.readFileSync(fontPath);
  return new Response(fontBuffer, {
    headers: {
      'Content-Type': 'font/woff',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
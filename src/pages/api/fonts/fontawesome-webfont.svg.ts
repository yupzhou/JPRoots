// src/pages/api/fonts/fontawesome-webfont.svg.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const fontPath = path.resolve('src/pages/fonts/fontawesome-webfont.svg');
  const fontBuffer = fs.readFileSync(fontPath);
  return new Response(fontBuffer, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
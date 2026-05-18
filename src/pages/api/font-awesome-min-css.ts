// src/pages/api/font-awesome-min-css.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.resolve('src/pages/html/font-awesome.min.css');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  return new Response(fileContent, {
    headers: {
      'Content-Type': 'text/css; charset=utf-8',
    },
  });
}
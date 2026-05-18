// src/pages/api/JLVDB-csv.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.resolve('src/pages/html/JLVDB.csv');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  return new Response(fileContent, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
    },
  });
}
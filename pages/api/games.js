import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'public/data');
  const fileContents = await fs.readFile(jsonDirectory + '/games.json', 'utf8');
  const games = JSON.parse(fileContents);
  res.status(200).json(games);
}

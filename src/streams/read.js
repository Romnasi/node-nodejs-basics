import { createReadStream } from 'fs';
import getPathFromFile from '../utils/getPathFromFile.js';

const filePath = getPathFromFile(import.meta.url, '/files/fileToRead.txt');

export const read = async () => {
  const rStream = createReadStream(filePath, 'utf-8');
  rStream.pipe(process.stdout);
};

read();

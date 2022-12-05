import { readFile } from 'node:fs/promises';
import getPathFromFile from '../utils/getPathFromFile.js';
import { FS_ERROR_MESSAGE } from '../const/const.js';

const filePath = getPathFromFile(import.meta.url, '/files/fileToRead.txt');

export const read = async () => {
  try {
    const fileContent = await readFile(filePath, 'utf8');
    console.log(fileContent);
  } catch (err) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

read();
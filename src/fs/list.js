import { readdir } from 'node:fs/promises';
import getPathFromFile from '../utils/getPathFromFile.js';
import { FS_ERROR_MESSAGE } from '../const/const.js';

const dir = getPathFromFile(import.meta.url, '/files');

export const list = async () => {
  try {
    const files = await readdir(dir);
    files.forEach((fileName) => console.log(fileName));
  } catch (err) {
    throw new Error(FS_ERROR_MESSAGE);
  } 
};

list();
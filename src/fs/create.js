import { writeFile } from 'fs/promises';
import getPathFromFile from '../utils/getPathFromFile.js';
import { FS_ERROR_MESSAGE } from '../const/const.js';

const TEXT_CONTENT = 'I am fresh and young';

const filePath = getPathFromFile(import.meta.url, '/files/fresh.txt');

export const create = async () => {
  try {
    await writeFile(filePath, TEXT_CONTENT, { flag: 'wx' });
  } catch (err) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

create();
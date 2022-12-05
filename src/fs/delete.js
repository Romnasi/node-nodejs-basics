import { unlink } from 'fs/promises';
import getPathFromFile from '../utils/getPathFromFile.js';
import { FS_ERROR_MESSAGE } from '../const/const.js';

const SUCCESS_MESSAGE = 'file deleted successfully';

const filePath = getPathFromFile(import.meta.url, '/files/fileToRemove.txt');

export const remove = async () => {
  try {
    await unlink(filePath);
    console.log(SUCCESS_MESSAGE);
  } catch (err) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

remove();
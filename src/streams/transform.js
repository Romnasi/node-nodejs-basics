import { Transform, pipeline } from 'stream';

export const transform = new Transform({
  transform(chunk, enc, cb) {
    const chunkStringified = chunk.toString().trim();
    const reversedChunk = chunkStringified.split('').reverse().join('');
    this.push(reversedChunk + '\n');
    cb();
  }
})

console.log('Write something:')

pipeline(
  process.stdin,
  transform,
  process.stdout,
  (err) => console.log(`Error ${err}`)
);

import { promises } from 'fs';
const filePath = './file.txt';
try {
  const data = await promises.readFile(filePath, 'utf-8');
  console.log(data);
  console.log('Done!');
} catch (error) {
  console.log('An error occurred...:', error);
}
console.log("I'am the last line of the file!");

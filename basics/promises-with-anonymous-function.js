import fs from 'fs';
const filePath = './file.txt';
fs.readFile(filePath, 'utf-8', (error, data) => {
  if (!error) {
    console.log(data);
    console.log('Done!');
    return;
  }
  console.log(`An error occurred...: ${error}`);
});
console.log("I'm the last line of file!");

import fs from 'fs';
const filePath = './file.txt';
const callback = (error, data) => {
  if (error) {
    console.log(`an error occurred...: ${error}`);
    return;
  }
  console.log(data);
  console.log('Done!');
};
fs.readFile(filePath, 'utf-8', callback);
console.log("I'am the last line of the file!");

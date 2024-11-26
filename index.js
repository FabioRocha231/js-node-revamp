import { promises } from 'fs';

const filePath = './file.txt';

async function readFileAsync() {
  try {
    const data = await promises.readFile(filePath, 'utf-8');
    console.log(data);
    console.log('finished');
  } catch (e) {
    console.log('An error occurred...:', error);
  }
}

readFileAsync()
  .then(() => console.log('Success!'))
  .catch((error) => console.log(`An error occured: ${error}`));

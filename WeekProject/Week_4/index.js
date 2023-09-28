const fs = require('fs');
const path = require('path');
const wordCount = require('word-count');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const configPath = path.join(__dirname, 'config.json');
const config = require(configPath);
const filePaths = config.files;


async function fileCounter (filePath) {
      try{
        const data = await readFile(filePath, 'utf8')
        const wordcounted = wordCount(data);
        return wordcounted
      }catch (err){
        console.error(`Error reading ${filePath}:  ${err}`);
        return;
      }

}

async function processFiles() {
  for (const filePath of filePaths) {
    const wordCountResult = await fileCounter(filePath);
    if (wordCountResult !== null) {
      console.log(`${filePath} has ${wordCountResult} words.`);
    }
  }
}

processFiles();



// function processFile(filePath) {
//     fs.readFile(filePath, 'utf8', (err, content) => {
//       if (err) {
//         console.error(`Error reading ${filePath}: ${err}`);
//         return;
//       }
  
//       const wordCountResult = wordCount(content);
//       console.log(`${filePath}: ${wordCountResult} words`);
//     });
//   };

//   filePaths.forEach(filePath => {
//     const absoluteFilePath = path.join(__dirname, filePath);
//     processFile(absoluteFilePath);
//   });
  
  
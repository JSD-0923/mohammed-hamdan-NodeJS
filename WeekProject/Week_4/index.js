const fs = require('fs');
const path = require('path');
const wordCount = require('word-count');

const configPath = path.join(__dirname, 'config.json');
const config = require(configPath);
const filePaths = config.files;

function processFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        console.error(`Error reading ${filePath}: ${err}`);
        return;
      }
  
      const wordCountResult = wordCount(content);
      console.log(`${filePath}: ${wordCountResult} words`);
    });
  };

  filePaths.forEach(filePath => {
    const absoluteFilePath = path.join(__dirname, filePath);
    processFile(absoluteFilePath);
  });
  
  
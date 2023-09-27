# Week 4 - Project

## Description

Create a Node.js program that reads a list of file paths from a configuration file and processes each file asynchronously. The processing involves counting the number of words in each file and displaying the results.

## Background

This project covers the following topics:
- Node.js project creation
- NPM package manager
- Async programming
- JSON parsing
- Some node native packages

## Setup

- Create a new directory for your project and navigate to it in your terminal.
- Initialize a Node.js project by running: npm init -y.
- Create a files directory and place some text files in it that you will use for testing.
- Use `npm` to install any needed package(s) that would support your logic.

## Configuration

Create a config.json file in the project directory to store the list of file paths to be processed. Example content:
```JSON
{
  "files": [
    "files/file1.txt",
    "files/file2.txt",
    "files/file3.txt"
  ]
}
```

## Code Flow
- Your code should be written in a file called `index.js`
- Run your program using `node index.js`
- Later on, check how to use `nodemon` and run your code using `nodemon index.js`

## Expected Output

```log
files/file1.txt: 75 words
files/file2.txt: 103 words
files/file3.txt: 42 words
```

## Testing

Your code should handle the following

- Empty files
- Files with special characters
- Files that do not exist

You are always encouraged to check external resources to check how such cases are handled. 


## Coding Style

Make sure your code includes the following

- Clean coding with proper readability 
- Proper comments and documentation 
- Your code should implemented in JavaScript.

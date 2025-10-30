// Write the code to read the other file synchronously

const fs = require("fs");
const data = fs.readFileSync('./in.txt','utf-8')

console.log(data)

console.log('After read file..')

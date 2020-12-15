const { fstat } = require("fs");

const fs=require("fs");

function notes(){
  return fs.readFileSync('test1.txt');
  
}
module.exports=notes;
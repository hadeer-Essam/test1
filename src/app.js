const express= require('express');
const cors = require('cors');
const note= require("../note")
const app = express();

app.use(cors());
app.use(express.json());

console.log(note().toString())
console.log(process.argv[2])
const port= 3000 || process.env.PORT 
app.listen(port,()=>{
    console.log(`app work on localhost: ${port}`)
});

// const fs=require("fs");
// fs.appendFileSync("test1.txt"," hi")
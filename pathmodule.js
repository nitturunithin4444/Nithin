const {fileURLToPath}=require('url');
const path=require('path');
const {readFile}=require('fs');
const {writeFile}=require('fs');
const _filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(_filename);
console.log(_dirname);
readFile(path.join(__dirname),'utf-8',(err,data)=>{
    if(err) throw err;
    let customers=JSON.parse(data);
    writeFile(path.join(_dirname,'util','customers.join'),JSON.stringify(customers),'utf-8',(err,data)=>{
        if(err) throw err;
        console.log("Data written successfully")
    })
});
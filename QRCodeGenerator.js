const express=require('express');
const code=require('qrcode');
const app=express();
const port=5000;
app.get('/qrcode',(req,res)=>
{
    const url='http://jbtechsolutions.github.io/Home/';
    code.toDataURL(url,(err,qrCodeUrl)=>{
        if(err)
        {
            res.status(500).send(`Internal Server Error`);
        }
        else{
            res.send(`
                <!DocType HTML>
                <html>
                    <head>
                        <title>QRCode Generator</title>
                    </head>
                    <body>
                        <h1>QRCode Genrator</h1>
                        <img src="${qrCodeUrl}"alt="QR Code" to visit Website>
                        <p>Scan the QRCode Generator </p>
                    </body>
                </html>
            `)
        }
    });
});
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
});
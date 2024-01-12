require('dotenv').config();
const express=require('express');
const path=require('path');
const cors=require('cors');

const app=express();

const port=process.env.PORT;

app.use(express.json());

app.use(cors());

app.disable('etag');

app.use((req,res,next)=>{
  console.log(req.body);
  next();
})

app.get('/.well-known/pki-validation/05A2E4A9BD43066B912E50642F9EE3F9.txt',(req,res)=>{
  res.sendFile(path.join(__dirname,'./05A2E4A9BD43066B912E50642F9EE3F9.txt'));
})

app.get('/',(req,res)=>{
  res.send('Hello I am API let me know what to do.');
})

app.use('/getCandidates',require(path.join(__dirname,'routes/fetch.js')));
app.use('/addCandidates',require(path.join(__dirname,'routes/insert.js')));
app.use('/updateCandidateStatus',require(path.join(__dirname,'routes/update.js')));

app.listen(port,()=>{
  console.log('Server listening on port: '+port);
});

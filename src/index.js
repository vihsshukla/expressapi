require('dotenv').config();
const express=require('express');
const path=require('path');

const app=express();

const port=process.env.PORT;

app.use(express.json());

app.disable('etag');

app.use((req,res,next)=>{
  console.log(req.body);
  next();
})

app.use('/getCandidates',require(path.join(__dirname,'routes/fetch.js')));
app.use('/addCandidates',require(path.join(__dirname,'routes/insert.js')));
app.use('/updateCandidateStatus',require(path.join(__dirname,'routes/update.js')));

app.listen(port,()=>{
  console.log('Server listening on port: '+port);
});

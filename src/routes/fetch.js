const express=require('express');
const executeQuery = require('../Utils/dbConnect');

const router=express.Router();

router.get('/:emailId',(req,res)=>{
  console.log(req.params);
  const query=`select * from dbo.candidateInfo where emailid='${req.params.emailId}' or '${req.params.emailId}'='all';`;
  
  executeQuery(query).then((data)=>{
    res.status(200).send(data);
  }).catch((err)=>{
    res.status(500).send(err.message);
  });
});

module.exports=router;
const express=require('express');
const executeQuery = require('../Utils/dbConnect');

const router=express.Router();

router.post('/',(req,res)=>{
  const query=`update dbo.candidateInfo set currentstatus='${req.body.status}' where emailid=any(string_to_array('${req.body.emailId}',','));`;

  executeQuery(query)
  .then((data)=>{
    if(data){
      res.send(`Candidate ${req.body.emailId} status updated successfully.`);
    }
  })
  .catch((err)=>{
    res.status(500).json({error:err.message});
  })
});

module.exports=router;
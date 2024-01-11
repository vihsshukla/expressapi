const express=require('express');
const executeQuery = require('../Utils/dbConnect');

const router=express.Router();

router.post('/',(req,res)=>{
  const checkQuery=`select 1 from dbo.candidateinfo where emailid='${req.body.email}';`
  const query=`insert into dbo.candidateInfo(firstName,middleName,lastName,emailId,phonenumber,skills,expectedSalary,nodeexperience,reactexperience) select '${req.body.firstName}','${req.body.middleName}','${req.body.lastName}','${req.body.email}',${req.body.phone},'${req.body.skills}','${req.body.expectedSalary}',${parseInt(req.body.nodeExperienceinyears*12)+parseInt(req.body.nodeExperienceinmonths)},${parseInt(req.body.reactExperienceinyears*12)+parseInt(req.body.reactExperienceinmonths)};`;
  console.log(query);
  executeQuery(checkQuery).then((data)=>{
    return data;
  })
  .then((data)=>{
    console.log(data);
    if(data.length){
      res.status(403).json({data:'exists'});
    }
    return executeQuery(query);
  })
  .then((info)=>{
    if(info){
      res.status(200).json({data:"added"});
    }
  })
  .catch((err)=>{
    res.status(500).json({error:err.message});
  })
});

module.exports=router;
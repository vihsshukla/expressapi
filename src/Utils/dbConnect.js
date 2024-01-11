const {Client} = require('pg');

const executeQuery=async(query)=>{
  const client=new Client({connectionString:process.env.DATABASE_URL});
  try{
    await client.connect();
    let res=await client.query(query);
    return res.rows;
  }catch(err){
    console.error("Error while executing query: ",err.message);
  }finally{
    await client.end();
  }
}

module.exports=executeQuery;
const {Pool}=require("pg");
require("dotenv").config();

const dbURL=process.env.PROD_DB_URL;

const pool=new Pool({
   connectionString:dbURL
})


module.exports=pool;
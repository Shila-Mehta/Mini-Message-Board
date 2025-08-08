const pool=require("./pool");

async function getAllUsers(){
    const {rows}=await pool.query(`SELECT * FROM  messages`);
    return rows;
}


async function insertUserData(message,username){
  await pool.query("INSERT INTO messages(text,username) VALUES($1,$2) ",[message,username]);
}


module.exports={
    getAllUsers,
    insertUserData
}
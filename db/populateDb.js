const {Client}=require("pg");
require("dotenv").config();


const SQL = `
DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  username VARCHAR(100) NOT NULL,
  added TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO messages(text, username) VALUES
  ('Hi there !', 'Amando'),
  ('Hello World !', 'Charles');
`;


async function  main() {
    console.log("seeding database...");

    const client=new Client( {connectionString:process.env.PROD_DB_URL} )

    await  client.connect();
    await  client.query(SQL);
    await  client.end();

    console.log("Done!");
}

main().catch((err)=>console.log("populateDb file not run",err));
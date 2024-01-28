import mysql from "mysql";

//TODO Change to env variables
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "socialmediaapp",
});

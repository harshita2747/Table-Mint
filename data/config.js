//dbConfig.js

import  mysql from "mysql2/promise";

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'harshi@19',
    database : 'restaurant'
})

export default db
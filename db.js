import dotenv from 'dotenv';
import pkg from 'pg'

const {Pool} = pkg;

dotenv.config(); /// load .env variable into process.env object

const pool = new Pool ({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

export default pool;
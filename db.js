import dotenv from 'dotenv';
dotenv.config(); /// load .env variable into process.env object

const pool = {
    user: process.env.DB,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}
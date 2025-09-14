import express from 'express';
import pool from './db.js';

const app = express();

app.use(express.json());

app.get("/" , (req , res) => {
    const name = pool.database;
    res.send(`the name of the databse is: ${name}`);
})

app.listen(3000);
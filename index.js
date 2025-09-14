import express from 'express';
import pool from './db.js';

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    const db = await pool.query("select current_database()")
    res.send(`the name of the databse is ${db.rows[0].current_database}`);
})

app.listen(3000);
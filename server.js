const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;
const {Pool} = require('pg');
const pool = new Pool ({
    user: 'brandonmartin',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'TodoListDB'
})

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.get('/todo', async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM todos')
        res.send(rows)
    } catch (error){
        res.send(error.message)
    }
})

app.get('/todo/:id', async (req, res) => {
    const {id} = req.params
    try {
        const {rows} = await pool.query('SELECT id FROM todos WHERE id = $1', [id])
        res.send(rows)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/todo/post', async (req, res) => {
    const {todo} = req.body
    try {
        const {rows} = await pool.query('INSERT INTO todos (todo) VALUES ($1) RETURNING *', [todo])
        res.send(rows)
    } catch (error) {
        res.send(error.message)
    }
})

app.patch('/todo/patch/:id', async (req, res) => {
    const {id} = req.params
    const {todo} = req.body
    try {
        const {rows} = await pool.query('UPDATE todos SET todo = $1 WHERE id = $2 RETURNING *', [todo, id])
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('todo/:id', async (req, res) => {
    const {id} = req.params
    try {
        const {rows} = await pool.query('DELETE FROM todos WHERE id = $1', [id])
        res.send(rows)
    } catch (error) {
        res.send(error.message)
    }
})


app.listen(port, () => {
    console.log('Listening on port:' + port)
})
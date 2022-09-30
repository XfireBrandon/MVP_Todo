const express = require('express');
const app = express();
const port = 3500;
// const {pool} = require('pg');
// const pool = new Pool ({
//     user: 'brandonmartin',
//     password: '',
//     host: 'localhost',
//     port: 5432,
//     database:
// })

app.use(express.static('public'))
app.use(express.json())


app.listen(port, () => {
    console.log('Listening on port:' + port)
})
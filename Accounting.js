const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send("Hola Giorda");
})

app.get('/generic', (req, res) => {
    res.send('Hola Giorda - generic');
})

app.get('/heroesdc', (req, res) => {
    res.send('Hola Giorda - heroesDC');
})

app.get('/heroesmarvel', (req, res) => {
    res.send('Hola Giorda - heroesMarvel');
})

app.listen(4545, () => {
    console.log(`Example app listening on port 4545`)
})
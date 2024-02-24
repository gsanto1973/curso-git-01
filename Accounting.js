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

app.get('/superman', (req, res) => {
    res.send('Hola Giorda - Superman');
})

app.get('/batman', (req, res) => {
    res.send('Hola Giorda - Batman');
})

app.get('/robin', (req, res) => {
    res.send('Hola Giorda - Robin');
})

app.get('/acuaman', (req, res) => {
    res.send('Hola Giorda - Acuaman');
})

app.get('/spiderman', (req, res) => {
    res.send('Hola Giorda - Spiderman');
})

app.listen(4545, () => {
    console.log(`Example app listening on port 4545`)
})
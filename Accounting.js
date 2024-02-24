const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send("Hola Giorda");
})

app.get('/generic', (req, res) => {
    res.send('Hola Giorda - generic');
})

app.listen(4545, () => {
    console.log(`Example app listening on port 4545`)
})
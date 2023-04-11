const express = require('express');
const app = express();
const port = 3000;

app.get('/products/:id', (req, res) => {
    res.send(req.params)
    res.send('produt details')
});

app.get('/products', (req, res) => {
    res.send('products')
});

app.get('/', (req, res) => {
    res.send('hello world')
});
app.listen(port, () => { console.log('express js,server listen at '), 3000, 'port' })
const express = require('express');
const app = express();
const port = 3000 || env.port;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.use(express.static(__dirname + "/node_modules"))
app.use(express.static(__dirname + "/public"))

app.listen(port, () => {
    console.log(` running on http://localhost:${port}`)
})
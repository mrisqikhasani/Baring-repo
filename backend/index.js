const express = require('express')
const app = express()
const port = 3000
const routers = require('./routes/routes.js')
// const connection = require('./db.js')

app.use(express.json());
app.use(routers)

app.listen(port, ()=>{
    console.log(`Server is runnning on http://localhost${port}`);
})
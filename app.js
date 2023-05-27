const express = require("express")
const app = express();
const PORT = 3500;
const todo_list = require('./Routes/todo_list')

app.get('/',(require,response)=>{
    response.send("Landing page");
})

app.use('/api/v1/todo_list', todo_list)

app.listen(PORT,console.log('server runs at http://localhost:3500/'))
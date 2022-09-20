<
const express= require('express');
const app = express();
const Db_connect = require('./db_connect/Db_connect')

require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json())
app.use('/article', require('./routes/articleRoute'))
app.use('/user', require('./routes/userRouter'))

Db_connect();

app.listen(PORT, err =>{
    err?console.log(err):console.log(`Server is running on PORT ${PORT}`)
})
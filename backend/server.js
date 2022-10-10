const express = require('express');
const cors = require("cors")
const app = express();
const Db_connect = require('./db_connect/Db_connect')

require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())


Db_connect();

app.use('/blog', require('./routes/blogRoute'))
app.use('/user', require('./routes/userRouter'))
app.use('/activity', require('./routes/activityRoute'))




app.listen(PORT, err => {
    err ? console.log(err) : console.log(`Server is running on PORT ${PORT}`)
})
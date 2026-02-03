
const app = require('./src/app');
const connecttoDB = require('./src/config/database');

require('dotenv').config()

connecttoDB()


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
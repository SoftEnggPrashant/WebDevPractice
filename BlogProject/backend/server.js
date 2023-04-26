const app  = require('./app');
const dotenv = require('dotenv');
const { connectDB } = require('./config/DatabaseConnection');

// configure path of config file
dotenv.config({path:'./config/config.env'});

// create server
app.listen(process.env.PORT || 3000,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`);
})

// connect Database
connectDB();
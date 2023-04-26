const app = require('./app');
const dotenv = require('dotenv');
const { connectDB } = require('./config/connectDatabase');

dotenv.config({path:'./config/config.env'});

app.listen(process.env.PORT || 3000,()=>{
    console.log('server is running at http://localhost:4000');
})

//connect the database
connectDB();
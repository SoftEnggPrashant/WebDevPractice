const express = require('express');
const blogRoute = require('./routes/BlogRoutes');
const userRoute = require('./routes/userRoutes');
const commentRoute = require('./routes/commentRoutes');
const LikedRoute = require('./routes/likeRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1',blogRoute);
app.use('/api/v1',userRoute);
app.use('/api/v1',commentRoute);
app.use('/api/v1',LikedRoute);

module.exports = app;
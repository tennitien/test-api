const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register');

const app = express();
app.use(
  cors({
    origin: ['https://deploy-mern-frontend.vercel.app'],
    methods: ['POST', 'GET'],
    credentials: true,
  })
);
app.use(express.json());

mongoose.connect(
  'mongodb+srv://yousaf:test123@cluster0.g4i5dey.mongodb.net/test?retryWrites=true&w=majority'
);

app.get('/api', (req, res) => {
  res.json('Hello');
});
// app.get('/api', (req, res, next) => {
//   res.json('Api');
// });

app.listen(3001, () => {
  console.log('Server is Running');
});

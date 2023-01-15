require('dotenv').config();
const {mongoose} = require('mongoose');
const express = require('express');
const studentsRoutes = require('./routes/students');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/students', studentsRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => { })
            console.log('connected to database and listening to port ', process.env.PORT);
    })




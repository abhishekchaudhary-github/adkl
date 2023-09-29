require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const authroutes = require('./routes/auth')
const jobsroutes = require('./routes/jobs')
const db = require('./db/connect')
const url = process.env.mongodb_uri

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages

// routes
app.use('/api/vi',authroutes)
app.use('/api/vi',jobsroutes)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await db(url)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

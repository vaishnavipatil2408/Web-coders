const express = require('express');
const dotenv = require('dotenv');
const error = require('./middlewares/errorMiddlewareHandler');
const usersRoute = require('./routes/usersRoute');
const bookRouter = require('./routes/bookRoutes');
dotenv.config();
require('./config/dbConnect')();

const app = express();


app.use(express.json());


app.use('/api/users', usersRoute);

app.use('/api/books', bookRouter);

app.use(error.errorMiddlewareHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and runing ${PORT}`);
});

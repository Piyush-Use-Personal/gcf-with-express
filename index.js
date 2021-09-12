const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const morganLogger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { someRoute } = require("./controller");

require("dotenv").config();



const app = express();
app.use(morganLogger(process.env.NODE_ENV));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.get('/test', someRoute)

app.get("/", function (req, res, next) {
    res
      .status(200)
      .send("Welcome to the project!");
  });
  

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message,
    code: err.status,
    data: err.data,
    error: true,
  });
});

app.listen(4000, () => {
    console.log('server connected!')
})
exports.app = app;

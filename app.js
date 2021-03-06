require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("express-flash");
const path = require("path");
const port = process.env.PORT || 5000;
const cors = require("cors");
const userRouter = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set("views", path.join(__dirname, "views")); //setting ejs as view files
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); //setting public folder as static file holder

/* start - for flash error and success messages*/
app.use(cookieParser());
app.use(
  session({
    secret: "123",
    resave: "true",
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(function (req, res, next) {
  res.locals.success_messages = req.flash("success_messages");
  res.locals.error_messages = req.flash("error_messages");
  next();
});
/* end - for flash error and success messages*/

//set routes
app.use("/", userRouter);
app.use("/users", userRouter);

//server creation
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server liestning to port " + port);
});

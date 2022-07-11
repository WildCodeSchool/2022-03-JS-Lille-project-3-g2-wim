const express = require("express");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const router = require("./router");
require("./passport-strategies");

const app = express();
const corsWhitelist = [process.env.FRONTEND_URL, process.env.ADMIN_URL];

app.use(
  cors({
    origin: (origin, callback) => {
      if (corsWhitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
// use some application-level middlewares

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

app.use(passport.initialize());

// API routes
app.use(router);

// Redirect all requests to the REACT app
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
  );
});

// ready to export
module.exports = app;

// First we need to import the packages we're using
import express from "express";
import cors from "cors";
import dotenv from "dotenv"; // dotenv is the package we'll be using that let's us utilise environment variables

// --- --- ---
// Boilerplate server setup
const app = express();

app.use(express.json()); // This will be useful when we make requests, specifically when we start sending data to the server. (It can read incoming JSON)
app.use(cors()); // Cross Origin Resource Sharing - essentially allows our server to respond to lots of clients.

dotenv.config(); // this configuration allows you to use .env variables in this server.js file

// --- --- ---
// and then finally, to use an environment variable we write it like so:
console.log("my super secret env is", process.env.MY_VERY_SECRET_KEY);
console.log(
  "my super secret password that nobody knows is",
  process.env.MY_SUPER_SECRET_PASSWORD
);
// 'process' refers to the process running our code
// 'env' refers to our env file
// 'MY_SUPER_SECRET_PASSWORD' refers to the name of the variable in the .env file

// --- --- ---
// We need a root GET route, and a listener

app.get("/", function (req, res) {
  res.send(
    "Ello ello! You're looking at my root route, you absolute rude'en!!"
  );
});

app.listen(8080, function () {
  console.log(`Server running on port: 8080`);
});

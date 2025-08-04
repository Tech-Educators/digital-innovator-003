// Imports!
import express from "express";
import cors from "cors";
import dotenv from "dotenv"; // dotenv is the package we'll be using that lets us utilise environment variables
import pg from "pg"; // pg establishes a connection to our database and lets us make queries

// --- --- ---
// Boilerplate server setup
const app = express();
app.use(express.json()); // Coming soon!
app.use(cors());
dotenv.config(); // this configuration allows you to use .env variables in this server.js file

// Here's our new database connection!
const db = new pg.Pool({
  connectionString: process.env.DATABASE_CONNECTION_STRING, // variable name declared by you, and found in the .env file
});

// --- --- ---
app.get("/", function (req, res) {
  res.send(
    "Ello ello! You're looking at my root route, you absolute rude'en!!"
  );
});

// This GET route will interact with my database:
// async/await because we're wwaiting for a database response
app.get("/books", async function (req, res) {
  const allBooks = await db.query(`SELECT * FROM books`);
  // console.log(allBooks); // check it out in your console to see why we might access allBooks.rows instead
  console.log(allBooks.rows);
  res.json(allBooks.rows);
});

app.listen(8080, function () {
  console.log(`Server running on port: 8080`);
});

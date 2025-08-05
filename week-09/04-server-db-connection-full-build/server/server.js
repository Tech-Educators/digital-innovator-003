// Imports:
import express from "express";
import cors from "cors";
import PG from "pg";
import dotenv from "dotenv";

// Boilerplate setup:
const app = express();
app.use(express.json()); // we're going see this in use when we set up our client. Enables JSON to be given to the server.
app.use(cors()); // allows different clients to make requests
dotenv.config(); // lets us use the variables in .env
const PORT = 8080;
// Make a connection to our database:

const db = new PG.Pool({
  connectionString: process.env.DATABASE_CONNECTION_STRING,
});

// GET routes:
app.get("/", function (req, res) {
  res.send("Ouch, you've hit my roots!");
});

app.get("/books", async function (req, res) {
  console.log("the query on the /books route", req.query);

  // Using an 'if' statement allows us to perform a query search on the one route
  if (req.query.year) {
    // so, does req.query.year exist? if it does, execute the first block
    const allBooksQuery = await db.query(
      `SELECT * FROM books WHERE release_year = ${req.query.year}`
    );
    res.json(allBooksQuery.rows);
  } else {
    // otherwise, do the second block!
    const allBooks = await db.query(`SELECT * FROM books`);
    res.json(allBooks.rows);
  }
});

app.get("/booksquery", async function (req, res) {
  const allBooksQuery = await db.query(
    `SELECT * FROM books WHERE release_year = ${req.query.year}`
  );
  res.json(allBooksQuery.rows);
});

// LISTEN:
app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});

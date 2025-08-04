// Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

// --- --- ---
// Boilerplate
const app = express();

app.use(express.json()); // This will be useful when we make requests, specifically when we start sending data to the server. (It can read incoming JSON)
app.use(cors());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_CONNECTION_STRING,
});

// --- --- ---
app.get("/", function (req, res) {
  res.send(
    "Ello ello! You're looking at my root route, you absolute rude'en!!"
  );
});

app.get("/books", async function (req, res) {
  const allBooks = await db.query(`SELECT * FROM books`);
  console.log(allBooks.rows);
  res.json(allBooks.rows);
});

// --- --- ---
// This endpoint we have built specifically for a query string:
app.get("/booksquery", async function (request, response) {
  // We need to access the request.query object to see what properties it has:
  console.log("The request.query: ", request.query); // Output: [Object: null prototype] { year: '2025' }

  // It's an object with a property of 'year', so we can access that with dot notation:
  console.log("The request.query.year: ", request.query.year);

  // We can then use that in a database query. Backticks, template literals, dot notation, query strings OH MY WORD!!!
  const queriedBooks = await db.query(
    `SELECT * FROM books WHERE release_year = ${request.query.year}`
  );

  // And then send back the database response:
  response.json(queriedBooks.rows);
});

// --- --- ---

app.listen(8080, function () {
  console.log(`Server running on port: 8080`);
});

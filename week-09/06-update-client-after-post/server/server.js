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

// POST route
app.post("/books", async function (request, response) {
  // This is how I access the body of information from the form submission:
  console.log(
    "The server - app.post /books endpoint - request.body info:",
    request.body
  );
  // this is how I access individual properties from that formValues object:
  console.log(request.body.userTitle);

  // Now I just need to send that to my database:
  const databaseResponse = await db.query(
    `
    INSERT INTO books 
    (title, img_source, img_alt, author, release_year) 
    VALUES 
    ($1, $2, $3, $4, $5)`,
    [
      request.body.userTitle,
      request.body.userImgSrc,
      request.body.userImgAlt,
      request.body.userAuthor,
      request.body.userReleaseYear,
    ]
  ); // Read about 'Parameter Placeholders' on the Week 09 Moodle Database session. This helps to keep our database safe

  console.log("What the DB gives back to the server", databaseResponse);
  response.send(databaseResponse);
});

// LISTEN:
app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});

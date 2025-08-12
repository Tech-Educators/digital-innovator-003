--There is an order to how you create your tables. You must create the table you're referencing first, before the table which references it;

CREATE TABLE directors (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  director_name TEXT
);

CREATE TABLE movies (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT,
  director_id INT REFERENCES directors(id),
  release_date INT
);

-- Same with inserting data. Insert the data you're referencing first;

INSERT INTO directors (director_name) VALUES
('Anthony Russo'),--1 <- these are just comments
('Martin Scorsese'),--2 <- they are the id of the director in the directors table
('Tim Burton'),--3 <- just so that you don't have to keep going back and forth between tables and SQL editor
('Frank Darabont'),--4
('John Lasseter');--5

INSERT INTO movies (title, director_id, release_date) VALUES
('Captain America: Civil War', 1, 2016),
('Shutter Island', 2, 2010),
('Big Fish', 3, 2003),
('Shawshank Redemption', 4, 1994),
('Toy Story', 5, 1995),
('A Bugs Life', 5, 1998),
('Beetlejuice', 3, 1988);

--Now that we've made our relationships in our tables, we need to craft a SELECT statement which literally JOINs them together

-- The following statement would just get us data from our 'movies' table:
-- SELECT movies.id, title, release_date
-- FROM movies

SELECT movies.id, title, release_date, directors.director_name
FROM movies
JOIN directors ON movies.director_id = directors.id

-- The beauty is we only need to make ONE update to our directors, and it'll reflect across all movies entries!

UPDATE directors SET director_name = 'Frank DarryDarryDooDah'
WHERE id = 4
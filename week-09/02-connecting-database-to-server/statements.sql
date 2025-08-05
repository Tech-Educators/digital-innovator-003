-- These are SQL statements we would use directly on Supabase


-- -- CREATE -- --
-- First off, I need to create a new table
CREATE TABLE books (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY, -- we want the database to keep track of the ID number as it increments. We ant this to happen automatically
  title VARCHAR(255), -- each line is a new column in the table. column_name on the left and DATA_TYPE on the right
  img_source TEXT,
  img_alt TEXT,
  author TEXT,
  release_year INT
)

-- If I were to make a different table for movies, I may start with this:
-- CREATE TABLE movies (
--     id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
--     title VARCHAR(255),
--     lead_actor VARCHAR(255),
--     release_year INT
-- )

-- -- INSERT -- --
INSERT INTO books (title, img_source, img_alt, author, release_year) VALUES 
('Flat Stanley', 'https://d1lp72kdku3ux1.cloudfront.net/title_instance/839/medium/3546231.jpg', 'a fantastic childrens book', 'Jeff Brown', 1964),
('Americanah', 'https://upload.wikimedia.org/wikipedia/commons/6/68/Americanah_book_cover.jpg', 'a book about love and war', 'Chimamanda Ngozi Adichie', 2013),
('Shaolin Spirit','https://www.penguin.co.uk/_next/image?url=https%3A%2F%2Fcdn.penguin.co.uk%2Fdam-assets%2Fbooks%2F9780241715192%2F9780241715192-jacket-large.jpg&w=819&q=100','Picture of the author Shi Heng Yi and the book The Way to Self-Mastery', 'Shi Heng Yi, Caroline Waight (Translator)', 2025),
('Creative Quest', 'https://books.google.co.uk/books/publisher/content?id=ng42DwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0UiLdPantsksuIEitVuusKTYSWzw&w=1280', 'A unique guide to creativity from Questlove', 'Questlove', 2018)
-- The first ()'s after books is where we say "Hey, put some data into these specific columns'
-- The second brackets after VALUES is where we say "Put in these EXACT entries, to the coulms". It follows the order of columns you wrote.
-- We can add multiple entries at once by comma seperating each entry.


-- CREATE TABLE books (
--   id INT PRIMARY KEY generated ALWAYS AS IDENTITY, -- we want the database to keep track of the ID number as it increments. We ant this to happen automatically
--   title VARCHAR(255), -- each line is a new column in the table. column_name on the left and DATA_TYPE on the right
--   img_source TEXT,
--   img_alt TEXT,
--   author TEXT,
--   release_year INT
-- )

-- -- SELECT -- --
-- SELECT ALL OF THE THINGS from our table
SELECT * FROM books

-- SELECT only the title column from that table
SELECT title FROM books

-- SELECT all the column info from books but limit it to the first 2
SELECT * FROM books LIMIT 2

-- SELECT all of the column info from books for the entry which matches the id of 12
SELECT * FROM books WHERE id = 12

-- STRETCH GOAL: Make this next SELECT statement work so that 'Flat Stanley' gets returned
-- Or, if you're using your own data, search for part of a title from your entries.
SELECT * FROM books WHERE title = 'Stan'
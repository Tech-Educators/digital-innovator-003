-- The CREATE here is for our genre table so that we have something to reference
CREATE TABLE genres (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT
)
-- We have to put data into our 'genre' table
INSERT INTO genres (title) VALUES
('Action'), --1 <- this is just a reference for ME as a Dev, of the ID of the genre
('Superhero'), --2
('Psychological'), --3
('Thriller'), --4
('Fantasy'),--5
('Drama'),--6
('Period Drama'),--7
('Childrens'),--8
('Adventure'),--9
('Comedy');--10

-- Now that we have a 'genre' table and a 'movie' table, we create a 'junction' table to marry them up
CREATE TABLE movie_genre_junction (
  movie_id INT REFERENCES movies(id),
  genre_id INT REFERENCES genres(id)
)
-- Then we need to put some data in the table!
INSERT INTO movie_genre_junction (movie_id, genre_id) VALUES
(1,1),
(1,2),
(2,3),
(2,4),
(3,5),
(3,9),
(4,7),
(5,8),
(5,9),
(5,1);

-- We have our tables, we have our data, now we need to bring it all together.
SELECT movies.title, ARRAY_AGG(genres.title) AS genre
FROM movies
JOIN movie_genre_junction ON movies.id = movie_genre_junction.movie_id
JOIN genres ON movie_genre_junction.genre_id = genres.id
GROUP BY movies.title
-- or...
SELECT movies.title AS movie_title, ARRAY_AGG(genres.title) AS genre
FROM movies
JOIN movie_genre_junction ON movies.id = movie_genre_junction.movie_id
JOIN genres ON movie_genre_junction.genre_id = genres.id
GROUP BY movie_title
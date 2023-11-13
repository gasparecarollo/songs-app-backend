\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite)  VALUES
('Atwa', 'System of A Down', 'Toxicity', '2:58', TRUE),
('Paradise City', 'Guns N Roses', 'Appetite for Destruction', '6:49', FALSE),
('The Loneliest', 'Maneskin',  'Rush!',  '4:07', TRUE),
 ('Wild World', 'Cat Stevens',  'Tea for the Tillerman', '3:15', FALSE),
 ('Next to Me' ,'Imagine Dragons', 'Evolve', '3:50', TRUE);

 INSERT INTO reviews (songs_id, reviewer, title, content, rating )
VALUES
('1', 'Evan', 'My Favorite', 'This album rocks! It crushes it when it comes to awesome lyrics', 3),
('2', 'Evan', 'My Favorite', 'This song crushes it when it comes to inspiring me', 3),
('3', 'Evan', 'My Least Favorite', 'This album crushes it when it comes to motivating me!', 5),
('2', 'Juliana', 'I Love Listening to this album!', 'I finally learned the lyrics to this album and listen to it on my commute to work!', 5),
('2', 'David', 'Cool Album', 'Awesome band! Music does not leave my headphones!', 1),
('2', 'Mr. Mingo', 'So Helpful', 'I got some awesome recommendations for this music and I gotta say its top notch!', 3),
('2', 'Alison', 'A lifesaver!','Helped me get my out of a dark place emotionally!', 4),
('3', 'Hannah', 'Insert Confetti Emoji Here', 'Great listen while doing chores!', 4),
('3', 'Gabi', 'My Friend Hannah', 'Gets a discount if I leave a positive review, so here it is', 5);
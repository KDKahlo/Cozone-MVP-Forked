--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE profile (
    userid BIGINT NOT NULL AUTO_INCREMENT, 
    username VARCHAR(40) not null, 
    birthdate DATE,
    email VARCHAR(255),
    password VARCHAR(30),
    serverRegion TEXT,
    currentRank TEXT,
    PRIMARY KEY (userid)
    );

--
-- Insert data
--
INSERT INTO profile(username, birthdate, email, password, serverRegion, currentRank) VALUES 
    ('winter', '2001-01-01', 'kminjeong@gmail.com', 'w1ntermemories11', 'Korea', 'Gold'), 
    ('kuromi', '2000-04-11', 'katarinayoo@gmail.com', 'angelbaby411', 'North America', 'Gold'), 
    ('RlyRy', '1992-08-19', 'rysevans@gyopmail.com', 'V1tri0l', 'Europe', 'Platinum'), 
    ('Kazuha', '1992-11-06', 'kkazuha@protonmail.com', 'M1yab1382', 'Asia Pacific', 'Ascendant'),
    ('SadPanda', '1995-03-28', 'rudeboy95@gmail.com', 'SpaceR00123', 'North America', 'Immortal'),
    ('TTVBreadboy', '1997-02-14', 'jjeong77@gmail.com', 'Valentin397', 'Europe', 'Ascendant'),
    ('PrettySavage', '2000-05-27', 'zmaldonado@gmail.com', '1nterN3bula', 'Latin America', 'Silver'),
    ('xQMaker73', '1996-07-07', 'callumrobinson@.com', 'C4lwozere', 'Europe', 'Ascendant'),
    ('sinisterkeu', '1993-03-10', 'jgarcia@protonmail.com', 'KeuKatiaJaro99', 'Asian Pacific', 'Silver');
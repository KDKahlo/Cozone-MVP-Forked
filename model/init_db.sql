--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE allUsers (
    userid INT NOT NULL AUTO_INCREMENT, 
    username VARCHAR(40) not null, 
    birthdate DATE,
    email VARCHAR(255),
    password VARCHAR(255),
    serverRegion TEXT,
    currentRank TEXT,
    avatarURL VARCHAR(255),
    PRIMARY KEY (userid)
    );

--
-- Insert data
--
INSERT INTO allUsers (username, birthdate, email, password, serverRegion, currentRank, avatarUrl) VALUES 
    ('cydonian', '1993-09-16', 'eras3rase@gmail.com', 'Radiant17', 'Europe', 'Immortal', 'https://64.media.tumblr.com/add609c63657e848b038031c6c95003e/9fb3e801f69478a3-46/s500x750/64f8c89bdb82d13164589454cc9947f61c4fa818.pnj')
    ('winter', '2001-01-01', 'kminjeong@gmail.com', 'w1ntermemories11', 'Korea', 'Gold', 'https://64.media.tumblr.com/238f872a870878fc544f1ab3d310d655/da6bff35ba9041f6-19/s500x750/1e8ccc468947f88244cc678bcd4f96fedfcf17ab.jpg'), 
    ('kuromi', '2000-04-11', 'katarinayoo@gmail.com', 'angelbaby411', 'NA', 'Silver', 'https://64.media.tumblr.com/60b4f77c6312f0d321f7f453f04623d0/103a7be3e9cec002-88/s1280x1920/7396b087743f76234f41108cae67114a39d9685b.jpg'), 
    ('RlyRy', '1992-08-19', 'rysevans@gyopmail.com', 'V1tri0l', 'Europe', 'Platinum', 'https://64.media.tumblr.com/863f59adc151de6a0a0b3813966250c0/9fb3e801f69478a3-e6/s640x960/a87c947a6e8519c3bb1696f3567834a2822237cc.pnj'), 
    ('Kazuha', '1992-11-06', 'kkazuha@protonmail.com', 'M1yab1382', 'AP', 'Ascendant', 'https://64.media.tumblr.com/b9cf8ed596007219ee4dfd2a2fc14c66/78637369ddfdf050-10/s1280x1920/27357fde0b1779d1aab31467951ec05cf37aada5.jpg'),
    ('SadPanda', '1995-03-28', 'rudeboy95@gmail.com', 'SpaceR00123', 'NA', 'Immortal', 'https://64.media.tumblr.com/a302a53ca34734535f083dcfa42ef0a4/68806959c7b602c8-9d/s2048x3072/5f9a72bc66deb244105b6db1ec36d968b19a89fa.jpg'),
    ('TTVBreadboy', '1997-02-14', 'jjeong77@gmail.com', 'Valentin397', 'Europe', 'Ascendant', 'https://64.media.tumblr.com/3973e960b33fe67381d0595c1e7954dc/141aaafcce2acffb-f3/s1280x1920/56ce48a3a9cc9f2c638e6570968f439039e10c34.jpg'),
    ('PrettySavage', '2000-05-27', 'zmaldonado@gmail.com', '1nterN3bula', 'LatAm', 'Silver', 'https://64.media.tumblr.com/879c13ce837fcc245e074c026f2512ba/87737a132d8f8198-c2/s540x810/862a24d4dcad1ce9e7c6a0edf3003a74b16befba.jpg'),
    ('xQMaker73', '1996-07-07', 'callumrobinson@.com', 'C4lwozere', 'Europe', 'Ascendant', 'https://64.media.tumblr.com/abe4f33790ab0b87ca5e7268cf28ce00/tumblr_p12h9mXMuH1vv3txeo7_r1_400.pnj'),
    ('sinisterkeu', '1993-03-10', 'jgarcia@protonmail.com', 'KeuKatiaJao99', 'AsP', 'Silver', 'https://pics.craiyon.com/2023-11-13/u1N7fk7WRnOQ2_qjd4fXEA.webp'),
    ('charlierabbit', '1996-02-01', 'dykim@gmail.com', '3mergencyC4bbages', 'NA', 'Diamond', 'https://64.media.tumblr.com/b332da73435dc5c897fa62c20f90b9a1/e60b1bfbb6ba3d92-de/s400x600/cb25dbdf2e81aac4566b0f4029ef53f6650e2a5f.pnj')
    ('Misfate', '1999-04-25', 'brendanw@protonmail.com', 'Simp-b4lls', 'AP', 'Ascendant', 'https://i.pinimg.com/236x/0b/fc/08/0bfc084deb3a7f6af72e9c338c6c42e5.jpg')
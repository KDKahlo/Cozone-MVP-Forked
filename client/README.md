# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Feature Extension

For the feature extension, I wanted to give the player profiles, the Tinder card effect and make it possible to swipe through player profiles to find someone you would like to game with. If everything works as I hope in the end, when you swipe to the right it will put the players in a grouping of possible players to game with. Ones swiped to the left will be omitted as possible gaming buddies. There is also a favorites button that I would like to give functionality to, that will allow a user to save any player they click that button on, into a favorites list. Not sure if that is redundant. There is also a refresh button to refresh the player list. I would finally like to round it out by allowing the user to filter the players before swiping or swiping the whole list as they see fit.

I included a navbar, so the future extension into chat would be possible as well.

-installed icons from mui.com using `npm install @mui/material @mui/styled-engine-sc styled-components`

- then run  `npm install @material-ui/core`

-search for icon in mui.com. your next install will be `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`

-for the Tinder style cards you will need to install `npm i react-tinder-card@1.4.5`

The installs from mui will give you then ability to not only use icon from mui.com but it will has dependencies installed in the package that will allow you to turn the buttons into icons.

For the react-tinder-cards, I needed to install an older version to be compatible with the version of react. With that in mind, I will include the link to the website where I found the package in case a different version will be necessary for you. '<https://www.npmjs.com/package/react-tinder-card/v/1.4.5>'.

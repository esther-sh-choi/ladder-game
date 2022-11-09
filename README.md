# Ladder Game

A game for 2-6 players that randomly matches the players with an input value takes in an input based on the number of players. It consists of ladder algorithm that assigns the input values to the player randomly. It is often used to set prizes, built with React, JavaScript, and CSS.

## Introduction

This app is an online version of the 'ladder game' that is very widely used draw lots. Usually, the ladders are drawn by hand and thus, the result of the lot can be manipulated. I made this app so that the ladder building algorithm stays random and is impartial to everyone involved. Also, this app is accessible on all devices through the link provided in case there are no pen and paper around.

## Technologies

## Project Screen Shots

![Hnet-image-2](https://user-images.githubusercontent.com/100092097/160527535-0f250a16-d108-412f-83f9-d5e6dcd5f4f4.gif)
![Hnet-image](https://user-images.githubusercontent.com/100092097/160527576-09ca21af-3d97-4058-b45e-b3cda6535648.gif)
![Hnet-image-6](https://user-images.githubusercontent.com/100092097/160716153-0eff7ddd-827e-4056-9c7a-739c2097705c.gif)
![Hnet-image-3](https://user-images.githubusercontent.com/100092097/160527606-0a4aca90-ccc2-404a-8ba0-bee8747d71e8.gif)
![Hnet-image-5](https://user-images.githubusercontent.com/100092097/160527631-71d42e63-5ba4-4dd5-93da-864edf7c2f4c.gif)

## Reflection

- What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
- What did you set out to build?
- Why was this project challenging and therefore a really good learning experience?
- What were some unexpected obstacles?
- What tools did you use to implement this project?
  - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.

#### Example:

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.

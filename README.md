# Guess My Number - React Native Game

## Overview

This is a simple React Native game where the app attempts to guess the number you've picked between 1 and 99. The game uses several screens, components, and logic to ensure an engaging experience.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [How to Play](#how-to-play)
4. [Project Structure](#project-structure)
5. [Dependencies](#dependencies)

## Features

- **Start Game Screen**: Input a number between 1 and 99.
- **Game Screen**: The app will try to guess your number. Provide feedback whether the guess should be higher or lower.
- **Game Over Screen**: The game ends when the app guesses your number correctly.

## Installation

To run this game locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/martinfrangul/guess-game.git
```

2. **Install dependencies:**

Navigate to the project folder and install the necessary dependencies:

```bash
npm install
```

3. **Start the app:**

Make sure you have Expo CLI installed:

```bash
npm start
```

Then scan the QR code with your Expo Go app or use an Android/iOS emulator.

## How to Play

1. **Start the game:**

- Enter a number between 1 and 99.
- Press Confirm to start.

2. **App guesses your number:**

- The app will display a random guess.
- Press + if the guess is too low, or - if it's too high.
  
3. **Game Over:**

- The game ends when the app correctly guesses your number.
- Restart the game or exit.


## Project Structure

```
bash
.
├── assets/
│   ├── fonts/
│   ├── images/
├── components/
│   ├── ui/
│   ├── game/
├── constants/
│   └── colors.js
├── screens/
│   ├── StartGameScreen.js
│   ├── GameScreen.js
│   ├── GameOverScreen.js
├── App.js
└── ...
```

- **App.js**: Main entry point. Manages the game flow.
- **StartGameScreen.js**: Screen to input the player's number.
- **GameScreen.js**: The game logic where the app tries to guess the player's number.
- **GameOverScreen.js**: Displayed when the game ends.


## Dependencies

The following dependencies are required to run the game:

- **expo:** For running the app.
- **expo-font:** To load custom fonts.
- **expo-splash-screen:** To manage the splash screen during app startup.
- **react-native:** Framework for building native apps using React.
- **expo-linear-gradient:** For gradient backgrounds.

To install these dependencies, ensure you're using Expo and run:

```bash
npm install expo-font expo-splash-screen expo-linear-gradient
```

**Happy playing!**

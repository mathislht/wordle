# Wordle Game

## Description

Wordle is a word guessing game where players need to guess a 5-letter word in 6 attempts. After each guess, the game provides feedback on the guess's accuracy:

- **Green**: The letter is correct and in the correct position.
- **Yellow**: The letter is correct but in the wrong position.
- **Grey**: The letter is incorrect.

The player continues guessing until they either guess the word correctly or run out of attempts.

## Features

- **Color feedback**: Letters change color based on their correctness.
- **Attempts and game state**: The number of remaining attempts is displayed, and the game ends when the word is guessed or when attempts run out.
- **Start a new game**: You can restart the game after it ends.

## Technologies Used

- **Angular**: Framework for building the app.
- **HTML5**: Structure of the webpage.
- **CSS3**: Styles for the app layout and design.
- **TypeScript**: Language for Angular components and logic.
- **Jasmine/Karma**: For unit testing and test coverage.

## Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14.x or higher)
- Angular CLI (installed globally)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/mathis_lht/wordle-game.git

2. Navigate to the project directory:

    ```bash
   cd wordle-game
   ```

3. Install the dependencies:

    ```bash
   npm install
   ```

4. Start the Angular development server:

    ```bash
   ng serve
   ```

5. Open your browser and visit http://localhost:4200 to play the game.


### Run tests

To run the unit tests and check the code coverage, execute the following command:

   ```bash
   ng test --code-coverage
   ```

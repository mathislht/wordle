import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private wordToGuess: string = '';
  private validWords: string[] = ['apple', 'grape', 'peach', 'plumb', 'mango'];

  constructor() {
    this.startNewGame();
  }

  startNewGame(): void {
    const randomIndex = Math.floor(Math.random() * this.validWords.length);
    this.wordToGuess = this.validWords[randomIndex];
  }

  getWord(): string {
    return this.wordToGuess;
  }

  isValidGuess(guess: string): boolean {
    return /^[a-zA-Z]{5}$/.test(guess.toLowerCase());
  }

  checkGuess(guess: string) {
    let feedback = '';
    let correct = true;
    const guessArr = guess.toLowerCase().split('');
    const wordArr = this.wordToGuess.split('');

    guessArr.forEach((letter, index) => {
      if (letter === wordArr[index]) {
        feedback += 'green ';
      } else if (wordArr.includes(letter)) {
        feedback += 'yellow ';
        correct = false;
      } else {
        feedback += 'grey ';
        correct = false;
      }
    });

    return { feedback: feedback.trim(), correct };
  }
}

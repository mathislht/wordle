import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wordle',
  imports: [CommonModule],
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.scss']
})
export class WordleComponent implements OnInit {
  guess: string = '';
  attempts: string[] = [];
  feedback: string[][] = [];
  remainingAttempts: number = 6;
  gameOver: boolean = false;

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame(): void {
    this.wordService.startNewGame();
    this.guess = '';
    this.attempts = [];
    this.feedback = [];
    this.remainingAttempts = 6;
    this.gameOver = false;
  }

  makeGuess(): void {
    if (this.wordService.isValidGuess(this.guess)) {
      const result = this.wordService.checkGuess(this.guess);
      this.attempts.push(this.guess);
      this.feedback.push(result.feedback.split(' '));

      this.remainingAttempts--;

      if (result.correct) {
        this.gameOver = true;
        alert('Congratulations! You guessed the word!');
      } else if (this.remainingAttempts === 0) {
        this.gameOver = true;
        alert('Game Over! The correct word was: ' + this.wordService.getWord());
      }
      console.log(this.feedback);
      this.guess = '';
    } else {
      alert('Invalid guess! Please enter a 5-letter word.');
    }
  }

  onInputChange(event: any): void {
    this.guess = event.target.value;
  }

  getLetterClass(feedback: string): string {
    switch (feedback) {
      case 'green': return 'correct';
      case 'yellow': return 'misplaced';
      case 'grey': return 'incorrect';
      default: return '';
    }
  }
}

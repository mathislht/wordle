import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordleComponent } from './wordle.component';
import { WordService } from '../../services/word.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('WordleComponent', () => {
  let component: WordleComponent;
  let fixture: ComponentFixture<WordleComponent>;
  let service: WordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, WordleComponent],
      providers: [WordService],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(WordleComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(WordService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should start a new game when "Start New Game" is clicked', () => {
    component.startNewGame();
    expect(component.remainingAttempts).toBe(6);
    expect(component.attempts.length).toBe(0);
    expect(component.feedback.length).toBe(0);
  });

  it('should make a guess and update the attempts and feedback', () => {
    spyOn(service, 'checkGuess').and.returnValue({ feedback: 'green green green green green', correct: true });
    component.guess = 'apple';
    component.makeGuess();
    expect(component.attempts.length).toBe(1);
    expect(component.feedback.length).toBe(1);
    expect(component.remainingAttempts).toBe(5);
  });

  it('should end the game when the word is guessed correctly', () => {
    spyOn(service, 'checkGuess').and.returnValue({ feedback: 'green green green green green', correct: true });
    component.guess = 'apple';
    component.makeGuess();
    expect(component.gameOver).toBeTrue();
  });

  it('should handle remaining attempts and stop when out of attempts', () => {
    component.remainingAttempts = 1;
    spyOn(service, 'checkGuess').and.returnValue({ feedback: 'yellow grey grey grey grey', correct: false });
    component.guess = 'apple';
    component.makeGuess();
    expect(component.remainingAttempts).toBe(0);
    expect(component.gameOver).toBeTrue();
  });

  it('should not allow empty guesses', () => {
    component.guess = '';
    component.makeGuess();
    expect(component.attempts.length).toBe(0);
  });
});

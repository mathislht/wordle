import { TestBed } from '@angular/core/testing';
import { WordService } from './word.service';

describe('WordleService', () => {
  let service: WordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start a new game with a word from the valid words list', () => {
    service.startNewGame();
    expect(service.getWord()).toBeTruthy();
    expect(service['validWords']).toContain(service.getWord());
  });

  it('should validate a correct guess', () => {
    expect(service.isValidGuess('apple')).toBeTrue();
  });

  it('should reject invalid guesses', () => {
    expect(service.isValidGuess('appl')).toBeFalse();
    expect(service.isValidGuess('apple123')).toBeFalse();
  });

  it('should give correct feedback for a guess', () => {
    service['wordToGuess'] = 'apple';
    expect(service.checkGuess('apple')).toEqual({ feedback: 'green green green green green', correct: true });
    expect(service.checkGuess('grape')).toEqual({ feedback: 'grey grey yellow yellow green', correct: false });
    expect(service.checkGuess('mango')).toEqual({ feedback: 'grey yellow grey grey grey', correct: false });
  });
});

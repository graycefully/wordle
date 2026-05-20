import { answers } from './words';

export type LetterResult = 'green' | 'yellow' | 'grey';

export function getDayNumber(date: Date): number {
  const start = new Date(2026, 4, 20);
  return Math.floor((+date - +start) / 86400000);
}

export function getWordOfTheDay(): string {
  const dayNumber = getDayNumber(new Date());
  return answers[dayNumber % answers.length];
}

export function checkGuess(guess: string, answer: string): LetterResult[] {
  const result: LetterResult[] = Array(5).fill('grey');
  const guessLetters = guess.split('');
  const answerLetters = answer.split('');

  // Mark greens
  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      result[i] = 'green';
      answerLetters[i] = '#'; // Consume the letter so that it can't be matched again
      guessLetters[i] = '#';
    }
  }

  // Mark yellows
  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] == '#') continue;
    const index = answerLetters.indexOf(guessLetters[i]);
    if (index !== -1) {
      result[i] = 'yellow';
      answerLetters[index] = '#';
    }
  }

  return result;
}

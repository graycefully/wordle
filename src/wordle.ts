export type LetterResult = 'green' | 'yellow' | 'grey';

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

/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

// The keyboard shows one colour per letter, but a letter can come back with
// different statuses across guesses: guessing "PAPER" against "APPLE" marks
// the first P as misplaced and the second as correct. Lower rank wins, so the
// most informative status is the one that sticks.
const STATUS_RANKS = {
  correct: 0,
  misplaced: 1,
  incorrect: 2,
};

export function getStatusByLetter(guesses, answer) {
  const statusByLetter = {};

  for (const guess of guesses) {
    for (const { letter, status } of checkGuess(guess, answer)) {
      const knownStatus = statusByLetter[letter];

      if (!knownStatus || STATUS_RANKS[status] < STATUS_RANKS[knownStatus]) {
        statusByLetter[letter] = status;
      }
    }
  }

  return statusByLetter;
}

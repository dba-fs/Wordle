import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

import Banner from '../Banner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console. Parcel
// inlines NODE_ENV, so this whole block is stripped from production builds.
if (process.env.NODE_ENV !== 'production') {
  console.info({ answer });
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  // Derived from the guess list, so there's no second source of truth to
  // keep in sync.
  const hasWon = guesses.at(-1) === answer;
  const hasLost = !hasWon && guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const gameStatus = hasWon ? 'won' : hasLost ? 'lost' : 'running';
  const isGameOver = gameStatus !== 'running';

  function handleSubmitGuess(guess) {
    setGuesses((currentGuesses) => [...currentGuesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={isGameOver} />
      <Banner
        status={gameStatus}
        numOfGuesses={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;

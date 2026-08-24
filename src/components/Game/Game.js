import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

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
  // Guesses repeat (you can submit HELLO twice), so they need a stable id of
  // their own for React keys.
  const nextGuessId = React.useRef(0);

  function handleSubmitGuess(value) {
    setGuesses((currentGuesses) => [
      ...currentGuesses,
      { id: nextGuessId.current++, value },
    ]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;

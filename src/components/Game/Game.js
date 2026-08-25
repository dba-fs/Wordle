import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

import Banner from '../Banner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';

function Game() {
  // In state rather than a module constant, so restarting can pick a new one.
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);

  // To make debugging easier, we'll log the solution in the console. Parcel
  // inlines NODE_ENV, so this whole block is stripped from production builds.
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.info({ answer });
    }
  }, [answer]);

  // Derived from the guess list, so there's no second source of truth to
  // keep in sync.
  const hasWon = guesses.at(-1) === answer;
  const hasLost = !hasWon && guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const gameStatus = hasWon ? 'won' : hasLost ? 'lost' : 'running';
  const isGameOver = gameStatus !== 'running';

  function handleSubmitGuess(guess) {
    setGuesses((currentGuesses) => [...currentGuesses, guess]);
  }

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={isGameOver} />
      <Keyboard guesses={guesses} answer={answer} />
      <Banner
        status={gameStatus}
        numOfGuesses={guesses.length}
        answer={answer}
        handleRestart={handleRestart}
      />
    </>
  );
}

export default Game;

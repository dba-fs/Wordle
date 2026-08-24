import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import Guess from '../Guess';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        // Always the same 6 rows, so the row's position is its identity.
        <Guess key={index} value={guesses[index]} />
      ))}
    </div>
  );
}

export default GuessResults;

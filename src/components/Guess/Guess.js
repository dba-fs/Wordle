import React from 'react';

import { WORD_LENGTH } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  // null for the empty slots, so they keep their plain `cell` markup.
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(WORD_LENGTH).map((index) => {
        const cell = result?.[index];

        return (
          // The cells are fixed slots, so the index is a stable identity.
          <span key={index} className={cell ? `cell ${cell.status}` : 'cell'}>
            {cell?.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

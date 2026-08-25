import React from 'react';

import { WORD_LENGTH } from '../../constants';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((index) => (
        // The cells are fixed slots, so the index is a stable identity.
        <span key={index} className="cell">
          {value?.[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;

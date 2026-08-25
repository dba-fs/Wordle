import React from 'react';

import { getStatusByLetter } from '../../game-helpers';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

// Status colours are the whole point of this panel, so they also need a text
// equivalent for anyone who can't see them.
const STATUS_LABELS = {
  correct: 'correct',
  misplaced: 'misplaced',
  incorrect: 'not in the word',
};

function Keyboard({ guesses, answer }) {
  const statusByLetter = getStatusByLetter(guesses, answer);

  return (
    <div
      className="keyboard"
      role="group"
      aria-label="Alphabet, with the status of each guessed letter"
    >
      {KEYBOARD_ROWS.map((row) => (
        <div key={row[0]} className="keyboard-row">
          {row.map((letter) => {
            const status = statusByLetter[letter];

            return (
              <span
                key={letter}
                className={
                  status ? `keyboard-letter ${status}` : 'keyboard-letter'
                }
              >
                {letter}
                {status && (
                  <span className="visually-hidden">
                    {' '}
                    {STATUS_LABELS[status]}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

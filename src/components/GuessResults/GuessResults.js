import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {/* The list is append-only, so a guess's position is its identity. */}
      {guesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

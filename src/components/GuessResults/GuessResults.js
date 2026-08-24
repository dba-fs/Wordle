import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

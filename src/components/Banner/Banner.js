import React from 'react';

function Banner({ status, numOfGuesses, answer }) {
  if (status === 'won') {
    return (
      // Polite: the win is good news, not something to interrupt for.
      <div role="status" className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numOfGuesses} {numOfGuesses === 1 ? 'guess' : 'guesses'}
          </strong>
          .
        </p>
      </div>
    );
  }

  return (
    <div role="alert" className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;

import React from 'react';

import { WORD_LENGTH } from '../../constants';

function GuessInput({ handleSubmitGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guess);

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={disabled}
        id="guess-input"
        type="text"
        maxLength={WORD_LENGTH}
        pattern={`[A-Z]{${WORD_LENGTH}}`}
        title={`${WORD_LENGTH} letter word`}
        value={guess}
        onChange={(event) => {
          // toUpperCase() can lengthen the value ('ß' -> 'SS'), which
          // maxLength does not constrain, so re-clamp it here.
          setGuess(event.target.value.toUpperCase().slice(0, WORD_LENGTH));
        }}
      />
    </form>
  );
}

export default GuessInput;

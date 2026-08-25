import React from 'react';

import { WORD_LENGTH } from '../../constants';

function GuessInput({ handleSubmitGuess, disabled }) {
  const [guess, setGuess] = React.useState('');
  const inputRef = React.useRef(null);

  // Typing here is the only move available while the game is running, so the
  // input holds focus. This also catches focus after a restart, which unmounts
  // the banner button that was focused and would otherwise drop it to <body>.
  React.useEffect(() => {
    if (!disabled) {
      inputRef.current.focus();
    }
  }, [disabled]);

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guess);

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        ref={inputRef}
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

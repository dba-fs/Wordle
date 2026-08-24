import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ guess });

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          // toUpperCase() can lengthen the value ('ß' -> 'SS'), which
          // maxLength does not constrain, so re-clamp it here.
          setGuess(event.target.value.toUpperCase().slice(0, 5));
        }}
      />
    </form>
  );
}

export default GuessInput;

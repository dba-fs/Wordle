import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console. Parcel
// inlines NODE_ENV, so this whole block is stripped from production builds.
if (process.env.NODE_ENV !== 'production') {
  console.info({ answer });
}

function Game() {
  return <GuessInput />;
}

export default Game;

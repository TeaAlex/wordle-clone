import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResult";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import {checkGuess} from "../../game-helpers";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export const winningStatusEnum = {
  'IDLE': 'IDLE',
  'WIN': 'WIN',
  'LOSE': 'LOSE',
}

function Game() {

  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [winningStatus, setWinningStatus] = React.useState(winningStatusEnum.IDLE)

  const checkWinning = (guesses) => {
    const hasWon = checkGuess(guess, answer).every(({status}) => status === 'correct');
    if (hasWon) {
      setWinningStatus(winningStatusEnum.WIN);
    }
    if (!hasWon && guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setWinningStatus(winningStatusEnum.LOSE);
    }
  }

  const handleNewGuess = (event) => {
    event.preventDefault();
    const newGuesses = [...guesses, guess]
    setGuesses(newGuesses);
    setGuess('');
    checkWinning(newGuesses);
  }

  const banner = {
    [winningStatusEnum.WIN]: <HappyBanner guesses={guesses} />,
    [winningStatusEnum.LOSE] : <SadBanner answer={answer} />
  }

  return (
    <div>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmit={handleNewGuess} guess={guess} setGuess={setGuess} winningStatus={winningStatus} />
      {
        banner[winningStatus]
      }
    </div>
  )
}

export default Game;

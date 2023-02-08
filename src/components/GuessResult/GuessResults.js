import React from "react";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses, answer}) {
  return (
    <div className="guess-results">
      {
        range(0, NUM_OF_GUESSES_ALLOWED).map(rowIndex => {
          const guess = guesses?.[rowIndex];
          return <Guess rowIndex={rowIndex} guess={guess} answer={answer} />
        })
      }
    </div>
  )
}

export default GuessResults;

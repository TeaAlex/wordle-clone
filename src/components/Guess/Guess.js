import React from "react";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({rowIndex, guess, answer}) {
  const COLS = 5;
  return (
    <p className="guess" key={rowIndex}>
      {
        range(0, COLS).map(colIndex => {
          const letter = checkGuess(guess, answer)?.[colIndex]?.letter;
          const status = checkGuess(guess, answer)?.[colIndex]?.status;
          return (
            <span className={`cell ${status}`} key={colIndex}>
                      {letter}
                    </span>
          )
        })
      }
    </p>
  )
}

export default Guess;

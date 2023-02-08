import React from "react";
import {winningStatusEnum} from "../Game";

function GuessInput({guess, setGuess, handleSubmit, winningStatus}) {

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" value={guess} required minLength={5} maxLength={5}
               disabled={winningStatus !== winningStatusEnum.IDLE}
               onChange={(event) => {
                setGuess(event.target.value.toUpperCase());
        }}/>
      </form>
    </>
  )
}

export default GuessInput;

import { useState, useRef } from 'react'

export default function Player() {
  
  const playerName = useRef();
  const [chosenPlayerName, setChosenPlayerName] = useState('')

  function handleButtonClick(){
    setChosenPlayerName(newName => playerName.current.value)
  }
  
  return (
    <section id="player">
      <h2>Welcome {chosenPlayerName ? chosenPlayerName : 'unknown player'}</h2>
      <p>
        <input 
          ref={playerName} 
          type="text"
        />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
  
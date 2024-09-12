import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { useState } from "react"
function App() {
 /*  const [activePlayer,setActivePlayer]=useState('X'); */
  const [gameTurns,setgameTurns]=useState([])

  let currentPlayer='X';

  if ( gameTurns.length>0 && gameTurns[0].player==='X'){
    currentPlayer='O'
  }

  function handleSelectSquare(rowIndex,colIndex){
    /* setActivePlayer((activePlayer)=>activePlayer==='X'?'O':'X') */
    setgameTurns((prevTurns)=>{
      
      let currentPlayer='X';

      if ( prevTurns.length>0 && prevTurns[0].player==='X'){
        currentPlayer='O'
      }
      const updatedTurns=[
        {square:{rowAt:rowIndex ,colAt: colIndex},player:currentPlayer},
        ...prevTurns];
        return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id='players' className="highlight-player">
         <Player isActive={activePlayer==='X'} initialname='player 1' symbol='X'/>
         <Player isActive={activePlayer==='O'} initialname='player 2' symbol='O'/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App

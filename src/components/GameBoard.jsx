import React from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = ({onSelectSquare,turns}) => {

    let gameBoard = initialGameBoard;
    for (const turn of turns){
        const {square,player}=turn;
        gameBoard[square.rowAt][square.colAt]=player
      
    }
    /* const[gameBoard,setgameBoard]=useState(initialGameBoard);
 

    function handleSelectSquare(rowIndex,colIndex){
        setgameBoard((prevgameBoard)=>{
            const updatedBoard=[...prevgameBoard.map(innerarray=>[...innerarray])]
           updatedBoard [rowIndex][colIndex]=activePlayerSymbol
           return updatedBoard
        } );
        onSelectSquare();
    } */

    return (
        <ol id='game-board'>
            
            {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=>( <li key={colIndex} >
                        <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>))}
                </ol>
            </li>))}
            
        </ol>
        
    )
}

export default GameBoard
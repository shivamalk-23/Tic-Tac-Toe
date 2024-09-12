import React from 'react'

const Log = ({turns}) => {
  return (
   <ol id='log'>
     {turns.map((turn,stepKey)=>(<li key={stepKey}>{turn.player+' at '+turn.square.rowAt+' , '+turn.square.colAt}</li>))}
   </ol>
  )
}

export default Log

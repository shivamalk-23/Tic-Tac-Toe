import { useState } from "react"

export default function player({initialname, symbol,isActive}) {
    const [player,setplayer]=useState(false)
    const [names,setnames]=useState(initialname)
 
    function edit(){
        setplayer((player)=>!player)
    }
    function handleChange(event){
      setnames(event.target.value)
    }


    return (
        <li className={isActive ? 'active':undefined}>
            <span className="player">
               {player==false &&  <span className="player-name">{names}</span> }
               {player &&  <input type="text" required value={names} onChange={handleChange} />}
               
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={edit}>{player ?  'Save' :'Edit'}</button>
        </li>
    )
}
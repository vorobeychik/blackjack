import React,{useContext} from "react";
import useSceneContext from "../../hooks/useSceneContext";


export function Bets(){
    const {scene} = useSceneContext()!

    return(
       <div>
           <button onClick={() => scene?.changeColor('#ffe4e1')}>Смена цвета</button>
       </div>
    )
}
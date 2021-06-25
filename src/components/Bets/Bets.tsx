import React, {useCallback, useContext} from "react";
import useSceneContext from "../../hooks/useSceneContext";
import {useDispatch, useSelector} from "react-redux";
import {selectBetsVisibility,makeBet,hideBets,createNewDeck,getCards} from "../../redux/blackJackSlice";
import styles from './Bets.module.css'
import chip60 from '../../assets/svg/Chip60.svg'
import {useBlackJack} from "../../hooks/useBlackJack";


export function Bets(){
    const dispatch = useDispatch();
    const betsVisibility = useSelector(selectBetsVisibility)
    const sceneContext = useSceneContext()!;
    const {startNewRound} = useBlackJack(sceneContext.scene);


    const betHandler = useCallback((bet) => {
        dispatch(makeBet(bet))
        startNewRound()
    },[])

    if(!betsVisibility){
        return (
            <>
            </>
        )
    }



    return(
       <div className={styles.bets_container}>
           <div>
               <img src={chip60} className={styles.chip30} onClick={() => betHandler(30)}/>
           </div>
           <div>
               <img src={chip60} className={styles.chip60} onClick={() => betHandler(60)}/>
           </div>
           <div>
               <img src={chip60} className={styles.chip300} onClick={() => betHandler(300)}/>
           </div>
           <div>
               <img src={chip60} className={styles.chip600 } onClick={() => betHandler(600)}/>
           </div>
           <div>
               <img src={chip60} className={styles.chip1500} onClick={() => betHandler(1500)}/>
           </div>
           <div>
               <img src={chip60} className={styles.chip6k} onClick={() => betHandler(6000)}/>
           </div>
           <div>
               <img src={chip60} className={styles.chip30k} onClick={() => betHandler(30000)}/>
           </div>
           <div>
               <img src={chip60} className={styles.multiple}/>
           </div>
       </div>
    )
}
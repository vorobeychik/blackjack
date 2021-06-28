import React, {useCallback, useEffect} from "react";
import styles from './GameControls.module.css'
import {useSelector} from "react-redux";
import {
    selectDealerHandWeight,
    selectGameControlsVisibility,
    selectIsDealerTurn,
    selectPlayerHandWeight
} from "../../redux/blackJackSlice";
import More_Button from '../../assets/svg/More_Button.svg'
import {useBlackJack} from "../../hooks/useBlackJack";
import useSceneContext from "../../hooks/useSceneContext";

export function GameControls(){
    const isVisible = useSelector(selectGameControlsVisibility)
    const sceneContext = useSceneContext()!;
    const {playerTakeCard,checkPlayerHand,checkDealerHand,dealerTurn} = useBlackJack(sceneContext.scene);

    const playerHandWeight = useSelector(selectPlayerHandWeight);
    const dealerHandWeight = useSelector(selectDealerHandWeight)
    const isDealerTurn = useSelector(selectIsDealerTurn)

    const moreHandler = useCallback(playerTakeCard,[]);
    const stopHandler = useCallback(dealerTurn,[])


    useEffect(() => {
        checkPlayerHand(playerHandWeight)
    },[playerHandWeight])

    useEffect(() => {

        if(isDealerTurn){
            checkDealerHand(dealerHandWeight)
            console.log('дИЛЛЕР СДЕЛАЛ ХОД')
        }
    },[dealerHandWeight,isDealerTurn])


    if(!isVisible){
        return (
            <>
            </>
        )
    }



    return (
        <div className={styles.game_controls_container}>
            <p className={styles.game_controls_title}>Примите ваше решение</p>
            <div className={styles.game_controls_buttons}>
                {/*<div>*/}
                {/*    <img src={More_Button} />*/}
                {/*</div>*/}
                <div>
                    <img src={More_Button} onClick={moreHandler}/>
                </div>
                <div>
                    <img src={More_Button} onClick={stopHandler}/>
                </div>
                {/*<div>*/}
                {/*    <img src={More_Button} />*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
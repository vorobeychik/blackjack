import {useDispatch, useSelector} from "react-redux";
import {
    createNewDeck,
    getCards,
    hideBets,
    countHandWeight,
    showGameControls,
    selectPlayerHandWeight,
    roundEnd,
    startDealerTurn,
    playerWinBet
} from "../redux/blackJackSlice";
import {IWorld3d} from "../world3d/world3d";
import {useEffect, useState} from "react";

export function useBlackJack(scene:IWorld3d | null){
    const dispatch = useDispatch()
    const handWeight = useSelector(selectPlayerHandWeight)
    console.log(scene)



    function startNewRound(){

        dispatch(hideBets())
        dispatch(createNewDeck())
        dispatch(getCards({player:'dealer',amount:2}))
        dispatch(getCards({player:'player',amount:2}))
        dispatch(countHandWeight('player'))
        dispatch(countHandWeight('dealer'))
        dispatch(showGameControls())
        console.log(scene)
        scene?.moveBox()
    }

    function playerTakeCard(){
        dispatch(getCards({player:'player',amount:1}))
        dispatch(countHandWeight('player'))
        console.log(handWeight)
    }

    function dealerTakeCard(){
        dispatch(getCards({player:"dealer",amount:1}))
        dispatch(countHandWeight('dealer'))
    }

    function checkDealerHand(handWeight:number){
        if(handWeight <= 16){
            dealerTakeCard()
        }else{
            console.log('Рука диллераБольше 16',handWeight)
        }
    }

    function dealerTurn(){
        dispatch(startDealerTurn())
    }

    function checkPlayerHand(handWeight:number){
        if(handWeight > 21){
            dispatch(roundEnd())
        }
       console.log('вес',handWeight)
    }

    function roundResult(playerHandWeight:number,dealerHandWeight:number){
        if (playerHandWeight === dealerHandWeight){
            dispatch(playerWinBet(1))
            console.log('Диллер победил')
        }if(playerHandWeight > dealerHandWeight){
            dispatch(playerWinBet(1.5))
            console.log('Игрок победил')
        }

        roundEnd()

    }





    return {startNewRound,playerTakeCard,checkPlayerHand,checkDealerHand,dealerTurn}
}
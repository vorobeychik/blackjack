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
    }

    function dealerTakeCard(){
        dispatch(getCards({player:"dealer",amount:1}))
        dispatch(countHandWeight('dealer'))
    }

    // function checkDealerHand(handWeight:number){
    //
    // }

    function dealerTurn(){
        dispatch(startDealerTurn())
    }

    function checkHands(playerHandWeight:number,dealerHandWeight:number,isDealerTurn:boolean){
        if(isDealerTurn){
            if(dealerHandWeight <= 16){
                console.log('Рука диллера',dealerHandWeight)
                dealerTakeCard()

            }else{
                roundResult(playerHandWeight,dealerHandWeight)
            }
        }else{
            if(playerHandWeight > 21){
                console.log('У игрока больше 21')
                dispatch(roundEnd())

            }
            console.log('Вес',playerHandWeight)
        }
    }

    function roundResult(playerHandWeight:number,dealerHandWeight:number){
        if (playerHandWeight === dealerHandWeight){
            console.log('Равные очки')
            dispatch(playerWinBet(1))
        }if(playerHandWeight > dealerHandWeight){
            console.log('Игрок победил')
            dispatch(playerWinBet(1.5))
        }

        dispatch(roundEnd())

    }





    return {startNewRound,playerTakeCard,checkHands,dealerTurn,roundResult}
}
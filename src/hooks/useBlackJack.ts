import {useDispatch} from "react-redux";
import {createNewDeck, getCards, hideBets} from "../redux/blackJackSlice";
import {IWorld3d} from "../world3d/world3d";
import {useState} from "react";

export function useBlackJack(scene:IWorld3d | null){
    const dispatch = useDispatch()
    console.log(scene)


    function startNewRound(){
        dispatch(hideBets())
        dispatch(createNewDeck())
        dispatch(getCards({player:'dealer',amount:2}))
        dispatch(getCards({player:'player',amount:2}))

    }


    return {startNewRound}
}
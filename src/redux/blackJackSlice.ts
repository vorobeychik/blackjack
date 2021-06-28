import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {getRandomNumber, getWeightOfCard} from "../utils/utils";


const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const initialState:InitialStateType = {
    deck:[],
    isDealerTurn:false,
    dealer:{
        weight:0,
        hand:[],
    },
    player:{
        weight:0,
        hand:[],
    },
    balance:30000,
    bets:{
        isVisible:true,
        bet:0,
    },
    gameControls:{
        isVisible:false,
    }
}

type InitialStateType = {
    deck:Card[],
    dealer:Player,
    player:Player,
    balance:number,
    isDealerTurn:boolean,
    bets:{
        isVisible:boolean,
        bet:number,
    },
    gameControls:{
        isVisible:boolean,
    }

}

export type Card = {
    suit:string,
    value:string,
    weight:number,
}

type Player = {
    weight:number,
    hand:Card[],
}

const blackJackSlice = createSlice({
    name:'blackJack',
    initialState,
    reducers:{
        createNewDeck:(state) => {

            let deck:Card[] = [];

            suits.forEach((suit) => {
                values.forEach((value) => {
                    let weight = getWeightOfCard(value);


                    let card:Card = {
                        weight,
                        suit,
                        value
                    }

                    deck.push(card)
                })
            })


            state.deck = deck

            return state
        },
        getCards:(state,action:PayloadAction<{amount:number,player:string}>) => {
            const deck:Card[] = state.deck;
            const hand:Card[] = [];
            const {amount,player} = action.payload;

            for(let index = 0; index < amount;index++){
                const randomNumber = getRandomNumber(deck.length);
                const [card] = deck.splice(randomNumber,1);

                hand.push(card)
            }

            state.deck = deck;
            if(player === 'player'){
                state.player.hand = [...state.player.hand,...hand];
            }else if(player === 'dealer'){
                state.dealer.hand = [...state.dealer.hand,...hand];
            }


            return state
        },
        countHandWeight(state,action:PayloadAction<string>){
            const player = action.payload;
            let weight = 0;
            let hand:Card[];

            if(player === 'player'){
                hand = state.player.hand;
            }else if(player === 'dealer'){
                hand = state.dealer.hand;
            }

            // @ts-ignore
            hand.forEach((card) => {
                weight += getWeightOfCard(card.value)
            })

            if(player === 'player'){
                state.player.weight = weight;
            }else if(player === 'dealer'){
                state.dealer.weight = weight;
            }

            return state
        },
        addToBalance:(state,action:PayloadAction<number>) => {
            state.balance += action.payload
            return state
        },
        subtractFromBalance:(state,action:PayloadAction<number>) => {
            state.balance -= action.payload
            return state
        },
        showBets:(state) => {
            state.bets.isVisible = true
        },
        hideBets:(state) => {
            state.bets.isVisible = false
        },
        makeBet:(state,action:PayloadAction<number>) => {
          state.balance = state.balance - action.payload;
          state.bets.bet = action.payload;
        },
        playerWinBet:(state,action:PayloadAction<number>) => {
            const coefficient = action.payload;

            state.balance = state.balance + state.bets.bet * coefficient;
            state.bets.bet = 0;

            return state
        },
        roundEnd:(state) => {
          state.gameControls.isVisible = false;

          state.isDealerTurn = false;

          state.bets.bet = 0;
          state.bets.isVisible = true;

          state.player.hand = [];
          state.player.weight = 0;

          state.dealer.hand = [];
          state.dealer.weight = 0;
        },
        startDealerTurn:(state) => {
            state.isDealerTurn = true;
        },
        hideGameControls:(state) => {
            state.gameControls.isVisible = false;
        },
        showGameControls:(state) => {
            state.gameControls.isVisible = true;
        }


    }

})

export default blackJackSlice.reducer;

export const {createNewDeck,getCards,countHandWeight,addToBalance,subtractFromBalance,showBets,hideBets,makeBet,playerWinBet,hideGameControls,showGameControls,roundEnd,startDealerTurn} = blackJackSlice.actions;

export const selectBalance = (state:RootState) => state.blackJack.balance;
export const selectBetsVisibility = (state:RootState) => state.blackJack.bets.isVisible;
export const selectPlayerHandWeight = (state:RootState) => state.blackJack.player.weight;
export const selectIsDealerTurn = (state:RootState) => state.blackJack.isDealerTurn;
export const selectDealerHandWeight = (state:RootState) => state.blackJack.dealer.weight;
export const selectGameControlsVisibility = (state:RootState) => state.blackJack.gameControls.isVisible;

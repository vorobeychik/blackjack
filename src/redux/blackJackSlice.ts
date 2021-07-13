import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {getRandomNumber, getWeightOfCard} from '../utils/utils';
import {CardSuits, CardValues} from '../types/types';

const suits:CardSuits[] = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const values:CardValues[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const initialState:InitialStateType = {
  deck: [],
  isDealerTurn: false,
  dealer: {
    weights: {
      weight: 0,
      extraWeight: 0,
    },
    hand: [],
  },
  player: {
    weights: {
      weight: 0,
      extraWeight: 0,
    },
    hand: [],
  },
  balance: 30000,
  bets: {
    isVisible: true,
    bet: 0,
  },
  gameControls: {
    isVisible: false,
  },
};

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

};

export type Card = {
  suit:CardSuits,
  value:CardValues,
  weight:number,
  extraWeight?:number,
};

type Player = {
  weights: {
    weight:number,
    extraWeight:number
  },
  hand:Card[],
};

const blackJackSlice = createSlice({
  name: 'blackJack',
  initialState,
  reducers: {
    createNewDeck: (state) => {
      const deck:Card[] = [];

      suits.forEach((suit) => {
        values.forEach((value) => {
          const weight = getWeightOfCard(value);

          const card:Card = {
            weight,
            suit,
            value,
            ...(value === 'A' && {extraWeight: 1}),
          };

          deck.push(card);
        });
      });

      state.deck = deck;

      return state;
    },
    getCards: (state, action:PayloadAction<{amount:number, player:string}>) => {
      const {deck} = state;
      const hand:Card[] = [];
      const {amount, player} = action.payload;

      for (let index = 0; index < amount; index++) {
        const randomNumber = getRandomNumber(deck.length);
        const [card] = deck.splice(randomNumber, 1);

        hand.push(card);
      }

      state.deck = deck;
      if (player === 'player') {
        state.player.hand = [...state.player.hand, ...hand];
      } else if (player === 'dealer') {
        state.dealer.hand = [...state.dealer.hand, ...hand];
      }

      return state;
    },
    countHandWeight(state, action:PayloadAction<string>) {
      const player = action.payload;
      let weight = 0;
      let hand:Card[];

      if (player === 'player') {
        hand = state.player.hand;
      } else {
        hand = state.dealer.hand;
      }

      hand.forEach((card) => {
        weight += getWeightOfCard(card.value);
      });

      if (player === 'player') {
        state.player.weights.weight = weight;
        if (hand.some((card) => card.value === 'A')) {
          state.player.weights.extraWeight = weight - 10;
        }
      } else if (player === 'dealer') {
        state.dealer.weights.weight = weight;
        if (hand.some((card) => card.value === 'A')) {
          state.dealer.weights.extraWeight = weight - 10;
        }
      }

      return state;
    },
    addToBalance: (state, action:PayloadAction<number>) => {
      state.balance += action.payload;
      return state;
    },
    subtractFromBalance: (state, action:PayloadAction<number>) => {
      state.balance -= action.payload;
      return state;
    },
    showBets: (state) => {
      state.bets.isVisible = true;
    },
    hideBets: (state) => {
      state.bets.isVisible = false;
    },
    makeBet: (state, action:PayloadAction<number>) => {
      state.balance -= action.payload;
      state.bets.bet = action.payload;
    },
    playerWinBet: (state, action:PayloadAction<number>) => {
      const coefficient = action.payload;

      state.balance += state.bets.bet * coefficient;
      state.bets.bet = 0;

      return state;
    },
    roundEnd: (state) => {
      state.gameControls.isVisible = false;

      state.isDealerTurn = false;

      state.bets.bet = 0;
      state.bets.isVisible = true;

      state.player.hand = [];
      state.player.weights.weight = 0;
      state.player.weights.extraWeight = 0;

      state.dealer.hand = [];
      state.dealer.weights.weight = 0;
      state.dealer.weights.extraWeight = 0;
    },
    startDealerTurn: (state) => {
      state.isDealerTurn = true;
    },
    hideGameControls: (state) => {
      state.gameControls.isVisible = false;
    },
    showGameControls: (state) => {
      state.gameControls.isVisible = true;
    },

  },

});

export default blackJackSlice.reducer;

export const {
  createNewDeck, getCards, countHandWeight, addToBalance, subtractFromBalance, showBets, hideBets, makeBet, playerWinBet, hideGameControls, showGameControls, roundEnd, startDealerTurn,
} = blackJackSlice.actions;

export const selectBalance = (state:RootState) => state.blackJack.balance;
export const selectBetsVisibility = (state:RootState) => state.blackJack.bets.isVisible;
export const selectPlayerHandWeight = (state:RootState) => state.blackJack.player.weights.weight;
export const selectIsDealerTurn = (state:RootState) => state.blackJack.isDealerTurn;
export const selectDealerHandWeight = (state:RootState) => state.blackJack.dealer.weights.weight;
export const selectGameControlsVisibility = (state:RootState) => state.blackJack.gameControls.isVisible;
export const selectDealerHand = (state:RootState) => state.blackJack.dealer.hand;
export const selectPlayerHand = (state:RootState) => state.blackJack.player.hand;
export const selectDealerHandExtraWeight = (state:RootState) => state.blackJack.dealer.weights.extraWeight;
export const selectPlayerHandExtraWeight = (state:RootState) => state.blackJack.player.weights.extraWeight;
export const selectDealerHandWeights = (state:RootState) => state.blackJack.dealer.weights;
export const selectPlayerHandWeights = (state:RootState) => state.blackJack.player.weights;

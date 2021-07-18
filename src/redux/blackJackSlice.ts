import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {
  createDeck, getBalance, getRandomNumber, getWeightOfCard, setBalance,
} from '../utils/utils';
import {CardSuits, CardValues} from '../types/types';

export enum Persons {
  Player = 'Player',
  Dealer = 'Dealer',
}

export enum Phase{
  BetPhase = 'BetPhase',
  PlayerPhase = 'PlayerPhase',
  DealerPhase = 'DealerPhase',
  RoundResultPhase = 'RoundResultPhase',
}

const initialState:StateType = {
  deck: [],
  isDealerTurn: false,
  isCardTurned: true,
  result: {
    playerWillWin: 0,
    playerWillLose: 0,
  },
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
  balance: getBalance(),
  message: {
    isVisible: false,
  },
  bet: 0,
  bets: {
    isVisible: true,

  },
  gameControls: {
    isVisible: false,
  },
  addBalance: {
    isVisible: false,
  },
  phase: Phase.BetPhase,
};

type StateType = {
  deck:Card[],
  dealer:Player,
  isCardTurned:boolean,
  player:Player,
  balance:number,
  phase: Phase,
  isDealerTurn:boolean,
  result:{
    playerWillWin:number,
    playerWillLose:number,
  },
  message:{
    isVisible:boolean,
  },
  bet:number,
  bets:{
    isVisible:boolean,

  },
  gameControls:{
    isVisible:boolean,
  },
  addBalance:{
    isVisible:boolean,
  },
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
      state.deck = createDeck(8);

      return state;
    },
    getCards: (state, action:PayloadAction<{amount:number, player:Persons}>) => {
      const {deck} = state;
      const hand:Card[] = [];
      const {amount, player} = action.payload;

      for (let index = 0; index < amount; index += 1) {
        const randomNumber = getRandomNumber(deck.length);
        const [card] = deck.splice(randomNumber, 1);

        hand.push(card);
      }

      state.deck = deck;
      if (player === Persons.Player) {
        state.player.hand = [...state.player.hand, ...hand];
      } else if (player === Persons.Dealer) {
        state.dealer.hand = [...state.dealer.hand, ...hand];
      }

      return state;
    },
    countHandWeight(state, action:PayloadAction<string>) {
      const player = action.payload;
      let weight = 0;
      let hand:Card[];

      if (player === Persons.Player) {
        hand = state.player.hand;
      } else {
        hand = state.dealer.hand;
      }

      hand.forEach((card) => {
        weight += getWeightOfCard(card.value);
      });

      if (player === Persons.Player) {
        state.player.weights.weight = weight;
        if (hand.some((card) => card.value === 'A')) {
          state.player.weights.extraWeight = weight - 10;
        }
      } else if (player === Persons.Dealer) {
        state.dealer.weights.weight = weight;
        if (hand.some((card) => card.value === 'A')) {
          state.dealer.weights.extraWeight = weight - 10;
        }
      }

      return state;
    },
    setPlayerExtraWeightToWeight: (state) => {
      state.player.weights.weight = state.player.weights.extraWeight;
      state.player.weights.extraWeight = 0;
    },
    setDealerExtraWeightToWeight: (state) => {
      state.dealer.weights.weight = state.dealer.weights.extraWeight;
      state.dealer.weights.extraWeight = 0;
    },
    addToBalance: (state, action:PayloadAction<number>) => {
      state.balance += action.payload;
      setBalance(state.balance);
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
      state.bet = action.payload;
      state.result.playerWillLose = action.payload;

      setBalance(state.balance);
    },
    playerWinBet: (state, action:PayloadAction<number>) => {
      const coefficient = action.payload;
      const winAmount = state.bet * coefficient;

      state.balance += winAmount;
      state.bet = 0;
      state.result.playerWillWin = winAmount;
      setBalance(state.balance);

      return state;
    },
    roundEnd: (state) => {
      state.phase = Phase.BetPhase;

      state.isDealerTurn = false;
      state.isCardTurned = true;

      state.bet = 0;
      state.bets.isVisible = true;

      state.player.hand = [];
      state.player.weights.weight = 0;
      state.player.weights.extraWeight = 0;

      state.dealer.hand = [];
      state.dealer.weights.weight = 0;
      state.dealer.weights.extraWeight = 0;

      state.result.playerWillLose = 0;
      state.result.playerWillWin = 0;
    },
    changePhase: (state, action:PayloadAction<Phase>) => {
      state.phase = action.payload;
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
    showAddBalance: (state) => {
      state.addBalance.isVisible = true;
    },
    turnCard: (state, action:PayloadAction<boolean>) => {
      state.isCardTurned = action.payload;
    },
    showMessage: (state) => {
      state.message.isVisible = true;
    },
    hideMessage: (state) => {
      state.message.isVisible = false;
    },
    hideAddBalance: (state) => {
      state.addBalance.isVisible = false;
    },

  },

});

export default blackJackSlice.reducer;

export const {
  createNewDeck, getCards, countHandWeight, addToBalance, subtractFromBalance,
  showBets, hideBets, makeBet,
  playerWinBet, hideGameControls, showGameControls, roundEnd, startDealerTurn,
  hideAddBalance, showAddBalance,
  changePhase, showMessage, hideMessage, setPlayerExtraWeightToWeight,
  setDealerExtraWeightToWeight, turnCard,
} = blackJackSlice.actions;

export const selectBalance = (state:RootState) => state.blackJack.balance;
export const selectBetsVisibility = (state:RootState) => state.blackJack.bets.isVisible;
export const selectPlayerHandWeight = (state:RootState) => state.blackJack.player.weights.weight;
export const selectIsDealerTurn = (state:RootState) => state.blackJack.isDealerTurn;
export const selectDealerHandWeight = (state:RootState) => state.blackJack.dealer.weights.weight;
export const selectGameControlsVisibility = (state:RootState) => state.blackJack.gameControls.isVisible;
export const selectDealerHand = (state:RootState) => state.blackJack.dealer.hand;
export const selectPlayerHand = (state:RootState) => state.blackJack.player.hand;
export const selectDealerHandExtraWeight = (state:RootState):number => state.blackJack.dealer.weights.extraWeight;
export const selectPlayerHandExtraWeight = (state:RootState):number => state.blackJack.player.weights.extraWeight;
export const selectDealerHandWeights = (state:RootState) => state.blackJack.dealer.weights;
export const selectPlayerHandWeights = (state:RootState) => state.blackJack.player.weights;
export const selectAddBalanceVisibility = (state:RootState) => state.blackJack.addBalance.isVisible;
export const selectPhase = (state:RootState) => state.blackJack.phase;
export const selectMessage = (state:RootState) => state.blackJack.message;
export const selectDealerCard = (state:RootState, cardIndex:number) => state.blackJack.dealer.hand[cardIndex];
export const selectIsCardTurned = (state:RootState) => state.blackJack.isCardTurned;
export const selectDeck = (state:RootState) => state.blackJack.deck;
export const selectBet = (state:RootState) => state.blackJack.bet;
export const selectResult = (state:RootState) => state.blackJack.result;

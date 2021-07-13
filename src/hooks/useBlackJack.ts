import {useDispatch, useSelector} from 'react-redux';
import {useContext, useEffect, useState} from 'react';
import {
  createNewDeck,
  getCards,
  hideBets,
  countHandWeight,
  showGameControls,
  selectPlayerHandWeight,
  roundEnd,
  startDealerTurn,
  playerWinBet,
} from '../redux/blackJackSlice';

export function useBlackJack() {
  const dispatch = useDispatch();


  function startNewRound() {
    dispatch(hideBets());
    dispatch(createNewDeck());
    dispatch(getCards({player: 'dealer', amount: 2}));
    dispatch(getCards({player: 'player', amount: 2}));
    dispatch(countHandWeight('player'));
    dispatch(countHandWeight('dealer'));
    dispatch(showGameControls());
  }

  function playerTakeCard() {
    dispatch(getCards({player: 'player', amount: 1}));
    dispatch(countHandWeight('player'));
  }

  function dealerTakeCard() {
    dispatch(getCards({player: 'dealer', amount: 1}));
    dispatch(countHandWeight('dealer'));
  }

  function dealerTurn() {
    dispatch(startDealerTurn());
  }

  function checkHands(playerHandWeight:number, dealerHandWeight:number, isDealerTurn:boolean) {
    if (isDealerTurn) {
      if (dealerHandWeight <= 16) {
        console.log('Рука диллера', dealerHandWeight);
        dealerTakeCard();
      } else {
        console.log('Рука диллера');
        roundResult(playerHandWeight, dealerHandWeight);
      }
    } else {
      if (playerHandWeight > 21) {
        console.log('У игрока больше 21');
        dispatch(roundEnd());
      }
      console.log('Вес', playerHandWeight);
    }
  }

  function roundResult(playerHandWeight:number, dealerHandWeight:number) {
    if (dealerHandWeight > 21) {
      dispatch(playerWinBet(1.5));
    } else if (playerHandWeight === dealerHandWeight) {
      console.log('Равные очки');
      dispatch(playerWinBet(1));
    } if (playerHandWeight > dealerHandWeight) {
      console.log('Игрок победил');
      dispatch(playerWinBet(1.5));
    }

    console.log('Диллер: ', dealerHandWeight, 'Игрок: ', playerHandWeight);
    dispatch(roundEnd());
  }

  return {
    startNewRound, playerTakeCard, checkHands, dealerTurn, roundResult,
  };
}

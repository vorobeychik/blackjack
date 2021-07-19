import { useDispatch } from 'react-redux';
import {
  changePhase,
  countHandWeight,
  getCards,
  hideGameControls,
  makeBet,
  Persons,
  Phase,
  playerWinBet,
  setDealerExtraWeightToWeight,
  setPlayerExtraWeightToWeight,
  showGameControls,
  showMessage,
  turnCard,
} from '../redux/blackJackSlice';
import {
  aim, dealerAim, drawCoefficient, winCoefficient,
} from '../constants/constants';

export function useBlackJack() {
  const dispatch = useDispatch();

  function roundResult(playerHandWeight: number, dealerHandWeight: number) {
    if (dealerHandWeight > aim) {
      dispatch(playerWinBet(winCoefficient));
    } else if (playerHandWeight === dealerHandWeight) {
      dispatch(playerWinBet(drawCoefficient));
    } else if (playerHandWeight > dealerHandWeight) {
      dispatch(playerWinBet(winCoefficient));
    }

    setTimeout(() => dispatch(changePhase(Phase.RoundResultPhase)), 3500);
  }

  function startNewRound(bet: number, balance: number) {
    if (balance < bet) {
      dispatch(showMessage());
    } else {
      dispatch(makeBet(bet));
      dispatch(changePhase(Phase.PlayerPhase));
      dispatch(getCards({ player: Persons.Dealer, amount: 2 }));
      dispatch(getCards({ player: Persons.Player, amount: 2 }));
      dispatch(countHandWeight(Persons.Player));
      dispatch(countHandWeight(Persons.Dealer));
      dispatch(showGameControls());
    }
  }

  function playerTakeCard() {
    dispatch(getCards({ player: Persons.Player, amount: 1 }));
    dispatch(countHandWeight(Persons.Player));
  }

  function dealerTakeCard() {
    dispatch(getCards({ player: Persons.Dealer, amount: 1 }));
    dispatch(countHandWeight(Persons.Dealer));
  }

  function dealerTurn() {
    dispatch(changePhase(Phase.DealerPhase));
    dispatch(turnCard(false));
  }

  function checkDealerHands(playerHandWeight: number, dealerHandWeight: number, phase: Phase, dealerHandExtraWeight: number) {
    if (phase === Phase.DealerPhase) {
      if (dealerHandWeight > aim && dealerHandExtraWeight) {
        dispatch(setDealerExtraWeightToWeight());
      } else if (dealerHandWeight <= dealerAim && dealerHandWeight <= playerHandWeight) {
        setTimeout(dealerTakeCard, 2000);
      } else {
        roundResult(playerHandWeight, dealerHandWeight);
      }
    }
  }

  function checkPlayerHand(playerHandWeight: number, playerHandExtraWeight: number) {
    if (playerHandWeight > aim && playerHandExtraWeight) {
      dispatch(setPlayerExtraWeightToWeight());
    } else if (playerHandWeight > aim) {
      dispatch(hideGameControls());
      setTimeout(() => dispatch(changePhase(Phase.RoundResultPhase)), 3000);
    }
  }

  return {
    startNewRound, playerTakeCard, checkDealerHands, dealerTurn, roundResult, checkPlayerHand,
  };
}

import reducer, {
  addToBalance,
  changePhase, createNewDeck, hideAddBalance,
  hideBets, hideGameControls, hideMessage,
  initialState,
  makeBet,
  Phase,
  playerWinBet,
  roundEnd, setDealerExtraWeightToWeight, setPlayerExtraWeightToWeight, showAddBalance,
  showBets, showGameControls, showMessage,
  subtractFromBalance, turnCard,
} from './blackJackSlice';
import { winCoefficient } from '../constants/constants';
import { deck } from '../utils/utils.test';

describe('blackJackSlice', () => {
  it('should show bets', () => {
    expect(reducer(initialState, showBets())).toEqual({
      ...initialState,
      isBetsVisible: true,
    });
  });
  it('should hide bets', () => {
    expect(reducer(initialState, hideBets())).toEqual({
      ...initialState,
      isBetsVisible: false,
    });
  });

  it('should make bet', () => {
    expect(reducer(initialState, makeBet(300))).toEqual({
      ...initialState,
      balance: 29700,
      bet: 300,
      result: {
        playerWillLose: 300,
        playerWillWin: 0,
      },
    });
  });

  it('should add to balance', () => {
    expect(reducer(initialState, addToBalance(1500))).toEqual({
      ...initialState,
      balance: 31500,
    });
  });

  it('should subtract to balance', () => {
    expect(reducer(initialState, subtractFromBalance(1500))).toEqual({
      ...initialState,
      balance: 28500,
    });
  });

  it('should win bet correctly', () => {
    expect(reducer({ ...initialState, bet: 300, balance: 29700 }, playerWinBet(winCoefficient))).toEqual({
      ...initialState,
      balance: 30150,
      bet: 0,
      result: {
        playerWillWin: 450,
        playerWillLose: 0,
      },
    });
  });

  it('should end round correctly', () => {
    expect(reducer({ ...initialState }, roundEnd())).toEqual({
      ...initialState,
    });
  });

  it('should change phase correctly', () => {
    expect(reducer({ ...initialState }, changePhase(Phase.PlayerPhase))).toEqual({
      ...initialState,
      phase: Phase.PlayerPhase,
    });
  });
  it('should hide addBalance', () => {
    expect(reducer(initialState, hideAddBalance())).toEqual({
      ...initialState,
      isAddBalanceVisible: false,
    });
  });
  it('should show AddBalance', () => {
    expect(reducer(initialState, showAddBalance())).toEqual({
      ...initialState,
      isAddBalanceVisible: true,
    });
  });
  it('should hide gameControls', () => {
    expect(reducer(initialState, showGameControls())).toEqual({
      ...initialState,
      isGameControlsVisible: true,
    });
  });
  it('should show gameControls', () => {
    expect(reducer(initialState, hideGameControls())).toEqual({
      ...initialState,
      isGameControlsVisible: false,
    });
  });
  it('should show turnCard', () => {
    expect(reducer(initialState, turnCard(false))).toEqual({
      ...initialState,
      isCardTurned: false,
    });
  });
  it('should show message', () => {
    expect(reducer(initialState, showMessage())).toEqual({
      ...initialState,
      isMessageVisible: true,
    });
  });
  it('should show message', () => {
    expect(reducer(initialState, hideMessage())).toEqual({
      ...initialState,
      isMessageVisible: false,
    });
  });
  it('should create deck', () => {
    expect(reducer(initialState, createNewDeck())).toEqual({
      ...initialState,
      deck: new Array(8).fill(0).reduce((acc) => acc.concat(deck), []),
    });
  });
  it('should set player extra weight', () => {
    expect(reducer({ ...initialState, player: { ...initialState.player, weights: { ...initialState.player.weights, extraWeight: 18 } } }, setPlayerExtraWeightToWeight())).toEqual({
      ...initialState,
      player: {
        ...initialState.player,
        weights: {
          ...initialState.player.weights,
          extraWeight: 0,
          weight: 18,
        },
      },
    });
  });
  it('should set dealer extra weight', () => {
    expect(reducer({ ...initialState, dealer: { ...initialState.dealer, weights: { ...initialState.dealer.weights, extraWeight: 18 } } }, setDealerExtraWeightToWeight())).toEqual({
      ...initialState,
      dealer: {
        ...initialState.dealer,
        weights: {
          ...initialState.dealer.weights,
          extraWeight: 0,
          weight: 18,
        },
      },
    });
  });
});

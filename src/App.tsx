import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Bets } from './components/Bets/Bets';
import { GameControls } from './components/GameControls/GameControls';
import { Table } from './components/Table/Table';
import { Settings } from './components/Settings/Settings';
import { Hands } from './components/Hands/Hands';
import { Deck } from './components/Deck/Deck';
import {AddBalance} from './components/AddBalance/AddBalance';
import {Message} from './components/Message/Message';
import {RoundResult} from './components/RoundResult/RoundResult';
import {selectDeck, createNewDeck} from './redux/blackJackSlice';
import {Info} from './components/Info/Info';

function App() {
  const deck = useSelector(selectDeck);
  const dispatch = useDispatch();

  useEffect(() => {
    if (deck.length <= 54) {
      dispatch(createNewDeck());
    }
  }, [deck]);

  return (
    <div className="Game">
      <Hands />
      <GameControls />
      <Bets />
      <Info />
      <Settings />
      <Table />
      <Deck />
      <AddBalance />
      <Message />
      <RoundResult />

    </div>
  );
}

export default App;

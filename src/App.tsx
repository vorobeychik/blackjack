import React, {useState} from 'react';
import {Bets} from './components/Bets/Bets';
import {Balance} from './components/Balance/Balance';
import {GameControls} from './components/GameControls/GameControls';
import {Table} from './components/Table/Table';
import {Settings} from './components/Settings/Settings';
import {Hands} from './components/Hands/Hands';
import {Deck} from './components/Deck/Deck';

function App() {


  return (
      <div className="Game">
        <Hands />
        <GameControls />
        <Bets />
        <Balance />
        <Settings />
        <Table />
        <Deck />
      </div>
  );
}

export default App;

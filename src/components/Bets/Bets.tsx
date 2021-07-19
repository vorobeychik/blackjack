import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectPhase, selectBalance,
  Phase,
} from '../../redux/blackJackSlice';
import styles from './Bets.module.css';

import { useBlackJack } from '../../hooks/useBlackJack';
import { BetsChip } from './BetsChip/BetsChip';
import { betsAssets } from '../../data/betsAssets';

const uniqid = require('uniqid');

export function Bets() {
  const phase = useSelector(selectPhase);
  const balance = useSelector(selectBalance);
  const { startNewRound } = useBlackJack();

  const betHandler = useCallback((bet) => {
    startNewRound(bet, balance);
  }, [balance]);

  const bets = useMemo(() => betsAssets.map((betAsset) => (
    <div onClick={() => betHandler(betAsset.number)} className={styles[`chip${betAsset.number}`]} key={uniqid()}>
      <BetsChip
        mainColor={betAsset.mainColor}
        secondaryColor={betAsset.secondaryColor}
        number={betAsset.number}
        numberColor={betAsset.numberColor}
        fontSize={betAsset.fontSize}
        x={betAsset.x}
        y={betAsset.y}
      />
    </div>
  )), [betHandler]);

  if (phase !== Phase.BetPhase) {
    return (
      null
    );
  }

  return (
    <div className={styles.bets_container}>
      {bets}
    </div>
  );
}

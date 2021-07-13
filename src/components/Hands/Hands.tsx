import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {Card} from '../Card/Card';
import {
  selectDealerHand, selectDealerHandExtraWeight,
  selectDealerHandWeight,
  selectPlayerHand, selectPlayerHandExtraWeight,
  selectPlayerHandWeight,
} from '../../redux/blackJackSlice';
import styles from './Hands.module.css';
import {HandsWeight} from './HandsWeight/HandsWeight';
const  uniqid = require('uniqid');

export function Hands() {
  const playerHand = useSelector(selectPlayerHand);
  const dealerHand = useSelector(selectDealerHand);
  const dealerHandWeight = useSelector(selectDealerHandWeight);
  const playerHandWeight = useSelector(selectPlayerHandWeight);
  const dealerHandExtraWeight = useSelector(selectDealerHandExtraWeight);
  const playerHandExtraWeight = useSelector(selectPlayerHandExtraWeight);

  const playerHandElements = useMemo(() => playerHand.map((card) => <Card value={card.value} suit={card.suit} key={uniqid()}/>), [playerHand]);

  const dealerHandElements = useMemo(() => dealerHand.map((card) => <Card value={card.value} suit={card.suit} key={uniqid()}/>), [dealerHand]);

  if(!playerHand.length){
    return null
  }

  return (
     <div className={styles.hands}>
      <div className={styles.dealerHand}>
        {dealerHandElements}
        <HandsWeight weight={dealerHandWeight} extraWeight={dealerHandExtraWeight} />
      </div>
      <div className={styles.playerHand}>
        {playerHandElements}
        <HandsWeight weight={playerHandWeight} extraWeight={playerHandExtraWeight} />
      </div>
    </div>
  );
}

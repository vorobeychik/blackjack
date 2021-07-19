import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import { Deck } from '../Deck/Deck';
import {
  Persons, Phase,
  selectDealerHand,
  selectDealerHandExtraWeight,
  selectDealerHandWeight, selectIsCardTurned, selectPhase,
  selectPlayerHand,
  selectPlayerHandExtraWeight,
  selectPlayerHandWeight,
} from '../../redux/blackJackSlice';
import styles from './Hands.module.css';
import { HandsWeight } from './HandsWeight/HandsWeight';

const uniqid = require('uniqid');

export function Hands() {
  const playerHand = useSelector(selectPlayerHand);
  const dealerHand = useSelector(selectDealerHand);
  const dealerHandWeight = useSelector(selectDealerHandWeight);
  const playerHandWeight = useSelector(selectPlayerHandWeight);
  const dealerHandExtraWeight = useSelector(selectDealerHandExtraWeight);
  const playerHandExtraWeight = useSelector(selectPlayerHandExtraWeight);
  const isCardTurned = useSelector(selectIsCardTurned);
  const phase = useSelector(selectPhase);

  const playerHandElements = useMemo(() => playerHand.map((card, i, arr) => <Card value={card.value} suit={card.suit} key={uniqid()} cardOwner={Persons.Player} shouldAnimate={(arr.length === 2 || arr.length - 1 === i) && phase === Phase.PlayerPhase} isTurnedOff={false} />), [playerHand]);

  const dealerHandElements = useMemo(() => dealerHand.map((card, i, arr) => <Card value={card.value} suit={card.suit} key={uniqid()} cardOwner={Persons.Dealer} shouldAnimate={(arr.length === 2 && phase === Phase.PlayerPhase) || (arr.length - 1 === i && arr.length !== 2)} isTurnedOff={i === 0 && isCardTurned} />), [dealerHand, isCardTurned]);

  if (!playerHand.length) {
    return null;
  }

  return (
    <div className={styles.hands}>
      <div className={styles.container}>
        <Deck />
        <div className={styles.handsContainer}>
          <div className={styles.dealerHand}>
            {dealerHandElements}
            <HandsWeight weight={dealerHandWeight} extraWeight={dealerHandExtraWeight} isCardTurned={isCardTurned} />
          </div>
          <div className={styles.playerHand}>
            {playerHandElements}
            <HandsWeight weight={playerHandWeight} extraWeight={playerHandExtraWeight} isCardTurned={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

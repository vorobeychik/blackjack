import React from 'react';
import {useSelector} from 'react-redux';
import styles from './HandsWeight.module.css';
import {selectDealerCard} from '../../../redux/blackJackSlice';
import {RootState} from '../../../redux/store';

type HandsWeightProps = {
  weight:number,
  extraWeight:number,
  isCardTurned:boolean,
};

export function HandsWeight({weight, extraWeight, isCardTurned}:HandsWeightProps) {
  const firstCard = useSelector((state:RootState) => selectDealerCard(state, 0));
  const localWeight = isCardTurned ? weight - firstCard.weight : weight;

  return (
    <div className={styles.weight}>
      <p>{localWeight}</p>
      {!!extraWeight && !isCardTurned && (
      <>
        <p>
          {' / '}
        </p>
        <p>
          {extraWeight}
        </p>
      </>
      )}
    </div>
  );
}

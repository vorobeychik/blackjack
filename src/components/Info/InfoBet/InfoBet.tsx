import React from 'react';
import {useSelector} from 'react-redux';
import styles from './InfoBet.module.css';
import {selectBet} from '../../../redux/blackJackSlice';

export function InfoBet() {
  const bet = useSelector(selectBet);

  return (
    <div className={styles.betContainer}>
      <p className={styles.betTitle}>Ставка</p>
      <p className={styles.betParagraph}>{bet}</p>
    </div>
  );
}

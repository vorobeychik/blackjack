import React from 'react';
import {useSelector} from 'react-redux';
import styles from './InfoBet.module.css';
import {selectBet} from '../../../redux/blackJackSlice';
import {useTranslation} from '../../../hooks/useTranslation';

export function InfoBet() {
  const bet = useSelector(selectBet);
  const translation = useTranslation();

  return (
    <div className={styles.betContainer} data-testid="infoBet">
      <p className={styles.betTitle}>{translation.bet}</p>
      <p className={styles.betParagraph}>{bet}</p>
    </div>
  );
}

import React from 'react';
import { InfoBalance } from './InfoBalance/InfoBalance';
import { InfoBet } from './InfoBet/InfoBet';
import styles from './Info.module.css';

export function Info() {
  return (
    <div className={styles.info}>
      <InfoBalance />
      <InfoBet />
    </div>
  );
}

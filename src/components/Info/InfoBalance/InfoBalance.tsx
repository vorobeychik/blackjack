import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../../redux/blackJackSlice';
import styles from './InfoBalance.module.css';
import { useTranslation } from '../../../hooks/useTranslation';

export function InfoBalance() {
  const balance = useSelector(selectBalance);
  const translation = useTranslation();

  return (
    <div className={styles.balance_container}>
      <p className={styles.balance_title}>{translation.balance.balanceTitle}</p>
      <p className={styles.balance_paragraph}>{balance}</p>
    </div>
  );
}

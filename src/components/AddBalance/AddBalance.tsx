import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AddBalance.module.css';
import {
  addToBalance,
  hideAddBalance, Phase,
  selectAddBalanceVisibility,
  selectBalance, selectPhase,
  showAddBalance,
} from '../../redux/blackJackSlice';
import { BetsChip } from '../Bets/BetsChip/BetsChip';
import { useTranslation } from '../../hooks/useTranslation';

export function AddBalance() {
  const isVisible = useSelector(selectAddBalanceVisibility);
  const phase = useSelector(selectPhase);
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [balanceToAdd, setAddedBalance] = useState(0);
  const language = useTranslation();

  useEffect(() => {
    if (balance < 60 && phase === Phase.BetPhase) {
      dispatch(showAddBalance());
    }
  }, [balance, phase]);

  const addBalanceHandler = useCallback(() => {
    dispatch(addToBalance(balanceToAdd));
    dispatch(hideAddBalance());
  }, [balanceToAdd]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.addBalance}>
      <p className={styles.addBalanceTitle}>{language.addBalance.title}</p>
      <div className={styles.offerContainer}>
        <div className={styles.offer} onClick={() => setAddedBalance(1500)}>
          <BetsChip mainColor="#ba7804" secondaryColor="#d8a03d" number={1500} numberColor="#e2c486" fontSize={23} x="17%" y="59%" />
          <p className={styles.paragraph}>{language.addBalance.firstParagraph}</p>
        </div>
        <div className={styles.offer} onClick={() => setAddedBalance(6000)}>
          <BetsChip mainColor="#ba6357" secondaryColor="#c98579" number={6000} numberColor="#ebb5ac" fontSize={23} x="17%" y="59%" />
          <p className={styles.paragraph}>{language.addBalance.secondParagraph}</p>
        </div>
        <div className={styles.offer} onClick={() => setAddedBalance(30000)}>
          <BetsChip mainColor="#004c7b" secondaryColor="#277da5" number={30000} numberColor="#c4e1ef" fontSize={30} x="18%" y="63%" />
          <p className={styles.paragraph}>{language.addBalance.thirdParagraph}</p>
        </div>
      </div>
      <div className={styles.buttonContainer} onClick={addBalanceHandler}>
        <button type="button" disabled={!balanceToAdd} className={styles.button}>
          Пополнить
        </button>
      </div>
    </div>
  );
}

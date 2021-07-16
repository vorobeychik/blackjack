import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './AddBalance.module.css';
import {
  addToBalance,
  hideAddBalance, Phase,
  selectAddBalanceVisibility,
  selectBalance, selectPhase,
  showAddBalance,
} from '../../redux/blackJackSlice';
import {BetsChip} from '../Bets/BetsChip/BetsChip';

export function AddBalance() {
  const isVisible = useSelector(selectAddBalanceVisibility);
  const phase = useSelector(selectPhase);
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [balanceToAdd, setAddedBalance] = useState(0);

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
      <p className={styles.addBalanceTitle}>Пополните ваш баланс</p>
      <div className={styles.offerContainer}>
        <div className={styles.offer} onClick={() => setAddedBalance(1500)}>
          <BetsChip mainColor="#ba7804" secondaryColor="#d8a03d" number={1500} numberColor="#e2c486" />
          <p className={styles.paragraph}>Небольшое пополнеие позволит вам играть дальше</p>
        </div>
        <div className={styles.offer} onClick={() => setAddedBalance(6000)}>
          <BetsChip mainColor="#ba6357" secondaryColor="#c98579" number={6000} numberColor="#ebb5ac" />
          <p className={styles.paragraph}>Самое то чтобы сорвать куш</p>
        </div>
        <div className={styles.offer} onClick={() => setAddedBalance(30000)}>
          <BetsChip mainColor="#004c7b" secondaryColor="#277da5" number={30000} numberColor="#c4e1ef" />
          <p className={styles.paragraph}>Не оставь диллеру шансов</p>
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

import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './RoundResult.module.css';
import {
  Phase, roundEnd, selectPhase, selectResult,
} from '../../redux/blackJackSlice';
import {useTranslation} from '../../hooks/useTranslation';

export function RoundResult() {
  const phase = useSelector(selectPhase);
  const {playerWillLose, playerWillWin} = useSelector(selectResult);
  const dispatch = useDispatch();
  const isPlayerWin = !!playerWillWin;
  const translation = useTranslation();
  const title = isPlayerWin ? translation.roundResult.winMsg : translation.roundResult.winMsg;

  const clickHandler = useCallback(() => {
    dispatch(roundEnd());
  }, []);

  if (phase !== Phase.RoundResultPhase) {
    return null;
  }

  return (
    <div className={styles.roundResult}>
      <p className={styles.roundResultTitle}>{title}</p>
      <p className={styles.amountWin}>{isPlayerWin ? playerWillWin : playerWillLose}</p>
      <button type="button" className={styles.button} onClick={clickHandler}>{translation.roundResult.buttonText}</button>
    </div>
  );
}

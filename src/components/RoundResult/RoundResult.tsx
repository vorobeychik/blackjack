import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './RoundResult.module.css';
import {
  Phase, roundEnd, selectPhase, selectResult,
} from '../../redux/blackJackSlice';

export function RoundResult() {
  const phase = useSelector(selectPhase);
  const {playerWillLose, playerWillWin} = useSelector(selectResult);
  const dispatch = useDispatch();
  const isPlayerWin = !!playerWillWin;
  const title = isPlayerWin ? 'Вы выйграли' : 'Вы проиграли';

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
      <button type="button" onClick={clickHandler}>Ok</button>
    </div>
  );
}

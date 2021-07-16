import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Message.module.css';
import {
  hideBets, hideMessage, selectMessage, showAddBalance,
} from '../../redux/blackJackSlice';

export function Message() {
  const dispatch = useDispatch();
  const {isVisible, messageText} = useSelector(selectMessage);
  const animationEndHandler = () => { dispatch(hideMessage()); };
  const clickHandler = () => {
    dispatch(hideMessage());
    dispatch(hideBets());
    dispatch(showAddBalance());
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.message} onAnimationEnd={animationEndHandler}>
      <p className={styles.messageTitle}>
        {messageText}
      </p>
      <button type="button" onClick={clickHandler} className={styles.messageBtn}>Пополнить</button>
    </div>
  );
}

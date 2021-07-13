import React, {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import styles from './GameControls.module.css';
import {
  selectDealerHandWeight, selectDealerHandWeights,
  selectGameControlsVisibility,
  selectIsDealerTurn,
  selectPlayerHandWeight, selectPlayerHandWeights,
} from '../../redux/blackJackSlice';
import More_Button from '../../assets/svg/More_Button.svg';
import {useBlackJack} from '../../hooks/useBlackJack';
import {useTranslation} from '../../hooks/useTranslation';

export function GameControls() {
  const isVisible = useSelector(selectGameControlsVisibility);
  const {playerTakeCard, checkHands, dealerTurn} = useBlackJack();
  const translation = useTranslation();

  const playerHandWeight = useSelector(selectPlayerHandWeight);
  const dealerHandWeight = useSelector(selectDealerHandWeight);
  const isDealerTurn = useSelector(selectIsDealerTurn);

  const moreHandler = useCallback(playerTakeCard, []);
  const stopHandler = useCallback(dealerTurn, []);

  useEffect(() => {
      checkHands(playerHandWeight,dealerHandWeight,isDealerTurn)
  },[dealerHandWeight,playerHandWeight,isDealerTurn])

  if (!isVisible) {
    return (
      <>
      </>
    );
  }

  return (
    <div className={styles.game_controls_container}>
      <p className={styles.game_controls_title}>{translation.gameControls.gameControlsTitle}</p>
      <div className={styles.game_controls_buttons}>
        <div onClick={moreHandler}>
          <svg width="50%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#228B22" />
            <rect x="46" y="15" width="8" height="68" fill="#54A87C" />
            <rect x="84" y="45" width="8" height="68" transform="rotate(90 84 45)" fill="#54A87C" />
          </svg>
        </div>
        <div onClick={stopHandler}>
          <svg width="50%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#A52A2A" />
            <rect x="84" y="45" width="8" height="68" transform="rotate(90 84 45)" fill="#AF5D5B" />
          </svg>
        </div>
      </div>
    </div>
  );
}

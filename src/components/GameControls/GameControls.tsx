import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './GameControls.module.css';
import {
  Phase, selectDealerHandExtraWeight,
  selectDealerHandWeight,
  selectGameControlsVisibility,
  selectPhase, selectPlayerHandExtraWeight,
  selectPlayerHandWeight,
} from '../../redux/blackJackSlice';
import { useBlackJack } from '../../hooks/useBlackJack';
import { useTranslation } from '../../hooks/useTranslation';

export function GameControls() {
  const isVisible = useSelector(selectGameControlsVisibility);
  const {
    playerTakeCard, checkDealerHands, dealerTurn, checkPlayerHand,
  } = useBlackJack();
  const translation = useTranslation();
  const phase = useSelector(selectPhase);

  const playerHandWeight = useSelector(selectPlayerHandWeight);
  const playerHandExtraWeight = useSelector(selectPlayerHandExtraWeight);
  const dealerHandExtraWeight = useSelector(selectDealerHandExtraWeight);
  const dealerHandWeight = useSelector(selectDealerHandWeight);

  const moreHandler = useCallback(playerTakeCard, []);
  const stopHandler = useCallback(dealerTurn, []);

  useEffect(() => {
    checkDealerHands(playerHandWeight, dealerHandWeight, phase, dealerHandExtraWeight);
  }, [dealerHandWeight, playerHandWeight, phase, dealerHandExtraWeight]);

  useEffect(() => {
    checkPlayerHand(playerHandWeight, playerHandExtraWeight);
  }, [playerHandWeight, playerHandExtraWeight]);

  if (phase !== Phase.PlayerPhase || !isVisible) {
    return null;
  }

  return (
    <div className={styles.game_controls_container}>
      <p className={styles.game_controls_title}>{translation.gameControls.gameControlsTitle}</p>
      <div className={styles.game_controls_buttons}>
        <button type="button" className={styles.hitButton} onClick={moreHandler}>{translation.gameControls.hitBtn}</button>
        <button type="button" className={styles.standButton} onClick={stopHandler}>{translation.gameControls.stopBtn}</button>
      </div>
    </div>
  );
}

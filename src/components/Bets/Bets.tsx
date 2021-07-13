import React, {useCallback, useContext, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectBetsVisibility, makeBet, hideBets, createNewDeck, getCards,
} from '../../redux/blackJackSlice';
import styles from './Bets.module.css';
import chip60 from '../../assets/svg/Chip60.svg';
import {useBlackJack} from '../../hooks/useBlackJack';
import {BetsChip} from './BetsChip/BetsChip';
import {useTranslation} from '../../hooks/useTranslation';
import {betsAssets} from '../../data/betsAssets';
const  uniqid = require('uniqid');

export function Bets() {
  const dispatch = useDispatch();
  const betsVisibility = useSelector(selectBetsVisibility);
  const {startNewRound} = useBlackJack();

  const betHandler = useCallback((bet) => {
    dispatch(makeBet(bet));
    startNewRound();
  }, []);


  const bets = useMemo(() => betsAssets.map((betAsset) => (
    <div onClick={() => betHandler(betAsset.number)} className={styles[`chip${betAsset.number}`]}  key={uniqid()}>
      <BetsChip
        mainColor={betAsset.mainColor}
        secondaryColor={betAsset.secondaryColor}
        number={betAsset.number}
        numberColor={betAsset.numberColor}
      />
    </div>
  )), [betHandler]);

  if (!betsVisibility) {
    return (
      null
    );
  }

  return (
    <div className={styles.bets_container}>
      {bets}
    </div>
  );
}

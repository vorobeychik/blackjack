import React from 'react';
import styles from './HandsWeight.module.css';

type HandsWeightProps = {
  weight:number,
  extraWeight:number,
};

export function HandsWeight({weight, extraWeight}:HandsWeightProps) {
  return (
    <div className={styles.weight}>
      <p>{weight}</p>
      {!!extraWeight && (
      <p>
       {extraWeight}
      </p>
      )}
    </div>
  );
}

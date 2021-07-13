import React from 'react';
import {CardSuits, CardValues} from '../../types/types';
import {CardValue} from './CardValue/CardValue';
import {CardSuit} from './CardSuit/CardSuit';
import styles from './Card.module.css';

type CardProps = {
  value:CardValues,
  suit:CardSuits,
};

export function Card({value, suit}:CardProps) {
  return (
  // <div className={styles.cardContainer}>
    <svg width="25%" viewBox="0 0 83 108" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.card}>
      <g filter="url(#filter0_d)">
        <path d="M4 5C4 2.23858 6.23858 0 9 0H74C76.7614 0 79 2.23858 79 5V95C79 97.7614 76.7614 100 74 100H9C6.23858 100 4 97.7614 4 95V5Z" fill="white" />
        <path d="M9 0.2H74C76.651 0.2 78.8 2.34903 78.8 5V95C78.8 97.651 76.651 99.8 74 99.8H9C6.34903 99.8 4.2 97.651 4.2 95V5C4.2 2.34903 6.34903 0.2 9 0.2Z" stroke="black" strokeWidth="0.4" />
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="83" height="108" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
      <CardValue value={value} suit={suit} />
      <CardSuit suit={suit} />
    </svg>
  // </div>

  );
}

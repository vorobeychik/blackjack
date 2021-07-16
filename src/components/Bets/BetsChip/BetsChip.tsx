import React from 'react';
import {BetsChipNumber} from './BetsChipNumber/BetsChipNumber';
import {BetsValues} from '../../../types/types';

type BetsChipProps = {
  mainColor:string,
  secondaryColor:string,
  number:BetsValues,
  numberColor:string,

};

export function BetsChip({
  mainColor, secondaryColor, number, numberColor,
}:BetsChipProps) {
  return (
    <svg width="100%" viewBox="0 0 82 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="42" r="40" fill="white" />
      <path d="M20 7.5C23.5 5 30 2.5 34.5 2.50001L65.5 73C60.4452 76.7839 57.4081 78.299 51.7432 80.26L20 7.5Z" fill={mainColor} />
      <path d="M0.70931 33.0014C1.46872 28.7657 4.2529 22.1276 7.5 19L79.8128 48.6175C78.8384 54.8597 77.7172 58.0634 75.0149 63.4149L0.70931 33.0014Z" fill={mainColor} />
      <path d="M49.7821 2.5611C53.9936 3.44622 60.4724 6.15796 63.5 9.5L31.5 81C25.289 79.8405 23.2677 78.3625 18 75.5L49.7821 2.5611Z" fill={mainColor} />
      <path d="M73.8554 18.6684C76.3992 22.1404 79.4062 28.4876 79.4183 32.9998L7 64.5C3.15041 59.4883 3.20475 57.4475 1.20151 51.7967L73.8554 18.6684Z" fill={mainColor} />
      <line y1="40" x2="80" y2="40" stroke={secondaryColor} strokeWidth="4" />
      <line x1="42" y1="2" x2="42" y2="82" stroke={secondaryColor} strokeWidth="4" />
      <circle cx="40.5" cy="42.5" r="32.5" fill={secondaryColor} />
      <circle cx="40.5" cy="42.5" r="27.5" fill={mainColor} />

      <BetsChipNumber numberColor={numberColor} number={number} />

    </svg>
  );
}

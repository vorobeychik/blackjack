import { BetsValues } from '../types/types';

export type BetAsset = {
  mainColor: string,
  secondaryColor: string,
  number: BetsValues,
  numberColor: string,
};

export const betsAssets: BetAsset[] = [
  {
    mainColor: '#691F00',
    secondaryColor: '#875036',
    number: 60,
    numberColor: '#D3AF9E',
  },
  {
    mainColor: 'black',
    secondaryColor: '#505050',
    number: 300,
    numberColor: '#b4b4b4',
  },
  {
    mainColor: '#6f4a93',
    secondaryColor: '#855fa4',
    number: 600,
    numberColor: '#dcc4eb',
  },
  {
    mainColor: '#ba7804',
    secondaryColor: '#d8a03d',
    number: 1500,
    numberColor: '#e2c486',
  },
  {
    mainColor: '#ba6357',
    secondaryColor: '#c98579',
    number: 6000,
    numberColor: '#ebb5ac',
  },
  {
    mainColor: '#004c7b',
    secondaryColor: '#277da5',
    number: 30000,
    numberColor: '#c4e1ef',
  },
];

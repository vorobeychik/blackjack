import { BetsValues } from '../types/types';

export type BetAsset = {
  mainColor: string,
  secondaryColor: string,
  number: BetsValues,
  numberColor: string,
  fontSize: number,
  x: string,
  y: string,
};

export const betsAssets: BetAsset[] = [
  {
    mainColor: '#691F00',
    secondaryColor: '#875036',
    number: 60,
    numberColor: '#D3AF9E',
    fontSize: 40,
    x: '22%',
    y: '66%',
  },
  {
    mainColor: 'black',
    secondaryColor: '#505050',
    number: 300,
    numberColor: '#b4b4b4',
    fontSize: 30,
    x: '19%',
    y: '62%',
  },
  {
    mainColor: '#6f4a93',
    secondaryColor: '#855fa4',
    number: 600,
    numberColor: '#dcc4eb',
    fontSize: 30,
    x: '19%',
    y: '62%',
  },
  {
    mainColor: '#ba7804',
    secondaryColor: '#d8a03d',
    number: 1500,
    numberColor: '#e2c486',
    fontSize: 23,
    x: '17%',
    y: '59%',
  },
  {
    mainColor: '#ba6357',
    secondaryColor: '#c98579',
    number: 6000,
    numberColor: '#ebb5ac',
    fontSize: 23,
    x: '16%',
    y: '59%',
  },
  {
    mainColor: '#004c7b',
    secondaryColor: '#277da5',
    number: 30000,
    numberColor: '#c4e1ef',
    fontSize: 30,
    x: '18%',
    y: '63%',
  },
];

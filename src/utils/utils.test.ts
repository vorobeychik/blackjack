import {getWeightOfCard, getRandomNumber, createDeck} from './utils';
import {CardValues} from '../types/types';

const deck = [{weight: 2, suit: 'Spades', value: '2'},
  {weight: 3, suit: 'Spades', value: '3'},
  {weight: 4, suit: 'Spades', value: '4'},
  {weight: 5, suit: 'Spades', value: '5'},
  {weight: 6, suit: 'Spades', value: '6'},
  {weight: 7, suit: 'Spades', value: '7'},
  {weight: 8, suit: 'Spades', value: '8'},
  {weight: 9, suit: 'Spades', value: '9'},
  {weight: 10, suit: 'Spades', value: '10'},
  {weight: 10, suit: 'Spades', value: 'J'},
  {weight: 10, suit: 'Spades', value: 'Q'},
  {weight: 10, suit: 'Spades', value: 'K'},
  {
    weight: 11, suit: 'Spades', value: 'A', extraWeight: 1,
  },
  {weight: 2, suit: 'Hearts', value: '2'},
  {weight: 3, suit: 'Hearts', value: '3'},
  {weight: 4, suit: 'Hearts', value: '4'},
  {weight: 5, suit: 'Hearts', value: '5'},
  {weight: 6, suit: 'Hearts', value: '6'},
  {weight: 7, suit: 'Hearts', value: '7'},
  {weight: 8, suit: 'Hearts', value: '8'},
  {weight: 9, suit: 'Hearts', value: '9'},
  {weight: 10, suit: 'Hearts', value: '10'},
  {weight: 10, suit: 'Hearts', value: 'J'},
  {weight: 10, suit: 'Hearts', value: 'Q'},
  {weight: 10, suit: 'Hearts', value: 'K'},
  {
    weight: 11, suit: 'Hearts', value: 'A', extraWeight: 1,
  },
  {weight: 2, suit: 'Diamonds', value: '2'},
  {weight: 3, suit: 'Diamonds', value: '3'},
  {weight: 4, suit: 'Diamonds', value: '4'},
  {weight: 5, suit: 'Diamonds', value: '5'},
  {weight: 6, suit: 'Diamonds', value: '6'},
  {weight: 7, suit: 'Diamonds', value: '7'},
  {weight: 8, suit: 'Diamonds', value: '8'},
  {weight: 9, suit: 'Diamonds', value: '9'},
  {weight: 10, suit: 'Diamonds', value: '10'},
  {weight: 10, suit: 'Diamonds', value: 'J'},
  {weight: 10, suit: 'Diamonds', value: 'Q'},
  {weight: 10, suit: 'Diamonds', value: 'K'},
  {
    weight: 11, suit: 'Diamonds', value: 'A', extraWeight: 1,
  },
  {weight: 2, suit: 'Clubs', value: '2'},
  {weight: 3, suit: 'Clubs', value: '3'},
  {weight: 4, suit: 'Clubs', value: '4'},
  {weight: 5, suit: 'Clubs', value: '5'},
  {weight: 6, suit: 'Clubs', value: '6'},
  {weight: 7, suit: 'Clubs', value: '7'},
  {weight: 8, suit: 'Clubs', value: '8'},
  {weight: 9, suit: 'Clubs', value: '9'},
  {weight: 10, suit: 'Clubs', value: '10'},
  {weight: 10, suit: 'Clubs', value: 'J'},
  {weight: 10, suit: 'Clubs', value: 'Q'},
  {weight: 10, suit: 'Clubs', value: 'K'},
  {
    weight: 11, suit: 'Clubs', value: 'A', extraWeight: 1,
  }];

describe('utils', () => {
  it('should return number above 50', () => {
    expect(getRandomNumber(50) <= 50).toBeTruthy();
  });

  it('should count weight of 2', () => {
    expect(getWeightOfCard('2')).toEqual(2);
  });

  it('should count weight of 3', () => {
    expect(getWeightOfCard('3')).toEqual(3);
  });

  it('should count weight of 4', () => {
    expect(getWeightOfCard('4')).toEqual(4);
  });

  it('should count weight of 5', () => {
    expect(getWeightOfCard('5')).toEqual(5);
  });

  it('should count weight of 6', () => {
    expect(getWeightOfCard('6')).toEqual(6);
  });

  it('should count weight of 7', () => {
    expect(getWeightOfCard('7')).toEqual(7);
  });
  it('should count weight of 8', () => {
    expect(getWeightOfCard('8')).toEqual(8);
  });
  it('should count weight of 9', () => {
    expect(getWeightOfCard('9')).toEqual(9);
  });
  it('should count weight of 10', () => {
    expect(getWeightOfCard('10')).toEqual(10);
  });
  it('should count weight of J', () => {
    expect(getWeightOfCard('J')).toEqual(10);
  });
  it('should count weight of Q', () => {
    expect(getWeightOfCard('Q')).toEqual(10);
  });
  it('should count weight of K', () => {
    expect(getWeightOfCard('K')).toEqual(10);
  });
  it('should count weight of A', () => {
    expect(getWeightOfCard('A')).toEqual(11);
  });

  it('should create  deck correctly', () => {
    expect(createDeck(1)).toEqual(deck);
  });
});

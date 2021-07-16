import { CardValues } from '../types/types';
import { Card } from '../redux/blackJackSlice';
import { suits, values } from '../data/cards';

export function getRandomNumber(num:number):number {
  return Math.floor(Math.random() * num);
}

export function getWeightOfCard(cardValue:CardValues):number {
  if (['K', 'Q', 'J'].includes(cardValue)) {
    return 10;
  } if (cardValue === 'A') {
    return 11;
  }
  return Number(cardValue);
}

export function createDeck(amountOfDecks:number):Card[] {
  const deck:Card[] = [];
  for (let i = 0; i < amountOfDecks; i += 1) {
    suits.forEach((suit) => {
      values.forEach((value) => {
        const weight = getWeightOfCard(value);

        const card:Card = {
          weight,
          suit,
          value,
          ...(value === 'A' && {extraWeight: 1}),
        };

        deck.push(card);
      });
    });
  }

  return deck;
}

export function getBalance() {
  const balance = localStorage.getItem('balance');
  if (!balance) {
    localStorage.setItem('balance', '30000');
    return 30000;
  }

  return Number(balance);
}
export function setBalance(newBalance:number) {
  localStorage.setItem('balance', `${newBalance}`);
}

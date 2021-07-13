export const languages = {
  Ru: {
    balance: {
      balanceTitle: 'Баланс',
    },
    gameControls: {
      gameControlsTitle: 'Примите ваше решение',

    },
  },
  En: {
    balance: {
      balanceTitle: 'Balance',
    },
    gameControls: {
      gameControlsTitle: 'Make your decision',
    },
  },
};

export type Languages = typeof languages;
export type LanguagesKeys = keyof typeof languages['En'];

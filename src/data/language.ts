export const languages = {
  Ru: {
    balance: {
      balanceTitle: 'Баланс',
    },
    gameControls: {
      gameControlsTitle: 'Примите ваше решение',
      hitBtn: 'ЕЩЕ',
      stopBtn: 'СТОП',

    },
    message: 'Недостаточно баланса',
    bet: 'Cтавка',
    addBalance: {
      firstParagraph: 'Небольшое пополнеие позволит вам играть дальше',
      secondParagraph: 'Самое то чтобы сорвать куш',
      thirdParagraph: 'Не оставь диллеру шансов',
      title: 'Пополните ваш баланс',
    },
    roundResult: {
      winMsg: 'Вы выиграли',
      loseMsg: 'Вы проиграли',
      buttonText: 'Продолжить',
    },
  },
  En: {
    balance: {
      balanceTitle: 'Balance',
    },
    gameControls: {
      gameControlsTitle: 'Make your decision',
      hitBtn: 'HIT',
      stopBtn: 'STAND',
    },
    message: 'Not enough balance',
    bet: 'Bet',
    addBalance: {
      firstParagraph: 'A small replenishment will allow you to play further',
      secondParagraph: 'The very thing to hit the jackpot',
      thirdParagraph: 'Don\'t leave the dealer a chance',
      title: 'Top up your balance',
    },
    roundResult: {
      winMsg: 'You win',
      loseMsg: 'You lose',
      buttonText: 'Ok',
    },
  },
};

export type Languages = typeof languages;

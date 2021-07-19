import * as React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { InfoBet } from './InfoBet';
import { store } from '../../../redux/store';

describe('InfoBet', () => {
  it('should ', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <InfoBet />
      </Provider>,
    );
    expect(getByTestId('infoBet')).toBeInTheDocument();
  });
});

import { actionCreator } from 'actions/action-helpers';

export const convertButtonClicked = (amount, baseCurrency, targetCurrency) =>
  actionCreator('CONVERT_BUTTON_CLICKED', {
    amount,
    baseCurrency,
    targetCurrency
  });

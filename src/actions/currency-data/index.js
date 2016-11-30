import { actionCreator } from 'actions/action-helpers';

export const fetchConversionDataStart = (cryptoCurrencies, targetCurrency) =>
  actionCreator('FETCH_CONVERSION_DATA_START', { cryptoCurrencies: ['BTC'], targetCurrency: 'USD' });

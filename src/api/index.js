import { Promise } from 'es6-promise';
import request from 'utils/request';

export function getConversionData(cryptoCurrencies, targetCurrency) {
  return Promise.all(
    cryptoCurrencies.map(
      (cryptoCurrency) => request(buildRequest(cryptoCurrency, targetCurrency))
    )
  ).then(
    (results) => results.map(formatResult)
  );
}

export const formatResult = ({ ticker }) => {
  return {
    baseCurrency: ticker.base,
    targetCurrency: ticker.target,
    price: ticker.price,
    change: ticker.change
  };
};

// TODO: unit test
export const buildRequest = (cryptoCurrency, targetCurrency) => {
  return {
    url: 'https://api.cryptonator.com/api/ticker/'
      + `${cryptoCurrency}-${targetCurrency}`,
      method: 'get'
    };
}

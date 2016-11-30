import { assert } from 'chai';
import { call, put } from 'redux-saga/effects';
import * as api from 'api';
import { getConversionData } from 'sagas/api';

describe('sagas/api', () => {
  const cryptoCurrencies = ['btc'];
  const targetCurrency = 'usd';
  it('should run correctly when there is no exception', () => {
    const generator = getConversionData({ cryptoCurrencies, targetCurrency });
    const apiReturnValue = { data: true };
    assert.deepEqual(
      generator.next().value,
      call(api.getConversionData, cryptoCurrencies, targetCurrency)
    );
    assert.deepEqual(
      generator.next(apiReturnValue).value,
      put({
        type: 'FETCH_CONVERSION_DATA_OK',
        conversionData: apiReturnValue
      })
    );
  });
  it('should run correctly when api call throws', () => {
    const generator = getConversionData({ cryptoCurrencies, targetCurrency });
    const error = new Error('An error');
    assert.deepEqual(
      generator.next().value,
      call(api.getConversionData, cryptoCurrencies, targetCurrency)
    );
    assert.deepEqual(
      generator.throw(error).value,
      put({
        type: 'FETCH_CONVERSION_DATA_ERROR',
        error
      })
    );
  });
});

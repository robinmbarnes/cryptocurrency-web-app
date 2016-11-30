import { assert } from 'chai';
import { formatResult, buildRequest, getConversionData } from 'api';
import api from 'api';
import { Promise } from 'es6-promise';
import sinon from 'sinon';

describe('api', () => {
  describe('getConversionData', () => {

    afterEach(() => {
      api.__ResetDependency__('request')
    });


    it('should call request with correct options', () => {
      const requestStub = sinon.stub();
      requestStub.returns(new Promise(() => {}, () => {}));
      api.__Rewire__('request', requestStub);
      const cryptoCurrencies = ['BTC', 'LTC'];
      const targetCurrency = 'USD';
      const options1 = buildRequest(cryptoCurrencies[0], targetCurrency);
      const options2 = buildRequest(cryptoCurrencies[1], targetCurrency);

      getConversionData(cryptoCurrencies, targetCurrency);
      assert.isTrue(requestStub.withArgs(options1).calledOnce);
      assert.isTrue(requestStub.withArgs(options2).calledOnce);
    })
  });
  describe('formatResult', () => {
    it('should return result correctly formatted', () => {
      assert.deepEqual(
        formatResult({
          ticker: {
            base: 'BTC',
            target: 'USD',
            price: '737.45150458',
            volume: '12382.02860300',
            change: '-0.50416270'
          },
          timestamp: 1480114563,
          success: true,
          error: ''
        }),
        {
          baseCurrency: 'BTC',
          targetCurrency: 'USD',
          price: '737.45150458',
          change: '-0.50416270'
        }
      );
    });
  });
});

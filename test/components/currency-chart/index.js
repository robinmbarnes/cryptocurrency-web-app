import '../../../test-helpers';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert } from 'chai';
import CurrencyChart from 'components/currency-chart';

describe('<CurrencyChart/>', () => {
  const testData = [
    {
      targetCurrency: 'USD',
      baseCurrency: 'BTC'
    },
    {
      targetCurrency: 'USD',
      baseCurrency: 'LTC'
    }
  ];
  const component = shallow(<CurrencyChart conversionData={testData}/>);
  it('should render a <BarChart/> with correct y axis label', () => {
    assert.equal(component.find('BarChart').get(0).props.ylabel, 'Price (USD)');
  });
});

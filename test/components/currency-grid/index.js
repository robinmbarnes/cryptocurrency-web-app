import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert } from 'chai';
import R from 'ramda';
import CurrencyGrid from 'components/currency-grid';

describe('<CurrencyGrid/>', () => {
  const testEntries = [
    {
      baseCurrency: 'btc',
      targetCurrency: 'usd',
      price: 400.00,
      change: 8
    },
    {
      baseCurrency: 'ltc',
      targetCurrency: 'usd',
      price: 200.00,
      change: 10
    },
    {
      baseCurrency: 'eth',
      targetCurrency: 'usd',
      price: 100.00,
      change: -1
    },
    {
      baseCurrency: 'ltcd',
      targetCurrency: 'usd',
      price: 10.00,
      change: 5
    }
  ];
  const component = shallow(<CurrencyGrid entries={ testEntries } />);
  it('should have table with 4 child nodes', () => {
    assert.lengthOf(component.find('table').get(0).props.children, 4);
  });
  it('entries should be in correct order', () => {
    const order = ['ltc', 'btc', 'ltcd', 'eth'];
    const entries = component.find('table').get(0).props.children;
    const baseCurrencies = entries.map((entry) => entry.props.baseCurrency);
    assert.deepEqual(baseCurrencies, order);
  });
});

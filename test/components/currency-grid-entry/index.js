import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert } from 'chai';
import R from 'ramda';
import CurrencyGridEntry from 'components/currency-grid-entry';

describe('<CurrencyGridEntry/>', () => {
  const testProps = {
    baseCurrency: 'btc',
    targetCurrency: 'usd',
    price: 400.00,
    change: 8
  };
  const component = shallow(<CurrencyGridEntry { ...testProps } />);
  it('should have 4 cells', () => {
    assert.lengthOf(component.find('td'), 4);
  });
  it('should have the correct values in each cell', () => {
    const cellContents = component
      .find('td')
      .reduce((list, node) => list.concat(node.props().children), []);
    assert.deepEqual(cellContents, R.values(testProps));
  });
});

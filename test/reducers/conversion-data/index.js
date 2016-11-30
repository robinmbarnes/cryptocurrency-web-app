import conversionData from 'reducers/conversion-data';
import { defaultState } from 'reducers/conversion-data';
import { assert } from 'chai';

describe('reducers/conversionData', () => {
  it('should return correct initial state', () => {
    assert.deepEqual(conversionData(), defaultState);
  });
  it('FETCH_CONVERSION_DATA_OK sets state correctly', () => {
    const testConversionData = [
      {
        foo: true
      }
    ];
    const action = {
      type: 'FETCH_CONVERSION_DATA_OK',
      conversionData: testConversionData
    };
    const expectedState = {
      conversions: testConversionData,
      isInitialLoadComplete: true
    };
    assert.deepEqual(conversionData(defaultState, action), expectedState);
  });
});

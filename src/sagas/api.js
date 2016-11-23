import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getConversionData } from 'api';

export function* getConversionData ({ cryptoCurrencies, targetCurrency }) {
  try {
    const conversionData = yield call(
      getConversionData,
      cryptoCurrencies,
      targetCurrency
    );
    yield put({ type: 'FETCH_CONVERSION_DATA_OK', conversionData });
  }
}

function* setupSaga() {
  yield takeLatest('FETCH_CONVERSION_DATA_START', getConversionData);
}

export default setupSaga;

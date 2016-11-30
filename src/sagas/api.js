import 'babel-regenerator-runtime';
import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from 'api';

export function* getConversionData ({ cryptoCurrencies, targetCurrency }) {
  try {
    const conversionData = yield call(
      api.getConversionData,
      cryptoCurrencies,
      targetCurrency
    );
    yield put({ type: 'FETCH_CONVERSION_DATA_OK', conversionData });
  } catch (error) {
    yield put({ type: 'FETCH_CONVERSION_DATA_ERROR', error });
  }
}

function* setupSaga() {
  yield takeLatest('FETCH_CONVERSION_DATA_START', getConversionData);
}

export default setupSaga;

import React from 'react';
import BarChart from 'react-bar-chart';
import styles from './styles.css';

export const convertConversionData = (data) => {
  return {
    text: data.baseCurrency,
    value: data.price
  };
};

export const getTargetCurrency = (data) =>
  (data[0] ? data[0].targetCurrency : '');

const margin = {top: 20, right: 20, bottom: 30, left: 40};

export default function CurrencyChartContainer ({conversionData = []}) {
  return (
    <div>
      <div style={{width: '50%'}} className={styles.currencyChart}>
          <BarChart ylabel={`Price (${getTargetCurrency(conversionData)})`}
            width={500}
            height={500}
            margin={margin}
            data={conversionData.map(convertConversionData)}/>
      </div>
    </div>
  );
}

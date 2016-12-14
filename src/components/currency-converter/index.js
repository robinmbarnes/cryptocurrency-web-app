import React from 'react';
import styles from './styles.css';
import { targetCurrencies, baseCurrencies } from 'api';

const optionValue = (node) => node.options[node.selectedIndex].value;

export default function CurrencyConverter ({convertButtonClicked}) {
  let amountNode, targetCurrencyNode, baseCurrencyNode;
  const baseCurrencyOptions = baseCurrencies.map((baseCurrency) =>
    <option ref={(node) => { baseCurrencyNode = node; }} value={baseCurrency} key={baseCurrency}>
      {baseCurrency}
    </option>
  );
  const targetCurrencyOptions = targetCurrencies.map((targetCurrency) =>
    <option ref={(node) => { targetCurrencyNode = node; }} value={targetCurrency} key={targetCurrency}>
      {targetCurrency}
    </option>
  );
  const onClick = () => convertButtonClicked(
    amountNode.value,
    optionValue(baseCurrencyNode),
    optionValue(targetCurrencyNode)
  );
  return (
    <div>
      <input
        ref={(node) => { amountNode = node; }}
        type='text'
        onClick={onClick}
      />
      {baseCurrencyOptions}
      {targetCurrencyOptions}
      <button onClick={convertButtonClicked}>Convert</button>
    </div>
  );
}

import React from 'react';

function CurrencyGridEntry ({ baseCurrency, targetCurrency, price, change }) {
  return (
    <tr>
      <td>{ baseCurrency }</td>
      <td>{ targetCurrency }</td>
      <td>{ price }</td>
      <td>{ change }</td>
    </tr>
  );
};

export default CurrencyGridEntry;

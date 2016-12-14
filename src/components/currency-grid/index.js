import React from 'react';
import CurrencyGridEntry from 'components/currency-grid-entry';

export default function CurrencyGrid ({ entries }) {
  const sortedEntries = entries.sort((entryA, entryB) => {
    if (entryA.change > entryB.change) {
      return -1;
    }
    return 1;
  });
  const rows = sortedEntries.map(
    (entry) => <CurrencyGridEntry key={entry.baseCurrency} { ...entry } />
  );
  return <table><tbody>{ rows }</tbody></table>;
}

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default ({ selectedTabIndex, tabClicked }) => {
  return (
    <Tabs onSelect={tabClicked} selectedIndex={selectedTabIndex}>
      <TabList>
        <Tab>Exchange Rates</Tab>
        <Tab>Currency Converter</Tab>
        <Tab>Graph</Tab>
      </TabList>
      <TabPanel>Exchange Rate Goes Here</TabPanel>
      <TabPanel>Currency Converter Here</TabPanel>
      <TabPanel>Graph Goes Here</TabPanel>
    </Tabs>
  );
};

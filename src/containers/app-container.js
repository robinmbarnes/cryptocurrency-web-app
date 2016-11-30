import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BubbleLoader from 'components/bubble-loader';
import CenterBlock from 'components/center-block';
import CurrencyGrid from 'components/currency-grid';

export default class AppContainer extends React.Component {
  render() {
    const {
      selectedTabIndex,
      tabClicked,
      conversionData
    } = this.props;
    if (conversionData.isInitialLoadComplete) {
      return (
        <Tabs onSelect={tabClicked} selectedIndex={selectedTabIndex}>
          <TabList>
            <Tab>Exchange Rates</Tab>
            <Tab>Currency Converter</Tab>
            <Tab>Graph</Tab>
          </TabList>
          <TabPanel>
            <CurrencyGrid entries={conversionData.conversions} />
          </TabPanel>
          <TabPanel>Currency Converter Here</TabPanel>
          <TabPanel>Graph Goes Here</TabPanel>
        </Tabs>
      );
    }
    return (
      <CenterBlock>
        <BubbleLoader isLoading={true}></BubbleLoader>
      </CenterBlock>
    );
  }

  componentWillMount () {
    this.props.fetchConversionData();
  }
}

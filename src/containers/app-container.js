import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BubbleLoader from 'components/bubble-loader';
import CenterBlock from 'components/center-block';
import CurrencyGrid from 'components/currency-grid';
import CurrencyChartContainer from 'components/currency-chart';
import CurrencyConverter from 'components/currency-converter'

export default class AppContainer extends React.Component {
  render() {
    const {
      selectedTabIndex,
      tabClicked,
      conversionData,
      convertButtonClicked
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
          <TabPanel>
            <CurrencyConverter convertButtonClicked={convertButtonClicked} />
          </TabPanel>
          <TabPanel>
            <CurrencyChartContainer
              conversionData={conversionData.conversions}
            />
          </TabPanel>
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

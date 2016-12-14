import { connect } from 'react-redux';
import AppContainer from 'containers/app-container';
import { tabClicked, convertButtonClicked } from 'actions/ui/tabs';
import { fetchConversionDataStart } from 'actions/currency-data';

function mapStateToProps ({ ui, conversionData }) {
  return {
    selectedTabIndex: ui.tabs.selectedTabIndex,
    conversionData
  };
}

function mapDispatchToProps (dispatch) {
  return {
    tabClicked: (selectedTabIndex) => dispatch(tabClicked(selectedTabIndex)),
    fetchConversionData: () => dispatch(fetchConversionDataStart()),
    convertButtonClicked: (...args) => dispatch(convertButtonClicked(...args))
  };
}

const ConnectedAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

export default ConnectedAppContainer;

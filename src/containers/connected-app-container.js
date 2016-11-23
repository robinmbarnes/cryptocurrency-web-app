import { connect } from 'react-redux';
import AppContainer from 'containers/app-container';
import { tabClicked } from 'actions/ui/tabs';

function mapStateToProps ({ ui }) {
  return {
    selectedTabIndex: ui.tabs.selectedTabIndex
  };
}

function mapDispatchToProps (dispatch) {
  return {
    tabClicked: (selectedTabIndex) => dispatch(tabClicked(selectedTabIndex))
  };
}

const ConnectedAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

export default ConnectedAppContainer;

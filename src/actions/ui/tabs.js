import { actionCreator } from 'actions/action-helpers';

export const tabClicked = (selectedTabIndex) =>
  actionCreator('TAB_CLICKED', { selectedTabIndex });

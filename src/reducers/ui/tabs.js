const defaultState = {
  selectedTabIndex: 0
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'tabClicked':
      let { selectedTabIndex } = action;
      return Object.assign({}, state, { selectedTabIndex });
  }
  return state;
}

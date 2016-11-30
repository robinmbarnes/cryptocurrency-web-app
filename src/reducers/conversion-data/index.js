export const defaultState = {
  conversions: [],
  isInitialLoadComplete: false
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case 'FETCH_CONVERSION_DATA_OK':
      let { conversionData } = action;
      return Object.assign({}, state, {
        conversions: conversionData,
        isInitialLoadComplete: true
      });
  }
  return state;
}

const initialState = {
    status: 'All',
    colors: [],
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
          ...state.filters,
          status: action.payload
      }
    }
    default:
      return state
  }
}

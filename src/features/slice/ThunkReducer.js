import Actions from "../../actions/thunk"

const initialState = {
    counter: 1
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_THUNK_COUNT:
          return {
            ...state,
            counter: action.counter
          }
        default:
          return state
      }
}

export default reducer
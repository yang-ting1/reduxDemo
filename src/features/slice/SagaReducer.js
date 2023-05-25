import Actions from "../../actions/saga"

const initialState = {
    counter: 1
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.RECEIVE_SAGA_COUNT:
          return {
            ...state,
            counter: action.counter
          }
        default:
          return state
      }
}

export default reducer
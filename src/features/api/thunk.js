import Actions from "../../actions/thunk"
import {store} from "../../app/store"

const improveCounter = (amount) => {
    return async (dispatch, getState, extraParams) => {
        const result = await new Promise((resolve) =>
            setTimeout(() => resolve({ data: amount + 1 }), 500)
        );
        console.log(extraParams)
        dispatch(Actions.addCounter(result.data))
        return result.data
    }
}

const incrementByAmount = (amount) => {
    return  (dispatch) => {
        dispatch(Actions.addCounter(amount+1))
    }
}


const incrementByAmountNormal = async (amount) => {
        const result = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: amount + 1 }), 500)
    );
    store.dispatch(Actions.addCounter(result.data))
}

export default {
    improveCounter,
    incrementByAmount,
    incrementByAmountNormal
  }
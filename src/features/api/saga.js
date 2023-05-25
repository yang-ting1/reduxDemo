import {takeEvery,put, all} from 'redux-saga/effects'
import ActionTypes from '../../actions/saga'

function* watchIncrement(){
    yield takeEvery(ActionTypes.ADD_SAGA_COUNT, function * (data) {
        yield put(ActionTypes.receiveCounter(data.counter + 1))
    })
}
function* watchIncrementAsync(){
    yield takeEvery(ActionTypes.ADD_SAGA_COUNT_ASYNC, function * ({counter}){
        const result = yield new Promise((resolve) => {
            setTimeout(() => resolve({ data: counter + 1 }), 500)
        })
        yield put(ActionTypes.receiveCounter(result.data))
    })
}

export default function* rootSaga() {
    yield all([watchIncrement(), watchIncrementAsync()])
  }
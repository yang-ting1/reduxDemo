export const ADD_SAGA_COUNT = 'ADD_SAGA_COUNT'
export const RECEIVE_SAGA_COUNT = 'RECEIVE_SAGA_COUNT'
export const ADD_SAGA_COUNT_ASYNC = 'ADD_SAGA_COUNT_ASYNC'

const result = {
    ADD_SAGA_COUNT,
    RECEIVE_SAGA_COUNT,
    ADD_SAGA_COUNT_ASYNC,
    addCounter: (data) => ({
        type: ADD_SAGA_COUNT,
        counter: data
    }),
    addCounterAsync: (data) => ({
        type: ADD_SAGA_COUNT_ASYNC,
        counter: data
    }),
    
    receiveCounter: (data) => ({
        type: RECEIVE_SAGA_COUNT,
        counter: data
    }),
}
export default result
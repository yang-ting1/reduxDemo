export const ADD_THUNK_COUNT = 'ADD_THUNK_COUNT'
export const DELETE_COUNT = 'DELETE_COUNT'

const result = {
    ADD_THUNK_COUNT,
    addCounter: (data) => ({
        type: ADD_THUNK_COUNT,
        counter: data
    }),
}
export default result
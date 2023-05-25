import { createSlice } from '@reduxjs/toolkit';
import apiSlice from '../api/RTKQuery';

const initialState = {
  value: 1,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'RTKQueryCounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(apiSlice.endpoints.getAsyncCount.matchPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(apiSlice.endpoints.getAsyncCount.matchFulfilled, (state, {payload}) => {
        state.status = 'matchFulfilled';
        state.value = payload;
      })
  },
});

export const { increment, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.RTKQuery.value

export default counterSlice;

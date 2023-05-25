import { createSlice } from '@reduxjs/toolkit';
import { incrementAsync } from '../api/RTKThunk';

const initialState = {
  value: 1,
  status: 'idle',
};



export const counterSlice = createSlice({
  name: 'RTKThunkCounter',
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
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.RTKThunk.value

export default counterSlice.reducer;

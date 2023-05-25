import { createAsyncThunk } from '@reduxjs/toolkit';
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchCount(amount);
      // dispatch(SliceAPI)
      return response.data;
    } catch (err) {
      // 通过 `rejectWithValue()` 工具函数，显式返回 `err.response.data`，
      // 把其作为 `rejected` action 的 `action.payload`,
      return rejectWithValue(err.response.data)
    }
  },

  // 取消操作
  {
    condition: (userId, { getState, extra }) => {
      const { users } = getState()
      const fetchStatus = users.requests[userId]
      if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
        // 已经获取到数据或者在进行中，无需再次获取
        return false
      }
    }
  }
);

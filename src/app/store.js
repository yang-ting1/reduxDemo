import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducer from "../features/slice/ThunkReducer";
import SagaReducer from "../features/slice/SagaReducer";
import rootSaga from "../features/api/saga";
import RTKThunkReducer from '../features/slice/RTKThunk';
import RTKQuerySlice from '../features/slice/RTKQuery';
import apiSlice from '../features/api/RTKQuery';

const api = "http://www.example.com/sandwiches/";
const whatever = 42;

const sagaMiddleware = createSagaMiddleware() // 配置saga

// middleware config
const middleware = [
  thunk.withExtraArgument({ api, whatever }), // 配置thunk添加 api，whatever默认参数
  sagaMiddleware, // 配置saga
  apiSlice.middleware // 配置RTK Query
]

const store = configureStore({
  reducer: {
    thunk: reducer,
    saga: SagaReducer,
    RTKThunk: RTKThunkReducer,
    RTKQuery: RTKQuerySlice.reducer
  },
  middleware
});

sagaMiddleware.run(rootSaga) // 配置saga

export { store }
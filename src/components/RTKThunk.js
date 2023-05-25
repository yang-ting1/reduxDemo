import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  selectCount,
} from '../features/slice/RTKThunk';
import { incrementAsync } from '../features/api/RTKThunk';
import styles from '../css/Counter.module.css';

export function ThunkCounter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

 const incrementAsyncFun = async() => {
  const res = await dispatch(incrementAsync(count))
  console.log('result', res)
 }

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={count}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(increment(count))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={incrementAsyncFun}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

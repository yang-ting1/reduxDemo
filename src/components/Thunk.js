import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThunkAPI from "../features/api/thunk"
import styles from '../css/Counter.module.css';

export function Counter() {
  const dispatch = useDispatch();
  const {thunk} = useSelector(state => state)
  const {counter} = thunk

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={counter}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(ThunkAPI.incrementByAmount(counter))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          // onClick={() => dispatch(ThunkAPI.improveCounter({type:"TEST_OBJ", user:'sas'})).then(res => {
          //   console.log('resultsss', res)
          // })}
          onClick={() => dispatch(ThunkAPI.improveCounter(counter)).then(res => {
            console.log('resultsss', res)
          })}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => ThunkAPI.incrementByAmountNormal(counter)}
        >
          Add By Store
        </button>
        
      </div>
    </div>
  );
}

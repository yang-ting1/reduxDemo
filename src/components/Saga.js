import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ActionTypes from '../actions/saga'
import styles from '../css/Counter.module.css';

export function SagaCounter() {
  const dispatch = useDispatch();
  const {saga} = useSelector(state => state)
  const {counter} = saga

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
          onClick={() => dispatch(ActionTypes.addCounter(counter))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(ActionTypes.addCounterAsync(counter))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

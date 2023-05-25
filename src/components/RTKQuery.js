import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCount,
} from '../features/slice/RTKQuery';
import {useGetPostsQuery, useUpdateMutation, useGetAsyncCountQuery} from "../features/api/RTKQuery"
import styles from '../css/Counter.module.css';

export function RTKQueryCounter() {
  const count = useSelector(selectCount);
  const {data} = useGetPostsQuery();
  const {data: data2} = useGetAsyncCountQuery({count: 2})
  const [updatePost] = useUpdateMutation()
  console.log(data, data2, useGetPostsQuery())

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
          onClick={() => updatePost({id: '1', counter: count + 1})}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          // onClick={() => dispatch(incrementAsync(count))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

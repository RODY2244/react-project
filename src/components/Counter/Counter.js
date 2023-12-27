import React, { useState } from 'react';
import s from "./Counter.module.css"



const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      setCount(count)  
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className={s.wrapper}>
      <button className={s.btn} onClick={decrement}>-</button>
      <h1 className={s.title}>{count}</h1>
      <button className={s.btn} onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
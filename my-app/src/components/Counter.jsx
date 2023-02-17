

import React, { useState } from 'react'
import { CounterAction } from '../features/Counter/CounterSlice'
import { useDispatch,useSelector } from 'react-redux'

const Counter = () => {

    const [nCount,setCount]=useState()
    const dispatch=useDispatch();
    const newCount1 =useSelector((state)=>state.newCount.count)

    const handleChnage=(e)=>{
        setCount(e.target.value);
    }
   const handleIncrement=()=>{
    dispatch(CounterAction.Increment())
   }
   const handleIncrement1=()=>{
    dispatch(CounterAction.Decrement())
   }
   const handleIncrement2=(e)=>{
    e.preventDefault();
    dispatch(CounterAction.AddByAmount(Number(nCount)))
   }

  return (
   <>
    <div>
      <input type="number" onChange={handleChnage} placeholder='Add Amoutn'/>
      <button onClick={handleIncrement}>Incremrnt +1</button>
      <button onClick={handleIncrement1}>Decremrnt -1</button>
      <button onClick={handleIncrement2}>AddBy Amount </button>
    </div>
    <div>
        <h1>{newCount1}</h1>
    </div>
   </>

  )
}

export default Counter

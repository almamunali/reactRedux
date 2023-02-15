

import React,{useState} from 'react'
import { UserAction } from '../features/UserSlice/userSlice';
import { useDispatch,useSelector } from 'react-redux';

const Demo = () => {
   const[name,setName]=useState();
   const[age,setAge]=useState();
   const [address,setAddress]=useState();
   const  dispatch =useDispatch()

   const newName =useSelector((state)=>state.newData.userName);
   const newAge =useSelector((state)=>state.newData.userAge);
    const newAddress=useSelector((state)=>state.newData.userAddress);

   const handleChange1=(e)=>{
    setName(e.target.value);
   }
   const handleChange2=(e)=>{
    setAge(e.target.value);
   }

   const handleChange3=(e)=>{
    setAddress(e.target.value);
   }

   const handleClick =(e)=>{
    e.preventDefault();
    dispatch(UserAction.InputText(name));
    dispatch(UserAction.InputAge(age));
    dispatch(UserAction.InputAddress(address))
   }

  return (
    <div className='App'>
      <h1>Hi everyOne</h1>
      <div>
        <form action="">
            <input type="text" onChange={handleChange1} placeholder='user Name' />
            <input type="text" onChange={handleChange2}  placeholder='user age'/>
            <input type="text" onChange={handleChange3} placeholder="user Address"/>
            <button onClick={handleClick}> submit</button>
        </form>
      </div>

        <div>
            <p>this is user Name :{newName}</p>
            <p>this is user Age :{newAge}</p>
            <p>this is user Address :{newAddress}</p>
        </div>


    </div>
  )
}

export default Demo

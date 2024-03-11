import React, { useContext, useEffect, useState } from 'react'
import { AuthContextData } from '../authProvider/AuthContainer'
import AdminDashboard from '../pages/AdminDashboard';
import StudentDashboard from '../pages/StudentDashboard';
import NavBar from '../navbar/NavBar';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getassignmentData } from '../redux/action';

function Homes() {
    const{authentication,obj, setObj}=useContext(AuthContextData);
    const dispatch=useDispatch();
  
    const data = useSelector((pre) => pre.reducer);
    useEffect(() => {
      dispatch(getassignmentData());
    }, []);
    useEffect(()=>{
    setObj(data.signupData.role)
    },[data])
    console.log(data)
  return (
    <div>
        
    {obj === 'admin' && <AdminDashboard />}
    {obj=== 'user' && <StudentDashboard />}
   
</div>
  )
}

export default Homes


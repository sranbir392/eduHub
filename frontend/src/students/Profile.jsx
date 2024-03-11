import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getassignmentData } from '../redux/action';

function Profile() {
  const dispatch=useDispatch();
  const [array, setArray] = useState([]);
  const data = useSelector((pre) => pre.reducer);
  useEffect(() => {
    dispatch(getassignmentData());
  }, [data]);
  console.log(data)
  return (
    <div>
     pro 
    </div>
  )
}

export default Profile

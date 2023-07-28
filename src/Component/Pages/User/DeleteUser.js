import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
const DeleteUser = () => {
    const {studentID}=useParams();
    const[student, setStudent]=useState({});
    const navigate=useNavigate();
    async function fetchStudentdata(){
        const result=await axios.get(`http://localhost:8001/emp/${studentID}`)
        setStudent(result.data);
    }
    useEffect(()=>{
        fetchStudentdata()
    },[])
    function deleteData()
    {
        axios.delete(`http://localhost:8001/emp/${studentID}`)
        navigate("/user/showuser");
    }
  return (
    <div>
        <h2 className='text-center mt-5'>User Data Deleted</h2>
        <center>
        <form onSubmit={()=>deleteData()}>
       <p>Are you want to delete <span style={{color:'red'}}>{student.name}</span> data?</p>
       <input type='submit' value='YES' className='btn btn-outline-danger col-3'/>
       <NavLink to={'/user/showuser'}><button type='button' className='btn btn-outline-warning col-3'>NO</button></NavLink>
       </form>
       </center>
    </div>
  )
}

export default DeleteUser
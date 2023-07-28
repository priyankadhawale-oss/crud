import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const ShowUser = () => {
    const[student, setstudent] =useState([]);
    async function fetchStudentdata(){
        const result= await axios.get("http://localhost:8001/emp");
        console.log(result.data);
        setstudent(result.data)
    }
    useEffect(()=>{
      fetchStudentdata();
    },[])
  return (
    <div>
        <h2 className='text-center'>Student data</h2>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Mobile</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Email</th>
              <th scope='col'>Address</th>
              <th scope='col'>State</th>
              <th scope='col'>City</th>
              <th scope='col'>zip</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              student.map(obj=>{
                return(
                  <tr key={obj.id}>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.mo}</td>
                    <td>{obj.gender}</td>
                    <td>{obj.Email}</td>
                    <td>{obj.Addr}</td>
                    <td>{obj.state}</td>
                    <td>{obj.city}</td>
                    <td>{obj.zip}</td>
                    <td>
                      <NavLink to={`/user/updateuser/${obj.id}`}><button className='btn btn-outline-warning'>Update</button></NavLink>
                      <NavLink to={`/user/deleteuser/${obj.id}`}><button className='btn btn-outline-danger'>Delete</button></NavLink>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default ShowUser
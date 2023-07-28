import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
  function savedata(data) {
    console.log(data);
    axios.post("http://localhost:8001/emp", data);
    alert("data added successfully");
    navigate('/user/showuser')
  }
  const navigate=useNavigate();
  const { register, handleSubmit } = useForm();
  return (
    <div className='container'>
      <h1 className='text-center mb-5'>Add Guest Entry</h1>
      <form onSubmit={handleSubmit(savedata)}>
        <label htmlFor='name' className='mb-2'>Enter Full Name</label>
        <input type="text" id='name' className='form-control' {...register("name")} />
        <br />
        <label htmlFor='mo' className='mb-2'>Mobile Number</label>
        <input type='number' id='mo' className='form-control' {...register("mo")} />
        <br />
        <label htmlFor='gender' className='me-5'>Select Gender</label>
        <div className='form-check form-check-inline' >
          <input className='form-check-input' type='radio' name='gender' id='male' value="male" {...register("gender")} />
          <label className='form-check-label' htmlFor='male'>Male</label>
        </div>
        <div className='form-check form-check-inline'>
          <input className='form-check-input' type='radio' name='gender' id='female' value='female'{...register("gender")} />
          <label className='form-check-label' htmlFor='female'>Female</label>  </div>
        <div className='form-check form-check-inline' >
          <input class='form-check-input' type='radio' name='gender' id='other' value='other' {...register("gender")}/>
          <lable className='form-check-label' htmlFor='other'>Other</lable>
        </div>
        <br/>
        <br />


        <label htmlFor="Email" class="form-label">Email</label>
        <input type="email" class="form-control" id="Email" {...register("Email")} />
        <br />
        <div class="col-md-12">
          <label htmlFor="Addr" class="form-label">Address</label>
          <input type="text" class="form-control" id="Addr" placeholder="1234 Main St"{...register("Addr")} />
        </div>
        <div className="row g-3">

          <div class="col-md-6">
            <label for="city" class="form-label">City</label>
            <input type="text" class="form-control" id="city" {...register("city")} />
          </div>
          <div class="col-md-4">
            <label for="state" class="form-label">State</label>
            <select id="state" class="form-select" {...register("state")}>
              <option selected value="">Choose state</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Madhypradesh">Madhypradesh</option>
              <option value="gujrat">gujrat</option>
              <option value="up">up</option>
              <option value="rajasthan">rajasthan</option>
              <option value="keral">keral</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="zip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="zip" {...register("zip")} />
          </div>
        </div>

<br/><br/>
        <button type='submit' className='btn btn-outline-success col-3 offset-2'>ADD DATA</button>
        <button type='reset' className='btn btn-outline-warning col-3 offset-2' >RESET</button>
      </form>
    </div>
  )
}

export default AddUser
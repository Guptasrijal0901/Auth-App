import React from 'react'
import "./signup.css"


export const Signup = () => {
  return (
    <div className='main'>
    <form>
    <div className='header'> Sign Up </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" 
    className="form-label">Name</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputName"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail" 
    className="form-label">Email address</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputEmail" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword" 
    className="form-label">Password</label>
    <input type="password" 
    className="form-control" 
    id="exampleInputPassword" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputUserName" 
    className="form-label">User Name</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputUserName"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputDOB" 
    className="form-label">Date of Birth</label>
    <input type="date" 
    className="form-control" 
    id="exampleInputDOB"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPhoneNumber" 
    className="form-label">Phone Number</label>
    <input type="number" 
    className="form-control" 
    id="exampleInputPhoneNumber" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputOccupation" 
    className="form-label">Occupation</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputOccupation" />
  </div>
  <div className="button-container" >
  <button type="submit" 
  className="btn btn-primary">Submit</button>
  <button type="Login" 
  className="btn btn-primary">Login</button>
  </div>
</form>
</div>
  )
}
export default Signup;

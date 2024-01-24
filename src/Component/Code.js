import React from 'react'
import "./code.css"

export const Code = () => {
  return (
    <div className='main'>
    <div className="row g-3 align-items-center">
  <div className="col-auto">
    <label htmlFor="inputOTP" className="col-form-label">OTP</label>
  </div>
  <div className="col-auto">
    <input type="Number" id="inputOTP" className="form-control" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
</div>
  )
}
export default Code;
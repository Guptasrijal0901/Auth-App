import React from 'react'
import "./code.css"

export const Code = () => {
  return (
    <div>
    <div className="row g-3 align-items-center">
  <div className="col-auto">
    <label htmlFor="inputOTP" className="col-form-label">OTP</label>
  </div>
  <div className="col-auto">
    <input type="Number" id="inputOTP" className="form-control" />
  </div>
</div>
</div>
  )
}
export default Code;
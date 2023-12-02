import axios from 'axios'
import React, { useState } from 'react'
import LogRegNav from './LogRegNav'

const UserReg = () => {
    const [inputField,setInputField]=useState(
        {Name:"",userDOB:"",userAddress:"",userPhNo:"",userEmail:"",username:"",password:"",confirmpass:""}
    )

    const apiLink="http://15.206.51.93:3001/userreg"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (inputField.password==inputField.confirmpass) {
                   if (inputField.userPhNo.length<11) {
                      if (Response.data.status=="success") {
                        alert("User Registered Successfully !!!")
                        setInputField({Name:"",userDOB:"",userAddress:"",userPhNo:"",userEmail:"",username:"",password:"",confirmpass:""})
                      } else {
                        alert("Something Went Wrong !!!")
                      }
                   } else {
                     alert("Enter Valid Phone Number !!!")
                   } 
                } else {
                   alert("Password and Confirm Password does not match !!!") 
                }
            }
        )
    }

  return (
    <div>
        <LogRegNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>User Registration</h1>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="Name" value={inputField.Name}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input onChange={inputHandler} type="date" name="userDOB" className="form-control" value={inputField.userDOB} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea onChange={inputHandler} name="userAddress" cols="30" rows="10" className="form-control" value={inputField.userAddress}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No.</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="userPhNo" value={inputField.userPhNo}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input onChange={inputHandler} type="email" name="userEmail" className="form-control" value={inputField.userEmail} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Username</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Password</label>
                            <input onChange={inputHandler} type="password" name="password" className="form-control" value={inputField.password} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input onChange={inputHandler} type="password" name="confirmpass" className="form-control" value={inputField.confirmpass} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Register</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="/uslog">Already Registered? Login here !!!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserReg
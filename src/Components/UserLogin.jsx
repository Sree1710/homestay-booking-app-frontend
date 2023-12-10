import axios from 'axios'
import React, { useState } from 'react'
import LogRegNav from './LogRegNav'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const [inputField,setInputField]=useState(
        {username:"",password:""}
    )

    const apiLink="http://localhost:3001/userlog"
    const navigate=useNavigate()

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    let token=Response.data.token
                    let usName=Response.data.data.Name
                    sessionStorage.setItem("ustoken",token)
                    sessionStorage.setItem("usname",usName)
                    navigate("/usviewp")
                } else {
                    alert(Response.data.status)
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
                            <h1>User Login</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Username</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input onChange={inputHandler} type="password" name="password" className="form-control" value={inputField.password} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-warning">Sign In</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="/usreg">Not Registered User? Register here !!!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserLogin
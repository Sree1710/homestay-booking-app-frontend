import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UsNav from './UsNav'

const UsBookPack = () => {
    const [inputField,setInputField]=useState(
        {token:sessionStorage.getItem("ustoken"),packName:"",Name:sessionStorage.getItem("usname"),packbookDate:""}
    )
    
    const [outputField,setOutputField]=useState(
        {packName:""}
    )

    const [packData,setPackData]=useState(
        []
    )
    
    const param=useParams()
    const apiLink="http://localhost:3001/bookp"
    const apiLink2="http://localhost:3001/userviewp"
    const navigate=useNavigate()

    const getData=()=>{
        let pid=param.pid
        let data={"_id":pid,"token":sessionStorage.getItem("ustoken")}
        axios.post(apiLink2,data).then(
            (Response)=>{
                setPackData(Response.data[0])
                console.log(Response.data[0])
                setOutputField(Response.data[0])
                console.log(inputField)
            }
        )
    }

    const inputHandler=(event)=>{
        setInputField({...inputField,...outputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Booking Successful !!!")
                    setInputField({pack_id:"",packName:"",Name:"",packbookDate:""})
                    navigate("/usviewp")
                } else {
                    alert("Something Went Wrong !!!")
                }
            }
        )
    }

    useEffect(()=>{getData()},[])
  return (
    <div>
        <UsNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Book Package</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Package Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="packName" value={outputField.packName} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">User</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="Name" value={inputField.Name} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Booking Date</label>
                            <input onChange={inputHandler} type="date" name="packbookDate" className="form-control" value={inputField.packbookDate} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UsBookPack
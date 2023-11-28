import axios from 'axios'
import React, { useState } from 'react'
import AdNav from './AdNav'

const AdAddPack = () => {
    const [inputField,setInputField]=useState(
        {token:sessionStorage.getItem("adtoken"),packName:"",packDesc:"",packPhoto:"",packPrice:""}
    )

    const apiLink="http://localhost:3001/addpack"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField.token)
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Package Added Successfully !!!")
                    setInputField({packName:"",packDesc:"",packPhoto:"",packPrice:""})
                } else {
                    alert("Something Went Wrong !!!")
                }
            }
        )
    }
  return (
    <div>
        <AdNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Package</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Package Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="packName" value={inputField.packName} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea onChange={inputHandler} name="packDesc" cols="30" rows="10" className="form-control" value={inputField.packDesc}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">HomeStay Image Link</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="packPhoto" value={inputField.packPhoto} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Price</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="packPrice" value={inputField.packPrice} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdAddPack
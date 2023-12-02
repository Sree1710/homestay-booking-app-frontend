import axios from 'axios'
import React, { useState } from 'react'
import UsNav from './UsNav'

const UserViewPack = () => {
    const [inputField, setInputField] = useState(
        { token: sessionStorage.getItem("ustoken"), packbookDate: "" }
    )

    const apiLink = "http://15.206.51.93:3001/usviewp"

    const [outputField, setOutputField] = useState(
        []
    )

    const inputHandler = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post(apiLink, inputField).then(
            (Response) => {
                setOutputField(Response.data)
                console.log(Response.data)
            }
        )
    }
    return (
        <div>
            <UsNav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Packages</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Select Date</label>
                                <input onChange={inputHandler} type="date" name="packbookDate" className="form-control" value={inputField.packbookDate} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-warning">Search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        </div>
                        <div className="row g-3">
                            {outputField.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
                                        <div className="card">
                                            <img height="200px" src={value.packPhoto} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.packName}</h5>
                                                <p className="card-text">{value.packDesc}</p>
                                                <p className="card-text"><h6>{value.packPrice}</h6></p>
                                                <a href={'/usbookp/'+value.packName} class="btn btn-primary">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserViewPack
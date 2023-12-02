import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdNav from './AdNav'

const AdViewPack = () => {
    const [packData, setPackData] = useState(
        []
    )

    const apiLink = "http://15.206.51.93:3001/adviewp"

    const getData = () => {
        let token = { "token": sessionStorage.getItem("adtoken") }
        console.log(token)
        axios.post(apiLink, token).then(
            (Response) => {
                setPackData(Response.data)
            }
        )
    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            <AdNav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Packages</h1>
                            </div>
                            {packData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
                                        <div className="card">
                                            <img height="200px" src={value.packPhoto} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.packName}</h5>
                                                <p className="card-text">{value.packDesc}</p>
                                                <p className="card-text"><h6>{value.packPrice}</h6></p>
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

export default AdViewPack
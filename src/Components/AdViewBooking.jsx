import React, { useEffect, useState } from 'react'
import AdNav from './AdNav'
import axios from 'axios'

const AdViewBooking = () => {
    const [bookData, setBookData] = useState(
        []
    )

    const apiLink = "http://localhost:3001/adviewb"

    const getData = () => {
        let token = { "token": sessionStorage.getItem("adtoken") }
        axios.post(apiLink, token).then(
            (Response) => {
                setBookData(Response.data)
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
                                <h1>View Booking</h1>
                            </div>
                            {bookData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"><h6>Package ID: </h6>{value.pack_id}</h5>
                                                <p className="card-text"><h6>Package Name:</h6>{value.packName}</p>
                                                <p className="card-text"><h6>User: </h6>{value.Name}</p>
                                                <p className="card-text"><h6>Date Of Booking: </h6>{value.packbookDate}</p>
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

export default AdViewBooking
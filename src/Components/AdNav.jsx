import React from 'react'

const AdNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">HomeStay Booking App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/adpack">Add Package</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/adviewp">View Package</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/adviewb">View Booking</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Sign Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default AdNav
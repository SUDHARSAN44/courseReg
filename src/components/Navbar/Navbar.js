import React from 'react'

import './Navbar.css'

export default function Navbar() {
  return (
        <>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="https://i.ibb.co/1RTC6nL/image-removebg-preview-30.png" className='w-10' /></a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#review">Review</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="/catalog" >Courses</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="/addCourse" >Admin actions</a>
            </li>
            </ul>
            {/* <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-info" type="submit">Search</button>
            </form> */}
        </div>
        </div>
        </nav>
    </>
  )
}

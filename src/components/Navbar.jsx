import React from 'react'
import NexcentLogo from '../assets/Logonexcent.svg'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-lg-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        <img src={NexcentLogo} alt="Nexcent Logo" width="100" height="40" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#hero">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Service
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#feature">
            Feature
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#product">
            Product
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonial">
            Testimonial
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#faq">
            FAQ
          </a>
        </li>
      </ul>
      <div className="ms-auto">
        <a className="d-block d-lg-inline-flex text-decoration-none mb-2 mb-lg-0 me-lg-4" href="#">Login</a>
        <a href="#" className='btn btn-primary'>Sign Up</a>
      </div>
    </div>
  </div>
</nav>
  )
}

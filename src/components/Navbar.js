import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//learning props 

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/Home">{props.title}</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'enable':'disable'} dark mode</label>
            </div>
          </div>
        </div>
        </nav>
    )
}

Navbar.propTypes = { // is wali line kLink p small hi hoga
  title : PropTypes.string, //inkLink p capital hi hoga
  about : PropTypes.string
};

Navbar.defaultProps = {
  title : 'MyTextEditor',
  about : 'this is my app'
};

export default Navbar;
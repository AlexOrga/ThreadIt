import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component{
  render(){
    return(
      <div className="NavBar text-center">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
              <Link to="/" className="navbar-brand">TMT</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/alltrips">
                All Trips</Link>
              </li>
              <li><Link to="/savedtrips">
                Saved Trips</Link>
              </li>
              <li><Link to="/newtrip">
                Create Trip</Link>
              </li>
              <li className="navbar-form">
                <button
                  className="btn btn-danger"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}

export default NavBar;
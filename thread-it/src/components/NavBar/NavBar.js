import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
              <Link to="/" className="navbar-brand">Thread-It</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/orders">
                All Orders</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/newOrder">
                  New Order
                </Link>
              </li>
              <li>
                <Link to="/clients">
                  Clients
                </Link>
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
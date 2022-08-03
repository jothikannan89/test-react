import React, { useContext } from 'react';
import { AppContext } from '../Context';
import { Link} from 'react-router-dom';



const ViewCart=()=>{
  const { cartItems } = useContext(AppContext);

  return (
    <Link
    to={{
      pathname:`/view-cart`,
    }}>
  <a className="nav-link waves-effect">
  <span className="badge red z-depth-1 mr-1"> {cartItems.length} </span>
  <i className="fas fa-shopping-cart"></i>
  <span className="clearfix d-none d-sm-inline-block">My Cart </span>
</a></Link>)
}



  const Header=()=> {
    return (
      <div>
              <header><h1>My Shopping App</h1></header>
              <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
      <span className="navbar-brand">Categories:</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="basicExampleNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">All
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <ViewCart/>
          </li>
          <li className="nav-item">
            <a href="https://www.facebook.com" className="nav-link waves-effect" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://twitter.com" className="nav-link waves-effect" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
    </nav>
      </div>

    )
  }

export default Header;
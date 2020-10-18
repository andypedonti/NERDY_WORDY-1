import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOADING, UNSET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';

const Navbar = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
    .post('/api/users/logout')
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: UNSET_USER });
        history.replace('/login');
      }
    })
    .catch((error) => {
      console.log('Logout error');
    });
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="btn btn-link text-light">
        <span className="text-light"><h3>HOME</h3></span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {state.user ? (
            <li className="nav-item active">
              <Link to="#" className="btn btn-link text-light" onClick={logout}>
                <span className="text-light"><h3>LOGOUT</h3></span>
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item active">
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-light"><h3>LOGIN</h3></span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-light"><h3>SIGN UP</h3></span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <a class="navbar-brand"><h1>NERDY WORDY</h1></a>
    </nav>
  );
};

export default Navbar;

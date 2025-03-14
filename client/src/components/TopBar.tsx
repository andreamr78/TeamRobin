import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <Link to="/">Locations</Link>
          <Link to="/saved-places">Saved Places</Link>
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
        </>
      ) : null}
    </div>
  );
}

export default TopBar;

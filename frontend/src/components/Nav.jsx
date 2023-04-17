import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ loggedIn }) {
  return (
    <div>
      {loggedIn ? null : <Link to="/login" className="btn btn-sucees float-end m-3">Login</Link>}
    </div>
  )
}

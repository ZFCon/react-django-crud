import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to="/login">
        <button className="btn btn-sucees float-end m-3">Login</button>
      </Link>
    </div>
  )
}

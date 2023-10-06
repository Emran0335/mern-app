import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import {useSelector, useDispatch} from 'react-redux'
import { logout, reset } from "../features/auth/authSlice";


const Header = () => {

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        <li>
          <button className="btn"><FaSignOutAlt />
          Logout</button>
        </li>
        <li>
          <Link to='/login'>
          <FaSignInAlt />
          Login
          </Link>
        </li>
        <li>
          <Link to='/register'>
          <FaUser />
          Register
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

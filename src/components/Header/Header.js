import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-500">
      <div className="navbar w-9/12 mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-white text-xl">
            Quizies
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/topics" className="text-white">
                Topics
              </Link>
            </li>
            <li>
              <Link className="text-white">Statistics</Link>
            </li>
            <li>
              <Link className="text-white">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

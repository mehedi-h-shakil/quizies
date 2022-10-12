import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow-md bg-gray-100">
      <div className="navbar w-9/12 mx-auto">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-orange-500 text-xl"
          >
            Quizies
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/topics" className="text-orange-500">
                Topics
              </Link>
            </li>
            <li>
              <Link to="/statistics" className="text-orange-500">
                Statistics
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-orange-500">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Homecrud = () => {
  return (
    <div>
      <h1>Welcome to this week</h1>

      <nav>
        <ul>
          <li>
            <Link to="/form">Crud </Link>
          </li>
          <li>
            <Link to="/api"> Read </Link>
          </li>
          <li>
            <Link to="/update">DAY 3 </Link>
          </li>
          <li>
            <Link to="/delete">DAY 4 </Link>
          </li>
          <li>
            <Link to="/overall">DAY 5 </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Homecrud;

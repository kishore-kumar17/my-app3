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
            <Link to="/delete">same CRUD</Link>
          </li>
          <li>
            <Link to="/Hoc">HOC home</Link>
          </li>
          <li>
            <Link to="/context">Home crud using context</Link>
          </li>
          <li>
            <Link to="/view">....view...</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Homecrud;

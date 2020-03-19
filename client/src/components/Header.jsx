import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customize">Customize</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Privacy Center</h1>
      </div>
    </header>
  );
}

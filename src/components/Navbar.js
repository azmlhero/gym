import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header>
      <div className="container">
        <h1>WorkOut Buddy</h1>
        <Link to="/"></Link>
      </div>
    </header>
  );
}

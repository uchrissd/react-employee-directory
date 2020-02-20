import React from "react";
import SearchBox from "../SearchBox/index";

function Nav(props) {
  return (
    <nav>
      <a className="navbar-brand">Employee Directory</a>
      <SearchBox />
    </nav>
  );
}

export default Nav;

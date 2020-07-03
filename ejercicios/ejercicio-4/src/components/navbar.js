import React from "react";

import Icon from "./icon";
import Logo from "./logo";
import SearchBar from "./search-bar";
import Login from "./login";

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <Icon />
      <Icon />
      <Icon />
      <Login />
    </div>
  );
}

import React, { useState } from "react";

function Header(args) {
  return (
    <header >
      <nav className="bg-primary text-white  p-2 px-5 gap-5 d-flex" >
        <div className="logo">Admin</div>
        <ul className="d-flex gap-5 align-items-center m-0 flex-basis-1">
          <li className="nav-links text-white">
            <a href="/">Home</a>
          </li>
         
        </ul>
        <div className="search" >
        <input class="form-control" type="text" placeholder="Search" readonly />
        </div>
      </nav>
    </header>
  );
}

export default Header;

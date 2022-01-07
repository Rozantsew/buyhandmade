import React from "react";
import { NavWrapper } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavWrapper>
      <ul>
        <li>Home</li>
        <li>Polityka Prywatności</li>
        <li>O nas</li>
        <li>Regulamin</li>
        <li>Co tam</li>
      </ul>
    </NavWrapper>
  );
};

export default Navbar;

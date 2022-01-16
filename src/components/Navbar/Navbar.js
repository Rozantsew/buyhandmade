import React from "react";
import { NavWrapper } from "./Navbar.styled";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../../actions";

const Navbar = () => {
  const isLogged = useSelector((state) => state.isLogged)
  const dispatch = useDispatch();

  return (
    <NavWrapper>
      <ul>
        <li>Home</li>
        <li>Polityka Prywatności</li>
        <li>O nas</li>
        <li>Regulamin</li>
        <li>Co tam</li>
        {isLogged ? (
          <button onClick={() => dispatch(logInOut())}>Log out</button>
        ) : (
          <button onClick={() => dispatch(logInOut())}>Log in</button>
        )}
      </ul>
    </NavWrapper>
  );
};

export default Navbar;

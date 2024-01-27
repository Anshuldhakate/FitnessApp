import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logout from "../logout";

const Navbar = () => {
  const [isAuth, setAuth] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    setAuth(() => {
      return localStorage.getItem("token");
    });
  }, [isAuth]);
  return (
    <NavbarWrapper>
      <LeftSection>
        <img
          style={{ borderRadius: "5%" }}
          src="https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </LeftSection>
      <CenterSection>
        <NavLinks>
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/logs">logs</a>
    
        </NavLinks>
      </CenterSection>
      <RightSection>
        <AuthButtons>
          {!isAuth ? <a href="/login">Login</a> : <Logout />}
          {!isAuth ? <a href="/signup">SignUp</a> : ""}
        </AuthButtons>
      </RightSection>
    </NavbarWrapper>
  );
};

export default Navbar;

const LeftSection = styled.div`
  img {
    height: 50px;
    margin-top: 3%;
    margin-left: 5%;
    align-content: center;
  }
`;

const NavbarWrapper = styled.nav`
  background-color: #333;
  /* padding: 0.3rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  width: 100%;
`;

const CenterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a,
  button {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 10%;

    &:hover {
      background-color: lightgray;
      color: black;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 3%;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;

  a,
  button {
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 10%;

    &:hover {
      background-color: lightgray;
      color: black;
    }
  }
`;
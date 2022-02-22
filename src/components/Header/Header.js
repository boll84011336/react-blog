import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext, LoadingContext } from "../../contexts";
import { setAuthToken } from "../../utils"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Link, useNavigate, useLocation} from "react-router-dom";

const Banner = styled.div``

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding:0px 32px;
  box-sizing: border-box;
  background:	#F5F5F5;
`;

const Brand = styled.div`
font-style:oblique;
font-size:22px;
font-weight: bold;
color:red;
`;

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const Nav = styled(Link)` 
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  ${(props) =>
    props.$active &&
    `
    background: 	#B0C4DE;
  `} 
`


const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 64px;
  }
`;


export default function Header() {
  const { isLoading } = useContext(LoadingContext);
  const location = useLocation()
  const Navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext)

  const handleLogout = () => {
    setAuthToken('');
    setUser(null);
    Navigate("/");
  }

  return (
    <><HeaderContainer className="navbar fixed-top navbar-light">
      <LeftContainer>
        <Brand to="/">Blog</Brand>
        <NavbarList className="navbar-fixed-top">
          <Nav to="/" $active={location.pathname === "/"}>首頁</Nav>
          {user && <Nav to="/new-post" $active={location.pathname === "/new-post"}>發布文章</Nav>}
        </NavbarList>
      </LeftContainer>
      {!isLoading && (
        <NavbarList className="navbar-fixed-top">
          {!user && <Nav to={"/register"} $active={location.pathname === "/register"}>註冊</Nav>}
          {!user && <Nav to="/login" $active={location.pathname === "/login"}>登入</Nav>}
          {user && <Nav to="/login" onClick={handleLogout}>登出</Nav>}
        </NavbarList>
      )}
    </HeaderContainer>
    <Banner>
    <div className="top-banner">
      <div className="top-banner__info">
        <h1 className="top-banner__sub-title">WELCOME TO MY BLOG</h1>
      </div>
    </div>
    </Banner></>
    
    
  );
}

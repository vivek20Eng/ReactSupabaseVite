import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import * as ReactBootstrap from "react-bootstrap";
import Userprofile from "../pages/User/Userprofile";

const NavBar = () => {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef();

  const handleClick = () => {
    setShowProfile((prevState) => !prevState);
  
  };

  const handleClickOutside = (e) => {
    if (profileRef.current && !profileRef.current.contains(e.target)) {
      setShowProfile(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand>vivek sir &#129313;</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootstrap.Nav className="me-auto">
              {!auth && (
                <ReactBootstrap.Nav.Link as={Link} to="/login">
                  Login
                </ReactBootstrap.Nav.Link>
              )}
              {!auth && (
                <ReactBootstrap.Nav.Link as={Link} to="/register">
                  Register
                </ReactBootstrap.Nav.Link>
              )}
              {auth && (
                <ReactBootstrap.Nav.Link as={Link} to="/">
                  Home
                </ReactBootstrap.Nav.Link>
              )}
            </ReactBootstrap.Nav>

            <ReactBootstrap.Nav>
              {auth && (
                <ReactBootstrap.Nav.Link ref={profileRef}>
                  {user.email}
                  <ReactBootstrap.Image
                    onClick={handleClick}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-8GKg4Pf4IwNl14nnt80beli9_PG6AQnPn8JYpFJVpEeAGRBDFt88N5EYtMGA_U_jFg&usqp=CAU"
                    roundedCircle
                    width={32}
                    height={32}
                    alt="User Profile"
                    style={{ marginRight: "8px" }}
                  />
                </ReactBootstrap.Nav.Link>
              )}
              {/* {auth && (
                <ReactBootstrap.Button variant="danger" size="sm" onClick={handleLogout}>
                  LogOut
                </ReactBootstrap.Button>
              )} */}
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
      {auth && showProfile && (
        <div ref={profileRef}>
          <Userprofile />
        </div>
      )}
    </>
  );
};

export default NavBar;

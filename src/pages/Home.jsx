import React from "react";
import Weather from "../apis/Weather/Weather";
import { useAuth } from "../context/AuthProvider";

const Home = () => {
  const { user } = useAuth();

  return <div >
    {/* <p>You are logged in and your email address is {user.email}</p> */}
  
  <Weather/>
  </div>;
};

export default Home;



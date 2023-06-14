import React from "react";
import Weather from "../apis/Weather/Weather";
import { useAuth } from "../context/AuthProvider";
import Apicard from "./CardApiList/Apicard"
const Home = () => {
  
  const { user } = useAuth();

  return <div >
    
    {/* <Apicard/> */}
  <Weather/>
  </div>;
};

export default Home;



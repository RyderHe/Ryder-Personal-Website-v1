import "./Header.css";
// import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import ArrowDownBtn from "./ArrowDownBtn/ArrowDownBtn";

const Header = (props) => {
  const { name, occupation, description, address, socialNetworks} = props.mainData;
  console.log("Header", props.mainData);
  return (
    <header id="home">  
      <NavBar />
      <Banner name={name} address={address} occupation={occupation} description={description} socialNetworks={socialNetworks} />
      <ArrowDownBtn />
    </header>
  );
}

export default Header;

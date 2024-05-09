import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import {  useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link,useNavigate } from "react-router-dom";

export const Charge = () => {
	
	const navigate = useNavigate();
	useEffect(()=>{
		const timer = setTimeout(() => {
		navigate("/")
	  }, 1000); 
  
	  return () => clearTimeout(timer)}
		,[])
	return (
	<div className="container d-flex justify-content-center">
      <img src="https://i.pinimg.com/736x/4d/b7/bd/4db7bd396ddca03c467736a3c37f29dd.jpg" className="img-fluid h-70 w-80" alt="Your image description" />
	 
    </div>
	
	)
};


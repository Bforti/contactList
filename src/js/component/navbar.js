import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState,useContext } from "react";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {actions,store}=useContext(Context)
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">CONTACT LIST</span>
			</Link>
			<Link to="/demo">
			<button className=" m-2 btn btn-success" type="button" 
			>Crear nuevo contacto</button>
			</Link>
		
		</nav>
	);
};

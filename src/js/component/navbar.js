import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState,useContext } from "react";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {actions,store}=useContext(Context)
	const[name,setName]=useState("")
	const[phone,setPhone]=useState("")
	const[email,setEmail]=useState("")
	const[address,setAddress]=useState("")
	const handle = () => {
		actions.createContact(name, phone, email, address);
		window.location.reload(); // Recargar la página al crear un nuevo contacto
	  };
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact list</span>
			</Link>
			<div className="ml-auto">
			<button className=" m-2 btn btn-success" type="button" 
			data-bs-toggle="modal" data-bs-target="#staticBackdrop"
			>Crear nuevo contacto</button>
			<form className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div className="modal-dialog">
			  <div className="modal-content">
				<div className="modal-header">
				  <h1 className="modal-title fs-5" id="staticBackdropLabel">Creando Contacto</h1>
				  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">
			
					  <div className="form-group">
					    <label htmlFor="name">Nombre</label>
					    <input type="text"
						 className="form-control" id="name" placeholder="Ingresa tu nombre"
						 value={name}
  						 onChange={(e) => setName(e.target.value)}/>
					  </div>
					  <div className="form-group">
					    <label htmlFor="phone">Teléfono</label>
					    <input type="number" pattern="[0-9]+" placeholder="Ingresa tu número telefónico" required 
						className="form-control" id="phone"
						value={phone}
  						onChange={(e) => setPhone(e.target.value)}/>
					  </div>
					  <div className="form-group">
					    <label htmlFor="email">Email</label>
					    <input type="email" 
						className="form-control" id="email" placeholder="Ingresa tu dirección de email"
						value={email}
  						onChange={(e) => setEmail(e.target.value)}/>
					  </div>
					  <div className="form-group">
					    <label htmlFor="address">Dirección</label>
					    <input type="text" 
						className="form-control" id="address" placeholder="Ingresa tu dirección completa"
						value={address}
  						onChange={(e) => setAddress(e.target.value)}/>
					  </div>
			    
				</div>
				<div className="modal-footer">
				  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				  <button type="button" className="btn btn-primary" onClick={handle}>Crear</button>
				</div>
			  </div>
			</div>
		   </form>
			</div>
		</nav>
	);
};

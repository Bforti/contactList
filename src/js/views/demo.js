import "../../styles/demo.css";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";





export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [address, setAddress] = useState("")
	

	return (
		<div className="container my-5">
		  <h1 className="mb-4">Crear Contacto</h1>
		  <form>
			<div className="form-group">
			  <label htmlFor="name">Nombre</label>
			  <input
				type="text"
				className="form-control"
				id="name"
				placeholder="Ingresa tu nombre"
				value={name}
				onChange={(e) => setName(e.target.value)}
			  />
			</div>
			<div className="form-group">
			  <label htmlFor="phone">Teléfono</label>
			  <input
				type="number"
				pattern="[0-9]+"
				placeholder="Ingresa tu número telefónico"
				required
				className="form-control"
				id="phone"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			  />
			</div>
			<div className="form-group">
			  <label htmlFor="email">Email</label>
			  <input
				type="email"
				className="form-control"
				id="email"
				placeholder="Ingresa tu dirección de email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			  />
			</div>
			<div className="form-group">
			  <label htmlFor="address">Dirección</label>
			  <input
				type="text"
				className="form-control"
				id="address"
				placeholder="Ingresa tu dirección completa"
				value={address}
				onChange={(e) => setAddress(e.target.value)}
			  />
			</div>
			<Link className="d-flex justify-content-start" to="/">
			<button type="button" className="btn btn-primary m-1" onClick={()=>actions.createContact(name, phone, email, address)}>
			  Crear
			</button>
			</Link>
			
		  </form>
		<Link className="d-flex justify-content-start" to="/">
				<span className="navbar-brand mb-0 h1">Volver a home</span>
		</Link>
		</div>


	  );
};

import React from "react";
import { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";



export const Home = () => {
	const navigate=useNavigate()
	const { store, actions } = useContext(Context);
	const [contactsList, setContactsList] = useState(store.contactsList);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		setContactsList(store.contactsList);
	}, [store.contactsList]);

	return (
		<div className="container">
			<ul className="list-group">
				{contactsList.map((item, index) => (
					<li
						className="list-group-item d-flex justify-content-between align-items-center"
						key={index}
					>
						<div className="container d-flex align-items-center">
							<img
								src="https://picsum.photos/id/237/200/300"
								className="rounded-circle mx-3"
								style={{ width: "85px", height: "75px" }}
							/>
							<div className="container">
								<h4 className="mb-0">{item.name}</h4>
								<span className="mb-0">{item.phone}</span> <br />
								<span className="mb-0">{item.email}</span>
							</div>
						</div>
						<div className="container-fluid d-flex justify-content-end align-items-center ms-4">					
						<button type="button" className="fa-solid fa-pen-to-square m-2 btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
							<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
											<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div className="modal-body">
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
											</form>
										</div>
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
											<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>actions.updateContact(item.id,name,phone,email,address)}>Editar</button>
										</div>
									</div>
								</div>
							</div>
							<button
								className="fa-solid fa-trash btn btn-danger"
								onClick={() => {actions.deleteContact(item.id) 
									return(window.location.reload())}}
							/>
						</div>
					</li>
				))}
			</ul>

		</div>
	);
};
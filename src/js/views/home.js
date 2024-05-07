import React from "react";
import { useEffect,useState,useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";



export const Home = () => {
	const { store, actions } = useContext(Context);
	const [contactsList, setContactsList] = useState(store.contactsList);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
  
	useEffect(() => {
	  actions.getAllContacts();
	}, []);
  
	useEffect(() => {
	  setContactsList(store.contactsList);
	}, [store.contactsList]);
  
	const handleUpdate = (contact) => {
	  actions.updateContact(contact.id, name, phone, email, address);
	  window.location.reload();
	};
  
	const handleDelete = (contactId) => {
	  actions.deleteContact(contactId);
	  window.location.reload();
	};
  
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
				<button
				  className="fa-solid fa-pen-to-square m-2 btn btn-success"
				  type="button"
				  data-bs-toggle="modal"
				  data-bs-target="#staticBackdrop"
				  onClick={() => {
					setName(item.name);
					setPhone(item.phone);
					setEmail(item.email);
					setAddress(item.address);
				  }}
				></button>
				<form
				  className="modal fade"
				  id="staticBackdrop"
				  data-bs-backdrop="static"
				  data-bs-keyboard="false"
				  tabIndex="-1"
				  aria-labelledby="staticBackdropLabel"
				  aria-hidden="true"
				>
				  {/* Modal content */}
				  <div className="modal-footer">
					<button
					  type="button"
					  className="btn btn-primary"
					  onClick={() => handleUpdate(item)}
					>
					  Modificar
					</button>
				  </div>
				</form>
				<button
				  className="fa-solid fa-trash btn btn-danger"
				  onClick={() => handleDelete(item.id)}
				/>
			  </div>
			</li>
		  ))}
		</ul>
	  </div>
	);
  };
import React from "react";
import { useEffect,useState,useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Home = () => {
	const {store, actions}= useContext(Context)
	// const [list,setList]=useState(store.contactsList);
	useEffect(()=>{
		actions.getAllContacts();
		
	},[store.contactsList])
	return(
		<div className="container">
		<ul className="list-group">
		 {store.contactsList.map((item,index)=>(
		 <li className="list-group-item d-flex justify-content-between align-items-center"
		 key={index}>
			<div className='container d-flex align-items-center'>
			<img
                src='https://picsum.photos/id/237/200/300'
                className="rounded-circle mx-3"
                style={{ width: '85px', height: '75px' }}
              />
			<div className="container">
			<h4 className="mb-0">{item.name}</h4>
			<span className="mb-0">{item.phone}</span> <br/>
			<span className="mb-0">{item.email}</span>
			
			</div>
			</div>
			<div className="container-fluid d-flex justify-content-end align-items-center ms-4">
			<button className="fa-solid fa-pen-to-square m-2 btn btn-success" type="button" 
			data-bs-toggle="modal" data-bs-target="#staticBackdrop"
			></button>
			<form className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div className="modal-dialog">
			  <div className="modal-content">
				<div className="modal-header">
				  <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
				  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">
			
					  <div className="form-group">
					    <label for="name">Nombre</label>
					    <input type="text"
						 className="form-control" id="name" placeholder="Ingresa tu nombre"/>
					  </div>
					  <div className="form-group">
					    <label for="phone">Teléfono</label>
					    <input type="number" pattern="[0-9]+" placeholder="Ingresa tu número telefónico" required 
						className="form-control" id="phone"/>
					  </div>
					  <div className="form-group">
					    <label for="email">Email</label>
					    <input type="email" 
						className="form-control" id="email" placeholder="Ingresa tu dirección de email"/>
					  </div>
					  <div className="form-group">
					    <label for="address">Dirección</label>
					    <input type="text" 
						className="form-control" id="address" placeholder="Ingresa tu dirección completa"/>
					  </div>
			    
				</div>
				<div className="modal-footer">
				  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				  <button type="button" className="btn btn-primary">Understood</button>
				</div>
			  </div>
			</div>
		  	</form>
			<button className="fa-solid fa-trash btn btn-danger"
			onClick={()=>actions.deleteContact(item.id)}/>
			
			</div>

		  </li>))}
		</ul>
	  </div>
	  
)
}

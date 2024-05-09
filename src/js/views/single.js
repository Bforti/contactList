import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
	<div className="container">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lapatilla.com%2F2013%2F04%2F10%2Flos-chavistas-entre-cambures-y-pajaritos-fotos%2F&psig=AOvVaw21kPH4hFUnmmG-ZpQqL-MJ&ust=1715300701570000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLDLwJmn_4UDFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-aqbub&psig=AOvVaw21kPH4hFUnmmG-ZpQqL-MJ&ust=1715300701570000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLDLwJmn_4UDFQAAAAAdAAAAABAI" className="img-fluid" alt="Your image description" />
    </div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

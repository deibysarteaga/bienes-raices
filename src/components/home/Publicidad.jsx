import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Publicidad = () => {
	return (
		<Fragment>
			<section className="publicidad">
				<div className="contenedor publi ocultar">
 					<h3>Encuentra la Casa de tus Sueños</h3>
 					<p>Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad.</p>
 					<Link to="/contacto" className="btn btn-publicidad">Cantáctanos</Link>
				</div>
			</section>
		</Fragment>
	)
} 

export default Publicidad
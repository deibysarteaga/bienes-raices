import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Casa from './casas/Casa.jsx'

const Casas = () => {
	return (
		<Fragment>
			<section className="casas">
				<div className="contenedor">
					<h2>Casas y Depas en Venta</h2>
					<div className="casas-destacadas">
						<Casa 
							numero="1"
							img="img/anuncio1.jpg"
							titulo="Casa en el Lago"
							descripcion="Casa de lujo con excelente vista, acabados de lujo a un excelente precio."
							precio="2.500.000$"
						/>
						<Casa 
							numero="2"
							img="img/anuncio2.jpg"
							titulo="Terminados de Lujo"
							descripcion="Casa con diseño moderno, asi como tegnologia inteligente y amueblada."
							precio="3.000.000$"
						/>
						<Casa 
							numero="3"
							img="img/anuncio3.jpg"
							titulo="Casa con Alberca"
							descripcion="Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad."
							precio="5.000.000$"
						/>
					</div>
					<Link to="/anuncios" className="btn btn-todas">Ver Todas</Link>
				</div>
			</section>
		</Fragment>
	)
}

export default Casas
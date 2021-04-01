import React, { Fragment } from 'react'
import Header from './home/Header.jsx'
import Footer from './home/Footer.jsx'
import Casa from './home/casas/Casa.jsx'

const Anuncios = () => {
	return (
		<Fragment>
			<Header
				header="0"
			/>
			<div className="anuncios">
				<div className="contenedor">
					<h2>Casas y Depas en Venta</h2>
					<div className="casas-destacadas">
						<Casa 
							numero="0"
							img="img/anuncio4.jpg"
							titulo="Casa en el Lago"
							descripcion="Casa de lujo con excelente vista, acabados de lujo a un excelente precio."
							precio="2.500.000$"
						/>
						<Casa 
							numero="0"
							img="img/anuncio2.jpg"
							titulo="Terminados de Lujo"
							descripcion="Casa con diseño moderno, asi como tegnologia inteligente y amueblada."
							precio="3.000.000$"
						/>
						<Casa 
							numero="0"
							img="img/anuncio6.jpg"
							titulo="Casa con Alberca"
							descripcion="Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad."
							precio="5.000.000$"
						/>
						<Casa 
							numero="0"
							img="img/anuncio1.jpg"
							titulo="Casa con Alberca"
							descripcion="Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad."
							precio="5.000.000$"
						/>
						<Casa 
							numero="0"
							img="img/anuncio5.jpg"
							titulo="Casa con Alberca"
							descripcion="Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad."
							precio="5.000.000$"
						/>
						<Casa 
							numero="0"
							img="img/anuncio2.jpg"
							titulo="Casa con Alberca"
							descripcion="Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad."
							precio="5.000.000$"
						/>
					</div>
				</div>
			</div>
			<Footer
				color="negro"
				contacto="0"
			/>
		</Fragment>
	)
}

export default Anuncios
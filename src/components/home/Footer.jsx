import React, { Fragment } from 'react'
import Formulario from './footer/Formulario.jsx'
import Copy from './footer/Copy.jsx'

const Footer = (props) => {
	return (
		<Fragment>
			<footer className={`footer footer-${props.color}`}>
				<div className="contenedor">
					{
						props.contacto === "1" ? (
							<Fragment>
								<Formulario/>
								<Copy/>
							</Fragment>
						) : (
							<Copy/>
						)
					}
				</div>
			</footer>
		</Fragment>
	)
}

export default Footer
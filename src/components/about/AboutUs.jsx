import React, { Fragment } from 'react'

const AboutUs = () => {
	return (
		<Fragment>
			<div className="about-us">
				<div className="contenedor">
					<h2>Conoce Más Sobre Nosotros</h2>
					<div className="about-us-contenido">
						<di className="about-img">
							<img src="img/nosotros.jpg" alt=""/>
						</di>
						<div className="about-texto">
							<h4>25 Años de Experiencia</h4>
							<p className="textos">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
							<p className="textos">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default AboutUs
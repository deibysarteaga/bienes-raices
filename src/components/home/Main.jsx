import React, { Fragment } from 'react'

const Main = () => {
	return (
		<Fragment>
			<main className="contenido-principal">
				<div className="contenedor">
					<h2>Sobre Nosotros</h2>
					<div className="sobre-nosotros ocultar">
						<div className="descripcion">
							<img src="img/icono1.svg" alt=""/>
							<h3>Seguridad</h3>
							<p className="textos">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
						</div>
						<div className="descripcion">
							<img src="img/icono2.svg" alt=""/>
							<h3>El mejor precio</h3>
							<p className="textos">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
						</div>
						<div className="descripcion">
							<img src="img/icono3.svg" alt=""/>
							<h3>a tiempo</h3>
							<p className="textos">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
						</div>
					</div>
				</div>
			</main>
		</Fragment>
	)
}

export default Main
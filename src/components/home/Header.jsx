import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

	const [movil, setMovil] = useState("oculto")

	const mostrarMenu = () => {
		setMovil('visible')
	}

	const ocultarMenu = () => {
		setMovil('oculto')
	}

	return (
		<Fragment>
			<header className="header">
				<div className="contenedor">
					<div className="hero">
						<div className="logo">
							<Link to="/">
								<img src="img/logo.svg" alt="logo"/>
							</Link>
						</div>
						<nav className="navegacion-desktop">
							<ul>
								<li>
									<Link to="/nosotros">Nosotros</Link>
								</li>
								<li>
									<Link to="/anuncios">Anuncios</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
								<li>
									<Link to="/contacto">Contacto</Link>
								</li>
							</ul>
						</nav>
						<nav className="navegacion-movil">
							<i onClick={() => mostrarMenu()} class="fas fa-bars"></i>
						</nav>
					</div>
					<div className="banner">
						<h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
					</div>
				</div>
			</header>
			<nav class={movil === "oculto" ? "movil oculto" :  "movil visible"}>
				<ul>
					<li class="nav-item">
						<i onClick={() => ocultarMenu()} class="fas fa-times x"></i>	
					</li>
					<li class="nav-item">
						<Link to="/nosotros">Nosotros</Link>
					</li>
					<li class="nav-item">
						<Link to="/anuncios">Anuncios</Link>
					</li>
					<li class="nav-item">
						<Link to="/blog">Blog</Link>
					</li>
					<li class="nav-item">
						<Link to="/contacto">Contacto</Link>
					</li>
				</ul>		
			</nav>
		</Fragment>
	)
}

export default Header
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

	const [movil, setMovil] = useState("oculto")

	const mostrarMenu = () => {
		setMovil('visible')
	}

	const ocultarMenu = () => {
		setMovil('oculto')
	}

	return (
		<Fragment>
			<header className={props.header === "1" ? "header" : "header-alt"}>
				<div className={props.header === "1" ? "contenedor ocultar" : "contenedor"}>
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
					{
						props.header === "1" ? (
							<div className="banner">
								<h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
								<Link to="/contacto" className="btn btn-header">Contáctanos</Link>
							</div>
						) : (
							null
						)
					}
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
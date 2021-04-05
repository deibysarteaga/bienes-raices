import React, { Fragment } from 'react'

const Entrada = (props) => {
	return (
		<Fragment>
			<div className="entrada">
				<img src={props.img} alt=""/>
				<div className="descripcion-entrada">
					<h3>{props.titulo}</h3>
					<p className="textos">Escrito el: <span>{props.escritor}</span> por: <span>{props.fecha}</span></p>
					<p className="textos">{props.prev}</p>
					<a href="/#" className="btn btn-entrada">Leer Entrada</a>
				</div>
			</div>
		</Fragment>
	)
}	

export default Entrada
import React, { Fragment } from 'react'

const Casa = (props) => {
	return (
		<Fragment>
			<div className={props.numero === "0" ? "" : `casa-${props.numero}`}>
				<div className="casa">
					<img src={props.img} alt=""/>
					<div className="casasD">
						<h3>{props.titulo}</h3>
						<p className="textos">{props.descripcion}</p>
						<span className="precio">{props.precio}</span>
						<div className="caracteristicas">
							<span><img src="img/icono_dormitorio.svg" alt=""/> 4</span>
							<span><img src="img/icono_estacionamiento.svg" alt=""/> 1</span>
							<span><img src="img/icono_wc.svg" alt=""/> 3</span>
						</div>
						<a href="/#" className="btn btn-casa">Ver Propiedad</a>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Casa
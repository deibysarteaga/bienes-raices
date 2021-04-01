import React, { Fragment } from 'react'

const Personal = () => {
	return (
		<Fragment>
			<section className="personal">
				<div className="contenedor">
					<h2>Personal</h2>
					<div className="promociones">
						<div className="promo trabajador-1 ocultar">
							<div className="texto">
								<h4>Red John</h4>
								<h5>Director General</h5>
								<p className="textos">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse tenetur accusantium porro omnis, unde mollitia totam sit nesciunt consectetur.</p>
							</div>
							<div className="imagen">
								<img src="img/pic03.jpg" alt=""/>
							</div>
						</div>
						<div className="promo trabajador-2 ocultar">
							<div className="texto">
								<h4>María Rambow</h4>
								<h5>Administradora de Compras</h5>
								<p className="textos">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse tenetur accusantium porro omnis, unde mollitia totam sit nesciunt consectetur.</p>
							</div>
							<div className="imagen">
								<img src="img/pic04.jpg" alt=""/>
							</div>
						</div>
						<div className="promo trabajador-3 ocultar">
							<div className="texto">
								<h4>Lin Chi</h4>
								<h5>Experto en Bienes Raíces</h5>
								<p className="textos">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse tenetur accusantium porro omnis, unde mollitia totam sit nesciunt consectetur.</p>
							</div>
							<div className="imagen">
								<img src="img/pic05.jpg" alt=""/>
							</div>
						</div>
						<div className="promo trabajador-4 ocultar">
							<div className="texto">
								<h4>Sarah Mat</h4>
								<h5>Directora Creativa</h5>
								<p className="textos">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse tenetur accusantium porro omnis, unde mollitia totam sit nesciunt consectetur.</p>
							</div>
							<div className="imagen">
								<img src="img/pic06.jpg" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default Personal
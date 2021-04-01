import React, { Fragment } from 'react'

const Copy = () => {
	return (
		<Fragment>
			<div className="copy-contenedor">
				<div className="redes-sociales">
					<i className="fab fa-facebook-f"></i>
					<i className="fab fa-twitter"></i>
					<i className="fab fa-youtube"></i>
					<i className="fab fa-telegram"></i>
					<i className="fab fa-github"></i>
				</div>
				<div className="copy">
					<ul className="copy-movil">
						<li>© Theory.</li>
						<li>Diseñado por: DEIBYS.</li>
						<li>Contacto: <a href="https://t.me/deibysarteaga">Telegram</a>.</li>
					</ul>
					<p className="copy-desktop">© BienesReíces. Diseñado por: <a href="https://t.me/deibysarteaga">Deibys</a>.</p>
				</div>
			</div>
		</Fragment>
	)
}

export default Copy
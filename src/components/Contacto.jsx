import React, { Fragment } from 'react'
import Header from './home/Header.jsx'
import Footer from './home/Footer.jsx'

const Contacto = () => {
	return (
		<Fragment>
			<Header
				header="0"
			/>
			<div className="page-contacto">
				<div className="contenedor">
					<h2>Llena el Formulario de Contacto</h2>
					<form className="contacto">
						<fieldset> 
							<legend>Información Personal</legend>
							<label for="nombre">Nombre: </label>
							<input type="text" id="nombre" placeholder="Tu nombre" required/>
							<label for="email">Email: </label>
							<input type="email" id="email" placeholder="Tu email" required/>
							<label for="telefono">Teléfono: </label>
							<input type="tel" id="telefono" placeholder="Tu Teléfono" required/>
							<label for="mensaje">Mensaje: </label>
							<textarea id="mensaje"></textarea>
						</fieldset>
						<fieldset>
							<legend>Información Sobre Propiedad</legend>
							<label for="opciones">Vende o Compra</label>
							<select id="opciones"> 
								<option disabled selected>-- Seleccione una Opción --</option>
								<option value="compra">Vender</option>
								<option value="vende">Comprar</option>
							</select>
							<label for="cantidad">Cantidad: </label>
							<input type="number" id="cantidad" min="0" max="100" step="5" required/>
						</fieldset>
						<fieldset>
							<legend>Contacto</legend>
							<p>Cómo desea ser contactado</p>
							<div className="forma-contacto">
								<label for="telefono">Teléfono</label>
								<input type="radio" name="contacto" value="telefono" id="telefono"/>
								<label for="correo">Email</label>
								<input type="radio" name="contacto" value="correo" id="correo"/>
							</div>
							<p>Si elegió teléfono, elija la fecha y hora para la llamada.</p>
							<label for="fecha">Fecha:</label>
							<input type="date" id="fecha"/>
							<label for="hora">Hora:</label>
							<input type="time" id="hora" min="09:00" max="17:00"/>
						</fieldset>
						<button className="btn btn-contacto">Enviar Información</button>
					</form>
				</div>
			</div>
			<Footer
				color="negro"
				contacto="0"
			/>
		</Fragment>
	)
}

export default Contacto
import React, { Fragment, useState } from 'react'

const Formulario = () => {
	const [nombre, setNombre] = useState('')
	const [correo, setCorreo] = useState('')
	const [mensaje, setMensaje] = useState('')
	const [error, setError] = useState(null)
	const [correcto, setCorrecto] = useState(null)

	const sendMensaje = (e) => {
		e.preventDefault()
		if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
			setCorrecto(null)
			setError(1)
			return
		}
		setError(null)
		setCorrecto(1)
		setNombre('')
		setCorreo('')
		setMensaje('')
	}

	return (
		<Fragment>
			<h2>Envíanos un Mensaje</h2>
			<form onSubmit={sendMensaje}>
				<div className="form-group">
					<div className="input-nombre">
						<label>Nombre</label>
						<input type="text" value={nombre} onChange={e => setNombre(e.target.value)}/>
					</div>
					<div className="input-correo">
						<label>Correo</label>
						<input type="email" value={correo} onChange={e => setCorreo(e.target.value)}/>
					</div>
					<div className="input-mensaje">
						<label>Mensaje</label>
						<textarea onChange={e => setMensaje(e.target.value)} value={mensaje}></textarea>
					</div>
				</div>
				{
					correcto ? (
						<span className="error-b">Mensaje enviado correctamente.</span>			
					) : (
						error ? (
							<span className="error-m">Es necesario llenar todos los campos.</span>
						) : (
							null
						)
					)
				}
				<button type="submit" className="submit btn">Enviar Mensaje</button>
			</form>
		</Fragment>
	)
}

export default Formulario
import React, { Fragment } from 'react'
import Entrada from './entradas/Entrada.jsx'

const Blog = () => {
	return (
		<Fragment>
			<section className="blog">
				<div className="contenedor">
					<h2>Nuestro Blog</h2>
					<div className="entradas">
						<Entrada
							titulo="Terraza en casa."
							img="img/blog1.jpg"
							fecha="20/10/2020"
							escritor="Deibys Arteaga"
							prev="Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero."
						/>
						<Entrada
							titulo="Decora tu hogar."
							img="img/blog2.jpg"
							fecha="20/10/2020"
							escritor="Deibys Arteaga"
							prev="Maximiza el espacio en tu hogar con esta guía, aprende a combinar muebles y colores para darle vida a tu espacio."
						/>
						<Entrada
							titulo="Decora tu hogar."
							img="img/blog3.jpg"
							fecha="20/10/2020"
							escritor="Deibys Arteaga"
							prev="Maximiza el espacio en tu hogar con esta guía, aprende a combinar muebles y colores para darle vida a tu espacio."
						/>
						<Entrada
							titulo="Decora tu hogar."
							img="img/blog4.jpg"
							fecha="20/10/2020"
							escritor="Deibys Arteaga"
							prev="Maximiza el espacio en tu hogar con esta guía, aprende a combinar muebles y colores para darle vida a tu espacio."
						/>
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default Blog
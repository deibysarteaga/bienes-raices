import React, { Fragment } from 'react'
import Header from './home/Header.jsx'
import Footer from './home/Footer.jsx'
import Entrada from './home/entradas/Entrada.jsx'

const Blog = () => {
	return (
		<Fragment>
			<Header
				header="0"
			/>
			<div className="blog-page">
				<div className="contenedor">
					<h2>Nuestro Blog</h2>
					<div className="blog-page-entradas">
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
						<Entrada
							titulo="Terraza en casa."
							img="img/blog1.jpg"
							fecha="20/10/2020"
							escritor="Deibys Arteaga"
							prev="Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero."
						/>
						<Entrada
							titulo="Terraza en casa."
							img="img/blog1.jpg"
							fecha="20/10/2020"
							escritor="Deibys Arteaga"
							prev="Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero."
						/>
						<Entrada
							titulo="Terraza en casa."
							img="img/blog1.jpg"
							fecha="20/10/2020"
							escritor="Deibys Arteaga"
							prev="Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero."
						/>
					</div>
				</div>
			</div>
			<Footer
				color="negro"
				contacto="0"
			/>
		</Fragment> 
	)
}

export default Blog
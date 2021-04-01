import React, { Fragment } from 'react'
import Header from './home/Header.jsx'
import Main from './home/Main.jsx'
import Casas from './home/Casas.jsx'
import Publicidad from './home/Publicidad.jsx'
import Personal from './home/Personal.jsx'
import Blog from './home/Blog.jsx'
import Footer from './home/Footer.jsx'

const Home = () => {

	return (
		<Fragment>
			<Header
				header="1"
			/>
			<Main/>
			<Casas/>
			<Publicidad/>
			<Personal/>
			<Blog/>
			<Footer
				color="verde"
				contacto="1"
			/>
		</Fragment>
	)
}

export default Home
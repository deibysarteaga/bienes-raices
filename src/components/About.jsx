import React, { Fragment } from 'react'
import Header from './home/Header.jsx'
import AboutUs from './about/AboutUs.jsx'
import Main from './home/Main.jsx'
import Footer from './home/Footer.jsx'

const About = () => {
	return (
		<Fragment>
			<Header
				header="0"
			/>
			<AboutUs/>
			<Main/>
			<Footer
				color="negro"
				contacto="0"
			/>
		</Fragment>
	)
} 

export default About
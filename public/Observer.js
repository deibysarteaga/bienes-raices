
const ObserverT = (nombreObjeto) => {
	let objeto;

	window.addEventListener('load', () => {
		objeto = document.querySelector(`.${nombreObjeto}`)

		let options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2
		}

		let observer = new IntersectionObserver(mostrar, options)
		observer.observe(objeto)

	})

	const mostrar = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio) {
				document.querySelector(`.${nombreObjeto} .casa`).classList.add('desplazar')	
			}
		})
	}
}

ObserverT('casa-1')
ObserverT('casa-2')
ObserverT('casa-3')
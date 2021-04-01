const Observer = (nombreObjeto) => {
	let objeto;

	window.addEventListener('load', () => {
		objeto = document.querySelector(`.${nombreObjeto}`)

		let options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2
		}

		if (objeto.classList.opacity == "1") {
			return
		} else {
			let observer = new IntersectionObserver(mostrar, options)
			observer.observe(objeto)
		}

	})

	const mostrar = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio) {
				objeto.classList.add('mostrar')
				objeto.classList.remove('ocultar')
			}
		})
	}
} 

Observer('header .contenedor');
Observer('sobre-nosotros');
Observer('trabajador-1');
Observer('trabajador-2');
Observer('trabajador-3');
Observer('trabajador-4');
Observer('publi');
Observer('n-1');
Observer('n-2');
Observer('n-3');
Observer('n-4');

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
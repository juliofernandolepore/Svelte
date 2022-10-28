import App from './App.svelte';

/* aqui se esta importando el archivo App.svelte */


const app = new App({
	target: document.body,
	props: {
		nombre: 'valor de la variable name'
	}
});

export default app;
// Ajusta la altura del iframe de la retícula para ocupar el espacio disponible
function ajustarAlturaReticula() {
	const iframe = document.querySelector('.reticula-embed iframe');
	const header = document.querySelector('header');
	if (!iframe) return;

	// calcular altura disponible
	const headerHeight = header ? header.getBoundingClientRect().height : 0;
	const offset = 20; // espacio extra entre header y el iframe
	const available = window.innerHeight - headerHeight - offset;
	iframe.style.height = (available > 300 ? available : 300) + 'px';
}

window.addEventListener('load', ajustarAlturaReticula);
window.addEventListener('resize', ajustarAlturaReticula);


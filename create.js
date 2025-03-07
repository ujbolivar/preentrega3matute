// JSON Data

let camas = [];

window.onload = async () => {	
	await fetch('./datos.json')
	.then(res => res.json())
	.then(data => {
		data.forEach((cama) => {
			camas.push(cama);
		})
		console.log(camas);
	})
	.then(() => {
		camaOpciones(camas);
	})
	.catch(error => console.error(error));
}


const camaOpciones = (camas) => {
	let opciones = camas.map((cama, index) =>
	`<option value=${index}>${cama.nombre} ${cama.precio}</option>`
	).join('');
	
	console.log(opciones);
	document.querySelector("#seleccion-de-camas").innerHTML = opciones;
};



const guardarreserva = (clave, valor) => (localStorage.setItem(clave, valor))


agregar.addEventListener('click', () => {
	const nuevareserva = [
		{
			nombre: document.querySelector('#nombre').value,
			apellido: document.querySelector('#apellido').value,
			mail: document.querySelector('#mail').value,
			telefono: document.querySelector('#telefono').value,
			cama: document.querySelector('#seleccion-de-camas').value
		}
	]
	
	
	guardarreserva('reserva', JSON.stringify(nuevareserva))
}
)

































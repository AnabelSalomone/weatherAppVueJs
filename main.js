$(document).ready(function () {

	let app = new Vue({
		el: "#prueba",
		data: {
			datosAPI: {
				"name": "",
			},
			datosBoton: {
				"name": "",
			},
			nombre: "anabel"
		},

		methods: {
			greet: function (obj) {
				// `this` inside methods points to the Vue instance
				app.datosBoton = obj,
					alert('Hello ' + app.datosBoton.name + '!')
				console.log(app.datosBoton.name)
			}
		}

	})


	let urlAPI = 'https://jsonplaceholder.typicode.com/users';

	$.getJSON(urlAPI).done(function (obj) {
		app.datosAPI = obj;
		console.log(app.datosAPI);
	});


});
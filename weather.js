let app = new Vue({
	el: '#app',
	data: {
		myApi: {
			'name': '',
			'weather': [{
				'description': '',
				'icon': ''
			}],
			'main': {
				'temp': ''
			}
		},//closes myApi
		celsius: true,
		KtoC: '',
		city: '',
		conv: true,
	},//closes data



	created: function () { //fonction qui se grefe de la creation de l'instance
		let url = "http://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=ccd88baa9a00ec878474e20d0ffa936b";
		//requete en ajax
		this.$http.get(url).then(function (reponse) { // maniere dont vue peut faire une requete de type GET derriere une URL
			app.myApi = reponse.body; //corps de ma reponse
		})
	}, //closes created

	computed: {
		tempFinal: function () {
			if (this.conv === true) {
				return Math.round(this.myApi.main.temp - 273.15);
			} else {
				return Math.round(1.8 * (this.myApi.main.temp - 273) + 32);
			}
		},

		weatherIcon: function () {
			return `http://openweathermap.org/img/w/${app.myApi.weather[0].icon}.png`
		}
	},

	filters: {
		maj: function (elt) {
			return elt[0].toUpperCase() + elt.substring(1, elt.length);
		},
	},

	methods: {
		call: function () {
			let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=ccd88baa9a00ec878474e20d0ffa936b`;
			//requete en ajax
			this.$http.get(url).then(function (reponse) { // maniere dont vue peut faire une requete de type GET derriere une URL
				app.myApi = reponse.body; //corps de ma reponse
			})
		}

	}

})//closes new Vue
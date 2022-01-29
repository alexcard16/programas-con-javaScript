class App {
	constructor(descargas, puntuacion, peso){

		this.lasDescargas = descargas;
		this.laPuntuacion = puntuacion;
		this.elPeso = peso;
		this.iniciada = false;
		this.instalada = false;


	}

	siInstalada(){
		if (this.instalada == false){

			this.instalada = true;
		alert("la aplicacion fue instalada");

		}

	}

	noInstalada(){
		if (this.instalada == true){

			this.instalada = false;
		alert("la aplicacion fue desinstalada");

		}

	}

	abrir(){
		if (this.iniciada == false && this.instalada == true) {

			this.iniciada = true;

			alert("la aplicacion fue iniciada");

		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true) {

			this.iniciada = false;

			alert("la aplicacion fue cerrada");

		}
	}

	

	infoApps(){

		return `
			descargas: <b>${this.lasDescargas}</b><br>
			puntuacion:<b>${this.laPuntuacion}</b><br>
			peso:<b>${this.elPeso}</b><br>
		`;
	}


}

const App1 = new App("100","10","60gb");
const App2 = new App("130","8","50gb");
const App3 = new App("150","5","70");

App1.siInstalada();
App1.abrir();
App1.cerrar();
App1.noInstalada();

// document.write(`
// 		${App1.infoApps()}<br>
// 		${App2.infoApps()}<br>
// 		${App3.infoApps()}<br>


// 	`);
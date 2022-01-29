// PROGRAMACION ORIENTADA A OBJETOS CELULARES

class Celular {
	constructor(color, peso, rdp, rdc, ram){
		this.color = color;
		this.peso = peso;
		this.rdp = rdp;
		this.resoluciondecamara = rdc;
		this.ram = ram;
		this.encendido = false;

	}

	presionarBotonEncendido(){
		if(this.encendido == false){
			alert("el celular esta prendido");
			this.encendido = true;
		}else{
			alert("el celular esta apagado");
		}
	}

	reiniciar(){
		if(this.encendido == true){
			alert("el celular esta reiniciando");
		}else{
			
			alert("el celular reinicio");
	    }

	   }
	tomarFotos(){
		alert(`foto tomada en una resolucion de: ${this.resoluciondecamara}`);

	}

	grabarVideo(){
		alert(`grabacion tomada en una resolucion de: ${this.resoluciondecamara}`);
	}
	infoMobile(){
		return `
		color:<b> ${this.color}</b></br> 
		peso: <b> ${this.peso}</b></br>
		rdp:  <b> ${this.rdp}</b></br>
		rdc:  <b> ${this.resoluciondecamara}</b></br>
		ram:  <b> ${this.ram}</b></br>
		camaraExtra: <b> ${this.camaraExtraCelular}</b></br>

		`;

}


}

class celularAltaGama extends Celular {
	constructor(color, peso, rdp, rdc, ram, camaraExtra){
		super(color, peso, rdp, rdc, ram, camaraExtra);
		this.camaraExtraCelular = camaraExtra;
		}

		grabarVideoLento(){

			alert("grabando video en camara lenta");
		}

		reconocimientoFacial(){

			alert("reconocimiento facial completado");
		}

		infoMobileAlta(){

			return this.infoMobile() + `la resolucion de camara estra es: <b>${this.camaraExtraCelular}</b>`
		}

	}


// const celular1 = new Celular("rojo","100g","hd","full hd","2gb");
// const celular2 = new Celular("azul","110g","full hd","full hd","2gb");
// const celular3 = new Celular("negro","120g","hd","full hd","2gb");

//celular1.presionarBotonEncendido();
//celular1.reiniciar();
//celular1.tomarFotos();
//celular1.grabarVideo();

// document.write(`

	// ${celular1.infoMobile()}<br>
	// ${celular2.infoMobile()}<br>
	// ${celular3.infoMobile()}<br>

	// `);

const celular1 = new celularAltaGama("rojo","100g","hd","full hd","2gb","hd");
const celular2 = new celularAltaGama("azul","110g","full hd","full hd","2gb","hd");

 document.write(`

	 ${celular1.infoMobileAlta()}<br><br>
	 ${celular2.infoMobileAlta()}<br>
`)
const texto = "qual a definição de relevo?";
		const tempo = 60;
		let i = 0;

		function escreverTexto() {
		  if (i < texto.length) {
		    document.getElementById("texto-maquina").innerHTML += texto.charAt(i);
		    i++;
		    setTimeout(escreverTexto, tempo);
		  }
		}

		escreverTexto();



		
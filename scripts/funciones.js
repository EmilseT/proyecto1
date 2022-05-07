
		function completarCeros(numero, cntCeros)
		{		
			return String(numero).padStart(cntCeros, '0');
		}

		function completarFecha()
		{
			var hoy = new Date();
			var fecha = completarCeros(hoy.getDate(), 2)+"-"+completarCeros((hoy.getMonth()+1),2)+"-"+hoy.getFullYear();
			document.getElementById("footer").innerHTML = fecha;
		}

		function mostrarContenido(idContenedor)
		{
			var els = document.getElementsByClassName("detalle");

			Array.prototype.forEach.call(els, function(el) {
				if (el.id === idContenedor)
				{
					el.style.display = "";
				}
				else
				{
					el.style.display = "none";
				}
			});

		}
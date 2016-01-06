/*                                                   */
/* Pràctica 1 UF2 - Arquitectura client servidor     */
/*                                                   */
/*                Suport : armand.gutierrez@fje.edu  */


// El protocol que faré servir
var http = require('http');
var url = require('url');

/* exercici 3 */
//////////////////////////////////////////////////////////////////////////
//es crea una funcio per comprovar l'opció seleccionada que rep un request
function comprovarOp(opcio){

	if(opcio==='accioA'){
		//S'assigna la primera salutació
		return ' benvingut al servei ... \n';
	}else{
		//S'assigna el segon saludo
		return ' qué fas per qui? ... \n'; 
	}
}
///////////////////////////////////////////////////////////////////////////

var server = http.createServer(function(req, res) {
	// Mostrem per pantalla la petició (request) que m'ha enviat el client ...
	console.log("Capçalera (header): " + JSON.stringify(req.headers));

	//variable urlDatos recullirà la url
	// i la funció parse analitzarà la cadena url recollida.
	var urlDatos = url.parse(req.url,true);

	//urlCampos recullirà l'informació del camps del formulari 
	var urlCampos = urlDatos.query;
  
	//es comprova l'opció escollida amb la funció comprovarOp
	//passant-li el camp OP recollit
	var msg = comprovarOp(urlCampos.op);

	/* exercici 2 */
	////////////////////////////////////////////////////////////////
	var txt = 'Hola '+urlCampos.nom + 
		   msg +
		  'L\'Opcio seleccionada es: '+urlCampos.op+
		  '\nHa escrit: '+urlCampos.notes;
	////////////////////////////////////////////////////////////////

      	// Li (servidor) responc un response al client que m’envia …
   	res.writeHead(200);
	// es mostra el contingut de la variable txt
  	res.end(txt);
    
});
// Escolto les peticions pel port 8080
server.listen(8080);



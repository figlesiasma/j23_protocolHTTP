/*                                                   */
/* Pràctica 1 UF2 - Arquitectura client servidor     */
/*                                                   */
/*                Suport : armand.gutierrez@fje.edu  */


// El protocol que faré servir
var http = require('http');

var server = http.createServer(function(req, res) {
  // Mostrem per pantalla la petició (request) que m'ha enviat el client ...
	console.log("Capçalera (header): " + JSON.stringify(req.headers));
  // Li (servidor) responc un response al client que m’envia …
  res.writeHead(200);
  res.end('Hola, benvingut al servei ...\n');
});
// Escolto les peticions pel port 8080
server.listen(8080);



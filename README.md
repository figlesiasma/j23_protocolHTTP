## j23_protocolHTTP

                                                   
Pràctica 1 UF2 - Intro HTTP Arquitectura client servidor     
                                                   
                Suport : armand.gutierrez@fje.edu  

## Contingut
Codi per a un client (formulari html) i servidor (utilitzant NODEJS) per simular peticions HTTP.

## Estructura
testClient.html conté el codi html del client.
testServer.js conté el codi del servidor.

## Per inicialitzar el servidor :
	node testServer.js

## Exercicis
Ara podeu comprovar en una altra pestanya del terminal que cada vegada que es fa una petició (p.ex utilitzant la comanda curl), escriu un petit missatge :

	$ curl localhost:8080
	Hello Http
	(Nota : Evidentment si no teniu el curl instal·lat sudo apt-get install curl)

## Primer exercici
Prepareu una pàgina web amb un formulari (podeu baixar-vos el que he compartit a la carpeta, junt amb el codi del servidor).

1) Modifiqueu el client per que es connecti amb el servidor.

2) Modifiqueu el servidor per tal que mostri per pantalla el contingut que el client li envia.

3) Modifiqueu el codi per tal que canviï el missatge en funció de la petició que li arribi.

4) Què passa si el contingut del formulari es passa via method POST? Mireu amb l’ús del debugador google-chrome.



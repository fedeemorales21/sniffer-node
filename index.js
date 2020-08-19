'use strict'

const http = require('http')

const options = {
	host: 'jonmircha.com',
	port: 80,
	path: '/'
}

let htmlCode = ''

const httpClient = res =>{
	console.log(`Status Code ${res.statusCode}`)
	res.on('data', data => {
		htmlCode += data
		console.log(data,data.toString())
	})
}

const httpError = err => console.log(`Status Code ${err.code}. Error:${err.message}`)

const webServer = (req, res) =>{
	res.writeHead(200,{'Content-Type':'text/html'})
	res.end(htmlCode)
}


http
	.get (options,httpClient)

	.on('error',httpError)

http
	.createServer(webServer)

	.listen(3000)


console.log('Servidor Corriendo en http://localhost:3000')
// app/index.js
const calc = require('./calc')
const request = require('../node_modules/request-promise')

const options = {  
  method: 'GET',
  uri: 'https://raw.github.com/elahsoft/Home_Day1_DataTypes_Lab/master/package.json',
  headers: {
    'User-Agent': 'Request-Promise',
    'Authorization': 'Basic QWxhZGRpbjpPcGVuU2VzYW1l'
  },
  json:true
}

request(options)  
  .then(function (response) {
    // Request was successful, use the response object at will
    
  	res =  "The Public API was consumed and the response from the request gave the following: Name -"+response.name+
  	"Version - "+response.version+" Description - "+response.description+
  	"Main - "+response.main+" Directories - "+response.directories 

    calc.sendToConsole(res)
  })
  .catch(function (err) {
    // Something bad happened, handle the error
    calc.sendToConsole(err)
  })
 
 
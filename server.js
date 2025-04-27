const express = require('express')//sets up express framework
const app = express()//allows the variable 'app' to access the express files 
const PORT = 8000

const rappers = {
        '21 savage' : {
        'age': 32 ,
        'birthName': 'Shéyaa Bin Abraham-Joseph' ,
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 32,
        'birthName' : 'Chancelor Johnathan Bennett',
        'birthLocation' : 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}    

app.get('/', (request, response)=>{//get request to the server
    response.sendFile(__dirname + '/index.html')//serves up the html
})

app.get('/api/:name', (request, response)=>{//get request with response with json
    const rapperName =request.params.name.toLowerCase()
    if(rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it`)
})


//Intro to GET Request using Fetch

//fetch GET

fetch('http://api-to-call.com/endpoint').then(response => { //Sends request
    
    if (response.ok) {                                      //converts response
        return response.json();                             // object to JSON
    }
    throw new Error('Request failed!');                     // handles errors
}, newtworkError => console.log(neworkError.message)        //

).then(jsonResponse => {                                    //
    //Code to execute with jsonReponse                      //handles success
})                                                          //
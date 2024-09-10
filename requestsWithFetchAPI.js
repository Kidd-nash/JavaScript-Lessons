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


//Making a GET Request ---------->

    // Information to reach API
    const url = 'https://api.datamuse.com/words?sl='; //?sl= portion of the string will be the start of your query string, 
                                                    //which will be used to pass parameters to the Datamuse API. The query 
                                                    //string will be used by the engine to narrow the search to words that 
                                                    //sound like your word.

    // Selects page elements
    const inputField = document.querySelector('#input');
    const submit = document.querySelector('#submit');
    const responseField = document.querySelector('#responseField');

    // Asynchronous function
    const getSuggestions = () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${wordQuery}`;
    
    fetch(endpoint, {cache: 'no-cache'}).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {                                       //Handling a GET Request ---------->
        // renderRawResponse(jsonResponse);                         //
        renderResponse(jsonResponse);                               // ---------->
    })
    }

    // Clears previous results and display results to webpage
    const displaySuggestions = (event) => {
        event.preventDefault();
        while(responseField.firstChild){
            responseField.removeChild(responseField.firstChild);
        }
        getSuggestions();
    };

    submit.addEventListener('click', displaySuggestions);



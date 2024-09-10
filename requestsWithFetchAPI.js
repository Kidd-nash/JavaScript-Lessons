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


// fetch POST

    fetch('http://api-to-call.com/endpoint' , {          //
        method: 'POST',                                  //send request
        body: JSON.stringify({id: '200'})                //
    }).then(response => {
        if (response.ok) {
            return response.json();                      // converts response
        }                                                //object to JSON

        throw new Error('Request failed!');              //
    }, networkError => console.log(newtworkError.message)//handles errors

    ).then(jsonResponse => {                             //
        // Code to execute with jsonResponse             //handles success
    });


//Making a POST Request

    // Information to reach API
    const apiKey = '<Your API Key>';
    const urlTwo = 'https://api.rebrandly.com/v1/links';

    // Some page elements
    const inputFieldTwo = document.querySelector('#input');
    const shortenButton = document.querySelector('#shorten');
    const responseFieldTwo = document.querySelector('#responseField');

    // Asynchronous functions
    const shortenUrl = () => {
    const urlToShorten = inputFieldTwo.value;
    const data = JSON.stringify({destination: urlToShorten});
    
        fetch(urlTwo, {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
        'apikey': apiKey
        },
        body: data
        }).then(response => {                           //Handling a POST Request
            if (response.ok) {
            return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            renderResponse(jsonResponse);               //Handling a POST Request
    })
    }

    // Clear page and call AJAX functions
    const displayShortUrl = (event) => {
    event.preventDefault();
    while(responseFieldTwo.firstChild){
        responseFieldTwo.removeChild(responseFieldTwo.firstChild);
    }
    shortenUrl();
    }

    shortenButton.addEventListener('click', displayShortUrl);


// async await GET

    const getData = async () => {

        try {

            const response = await fetch ('httmpls://apit-to-call.con/endpoint');

            if (response.ok) {

                const jsonReponse = await response.json();

                //Code to execute with jsonResponse
            }

            throw new Error('Request failed!');

        } catch (error) {
            
            console.log(error);
        }
        
    }


// Making an async GET Request

    // Information to reach API
    const urlThree = 'https://api.datamuse.com/words?';
    const queryParams = 'rel_jja=';

    // Selecting page elements
    const inputFieldThree = document.querySelector('#input');
    const submitThree = document.querySelector('#submit');
    const responseFieldThree = document.querySelector('#responseField');

    // Asynchronous function
    // Code goes here
    const getSuggestionsThree = async () => {
    const wordQuery = inputFieldThree.value;
    const endpoint = `${urlThree}${queryParams}${wordQuery}`;
    try {
        const response = await fetch(endpoint, {cache: 'no-cache'});
        if(response.ok){
        const jsonResponse = await response.json();
        renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
    }

    // Clear previous results and display results to webpage
    const displaySuggestionsThree = (event) => {
    event.preventDefault();
    while(responseFieldThree.firstChild){
        responseFieldThree.removeChild(responseFieldThree.firstChild);
    }
    getSuggestions();
    }

    submitThree.addEventListener('click', displaySuggestions);


//the async Keyword

    function withConstructor(num){
        return new Promise((resolve, reject) => {
            if (num === 0){
                resolve('zero');
            } else {
                resolve('not zero');
            }
        });
    }
    
    withConstructor(0)
        .then((resolveValue) => {
        console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
    });
    
    async function withAsync(num){
        if (num === 0){
            return 'zero';
        } else {
            return 'not zero';
        }
    }
    
    withAsync(100)
        .then((resolveValue) => {
        console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
    });

//The Await Operator

    const brainstormDinner = require('./library.js');

    // Native promise version:
    function nativePromiseDinner() {
        brainstormDinner().then((meal) => {
            console.log(`I'm going to make ${meal} for dinner.`);
    });
    }

    // async/await version:
    async function announceDinner() {
        // Write your code below:
        let meal = await brainstormDinner();
        console.log(`I'm going to make ${meal} for dinner.`);
    }

    announceDinner();

//Writing async Functions

    const shopForBeans = require('./library.js');

    async function getBeans() {
        console.log(`1. Heading to the store to buy beans...`);
        let value = await shopForBeans();
        console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
    }

    getBeans();

//Handling Dependent Promises

    const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

    async function makeBeans() {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
    }

    makeBeans();
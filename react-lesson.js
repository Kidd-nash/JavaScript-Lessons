  //Hybrid from of HTML and JS(a.k.a JSX)
  const h1 = <h1>Hello world</h1>;
//JSX Elements
  <p>Hi world</p>
  //any html elements would do, just use proper elements or classes if necessary 
//JSX Elements and their surrounding
  let myArticle = <article></article>;
  const myTeam = {
    center: <li>Jokic</li>,
    powerForward: <li>Shaq</li>,
    smallForward: <li>James</li>,
    shootingGuard: <li>Curry</li>,
    pointGuard: <li>CP3</li>
  };
  //elements can be inside a variable, object/array, even classes
//Attributes in JSX
  const p1 = <p id="large">food</p>;
  const p2 = <p id="small">bar</p>;
//Nested elements in JSX
  let myDiv = (
    <div>
      <h1>
        Hello world
      </h1>
    </div>
  );
  //remeber to use proper indentation, not sure why but CC crashes if not in proper indentation
//JSX Outer Elements
  //The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!
  const blog = (
    //this div wrapping all other elements is necessary, it is called the outer element
    <div>
      <img src="pics/192940u73.jpg" />
      <h1>
        Greetings
      </h1>
      <article>
        This is the first sentence. I <strong>literally</strong> end of sentences.
      </article>
    </div>
  );
//JSX Rendering
  import React from 'react';
  //not sure what dis createRoot does
  import { createRoot } from 'react-dom/client';
  //not sure what this gets, nvm this prob gets the div container
  const container = document.getElementById('app');
  //this root creates the nesting element to the container
  const root = createRoot(container);
  //renders the string from h1?
  root.render(<h1>Hello world</h1>);
//Rendring explained - React relies on two things to render: what content to render and where to place the content.
// This line: const container = document.getElementById('app');
// Uses the document object which represents our web page.
// Uses the getElementById() method of document to get the Element object representing the HTML element with the passed in id (app).
// Stores the element in container.
// we use createRoot() from the react-dom/client library, which creates a React root from container and stores it in root. root can 
// be used to render a JSX expression. This is the “where to place the content” part of React rendering.
// the last line uses the render() method of root to render the content passed in as an argument. Here we pass an <h1> element, 
// which displays Hello world. This is the “what content to render” part of React rendering.

//Passing a variable to render
  import React from 'react';
  import { createRoot } from 'react-dom/client';

  const containers = document.getElementById('app');
  const roots = createRoot(containers);
  // Write code here:
  let myList = (
    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
      <li>List 4</li>
    </ul>
  );
  roots.render(myList);
// One special thing about a React root’s render() method is that it only updates DOM (Documnet Object Model)
// elements that have changed.
// That means that if you render the exact same thing twice in a row, the second render will do nothing

//Class vs className
const myDivTwo = 
<div className="big">
  A BIG PHRASE
</div>;
root.render(myDivTwo);

//Self Closing Tags
  const profile = (
    <div>
      <h1>Deadpool</h1>
      <img src="images/john.png" />
      <article>
        My name is Wade Wilson.
        <br/>
        I am the X-Force founder.
        <br/>
        I specialize in singing.
      </article>
    </div>
  );

//JS in JSX in JS
  //curly braces
  root.render(<h1>2 + 3</h1>);
  //will render 2 + 3
  root.render(<h1>{2 + 3}</h1>);
  //will render sum of 2 + 3 

//More operations
  const math = (<h1>2 + 3 = {2 + 3}</h1>);
  root.render(math);

//Variables in JSX
  const theBestString = 'This text was accessed through a javascript variable';
  root.render(<h1>{theBestString}</h1>);

//Variable Attributes
  const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
  const gooseImg = (<img src={goose}/>);
  //if the value is not a varialbe simply use quotations
  root.render(gooseImg);

//https://react.dev/reference/react-dom/components/common#
//Event Listeners on JSX
  function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  }

  const kitty = (
    <img 
      src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
      alt="kitty" 
      onClick={makeDoggy}/>
  );

  root.render(kitty);

//JSX Conditionals
// you can not inject an if statement into a JSX expression.
  function coinToss() {
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
  }

  const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
  };
  let img;

  // if/else statement begins here:
  if (coinToss() === 'heads') {
      img = <img src={pics.kitty} />;
  } else {
      img = <img src={pics.doggy} />;
  };
  root.render(img);
  // The if statement is on the outside, and no JavaScript injection is necessary.

//Using ternary
  const imgs = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

//Still Conditionals: &&
// judgmental will be true half the time.
  const judgmental = Math.random() < 0.5;

  const favoriteFoods = (
    <div>
      <h1>My Favorite Foods</h1>
      <ul>
        <li>Sushi Burrito</li>
        <li>Rhubarb Pie</li>
        {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
        <li>Broiled Grapefruit</li>
      </ul>
    </div>
  );

  root.render(favoriteFoods);
//.map in JSX
  const people = ['Rowe', 'Prevost', 'Gare'];

  const peopleList = people.map((person,i) =>
    
    <li key={i}>{person}</li>
  );

  
  root.render(<ul>{peopleList}</ul>);
//

  const peoples = ['Rowe', 'Prevost', 'Gare'];

  const peoplesList = people.map((person,i) =>
    
    <li key={'person_'+ i}>{person}</li>
  );
  
  
  root.render(<ul>{peoplesList}</ul>);

//Create element without jsx

  const greatestDivEver = React.createElement(
    "div",
    null,
    "i am div"
  );
//React component
  //component is a small reusable code
  function App() {
    return <h1>Hello again, World!</h1>;
  }
  export default App;

//Import react
// "import React from 'react';" is a library that contains methods
/* "import ReactDOM from 'react-dom/client';" is document object model that is used in react but not part of it 
    it is usully placed in the index.js */
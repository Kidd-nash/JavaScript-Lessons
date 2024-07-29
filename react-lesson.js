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
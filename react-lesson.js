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
      it is usully placed in the index.js 
       - creates another JavaScript object. This object contains methods that help React interact with the DOM, 
      such as ReactDOM.createRoot(). */

//Create a Function Component
  //  function component is a function that is exported right after, it is so that it can be accessed to other reacts
  /*  creating the function name for function component it is a practice to use PascalCase, to distinguish it as a 
      React JSX function */

//Return Keyword
  /*  Our instructions can include a combination of markup, CSS, and JavaScript to produce the desired result. 
      The one thing we must always include is a return statement. */

//Importing and Exporting components
  //  exporting components after finishing is important for it to be accessed and imported to other files
  //  importing components if important to use the function component made from another file

//Rendering component
  //  ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />); 
  /*  document.getElementById('app') returns a DOM element from index.html.
      .createRoot() receives the DOM element as the first argument and creates a root for it.
      .createRoot() returns a reference to the root container on which you can call methods like .render(). */

//Multiline JSX in a Component
  //  note that a multi line function component needs to have a parenthesis after a return
  function MyQuote() {
    return (
      <blockquote>
        <p>
          What is important now is to recover our senses.
        </p>
        <cite>
          <a target="_blank" 
        href="https://en.wikipedia.org/wiki/Susan_Sontag">
        Susan Sontag
          </a>
        </cite>
      </blockquote>
    );
  };

  // export default MyQuote; //note that default export can only be done once in a file or component

// Component with attributes

    const redPanda = {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
      alt: 'Red Panda',
      width:  '200px'
    };
    
    function RedPanda(){
        return (
          <div>
            <h1>Cute Red Panda</h1>
            <img 
              src={redPanda.src}
              alt={redPanda.alt}
              width={redPanda.width} />
          </div>
        );
    }
//Logic
  import React from 'react';

  const friends = [
    {
      title: "Yummmmmmm",
      src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
      title: "Hey Guys! Wait Up!",
      src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
    },
    {
      title: "Yikes",
      src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
    }
  ];

  // New function component starts here:
  function Friend() {
    let friend = friends[2];
    return(
      <div>
        <h1>{friend.title}</h1>
        <img 
          src={friend.src}/>
      </div>
    );
  }

//Event listener and handler
  import React from 'react';

  function SubmitButton() {
    function handleClick() {
      alert('Submission Successful.');
    }
    return <button onClick={handleClick}>Submit</button>;
  }

  // export default SubmitButton;
  /* The handleHover() function is passed without the parentheses we would typically see when calling a function. This is 
  because passing it as handleHover indicates it should only be called once the event has happened. Passing it as handleHover() 
  would trigger the function immediately, so be careful! */

//Props
// Accessing props from a component

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{stringProps}</h2>
    </div>
  );
}

// export default PropsDisplayer;
// after importing this and returning it for index you still have to put an attribute

// Pass props to a component

    function App() {
      return (
        <div>
          {/* passing a string */}
          <PropsDisplayer myProp="Hello"/>
          {/* passing an array */}
          <Greeting myInfo={["Astronaut", "Narek", "43"]} />
          {/* passing different data types */}
          <Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />
        </div>
      );
    }
  // it should look something like this a name(myProp) for the information that you want to pass and its value(Hello)

// Render a components Props

  function App() {
    return <Product name="Apple" price = {99} rating = "9/10" />;
  }
  /* destructuring syntax */
  function Button({displayText}) {
    return <button>{displayText}</button>;
  }
  // this function returns the components attributes in order to do that you have to declare props as its parameter
  // check below
  function Product(props) {
   return (
    <div>
        <p>{props.name}</p>
        {/* for each p element we insert the props parameter and the given name attributes (names can be set to any) */}
        <p>{props.price}</p>
        <p>{props.rating}</p>
    </div>
   );
  }

//Render Different UI Based on props
  // in this line of code you have two props, one inside a return and the other in a condition base value
  function Greeting(props) {
    if (props.signedIn == false) {
      return <h1>Please login.</h1>;
    } else {
      return (
        <>
          <h1>Welcome back, {props.name}!</h1>
          <article>
            Latest Movie: A Computer Bug's Life
          </article>
        </>
      )
    }
  }

  // export default Greeting;

//6-8
  //function talker is the parent component to the button
    function Talker() {
      //when you need a function inside a function just write it as is but inside and before the return
      function talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
          speech += 'blah ';
        }
        alert(speech);
      }
      //return the function by setting an attribute and passing the function inside as its value
      this 
      return <Button talk={talk}/>;
    }
  //example function is the child component that handles the alert of handleEvent
    function Example() {
      function handleEvent() {
        alert(`I am an event handler.
          If you see this message,
          then I have been called.`);
      }
      return (
          <h1 onClick={handleEvent}>
            Hello world
          </h1>
        );
    }
  //another child component for the button
    function Button() {
      return (
        //remember in order to have an event on an element you have give it an attribute and set its value to the 
        //event or function that you want it to do
        <button onClick={props.talk}>
          Click me!
        </button>
      );
    }
  // These two names can be whatever we want. However, there is a naming convention that is commonly used.
  // Here’s how the naming convention works: first, think about what type of event you are listening for. 
  // In our example, the event type was “click”. If you are listening for a “click” event, then you name your event handler 
  // handleClick. 
  // If you are listening for a “hover” event, then you name your event handler handleHover
  // Your prop name should be the word on, plus your event type. If you are listening for a “click” event, then you name 
  // your prop onClick. If you are listening for a “hover” event, then you name your prop onHover

  //props.children
    //parent
    function App() {
      return (
        <div>
          <List type='Living Musician'>
            <li>Sachiko M</li>
            <li>Harvey Sid Fisher</li>
          </List>
          <List type='Living Cat Musician'>
            <li>Nora the Piano Cat</li>
            <li>Garfield</li>
          </List>
        </div>
      );
    }
    //child
    function List(props) {
      let titleText = `Favorite ${props.type}`;
      if (props.children instanceof Array) {
        titleText += 's';
      }
      return (
        <div>
          <h1>{titleText}</h1>
          <ul>{props.children}</ul>
        </div>
      );
    }

//React Hooks
//built-in hooks [useState(), useEffect(), useContext(), useReducer(), useRef()]

// Update Function Component State, State Hook - useState()

//Initialize State

//Use State Setter Outside of JSX

// React Programming Patterns

// Create Container Component - it is in charge of maintaining the state (createing and updating) 

// Create Presentational Component - its job is to contain JSX. It should be exported and not render itself, it should
// get rendered by container component

//Parent/Child and Sibling/Sibling Communication

// function Container() {
//   const [isActive, setIsActive] = useState(false);                              
                                
//   return (
//     <>
//       <Presentational active={isActive} toggle={setIsActive}/>
//       <OtherPresentational active={isActive}/>
//     </>
//     );                          
//   }
                        
// function Presentational(props) {
//   return (
//     <h1>Engines are {props.active}</h1>
//     <button onClick={() => props.toggle(!props.active)}>Engine Toggle</button>
//   );
// }
                            
// function OtherPresentational(props) {
//   // render...
// }

// In the example above, Container maintains the isActive state and passes setIsActive to Presentational through the toggle 
// prop. When Presentational needs to communicate a change to the active prop, it uses the function passed to it through the 
// toggle prop.

// Using this pattern also indirectly results in communication between sibling components (components with a common parent), 
// as shown in the example above. When Presentational communicates a change through toggle, it causes a state update in 
// Container, which provides the updated value for isActive to both Presentational and OtherPresentational through the active 
// prop.

// Render Presentational Components in Container Component


//  React Syles

// The container component should now render the presentational components instead of rendering JSX. The container 
// component’s state will be passed down as props to the presentation components to keep them reactive.

// Inline Styles and Style Object Variables

//Inline Syle
<h1 style={{ color: 'red' }}>Hello world</h1>
// Notice that it has double curly braces. The outer curly braces are to note that everything between should be read as 
// JavaScript. The inner curly braces create a JavaScript object literal.

//Object Syle Variables
const darkMode = {
  color: 'white',
  background: 'black'
};
//Injecting it
<h1 style={darkMode}>Hello world</h1>

//Syle Syntax

// An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that 
// does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

//Unit Testing with Jest
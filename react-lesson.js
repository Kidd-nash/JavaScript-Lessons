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
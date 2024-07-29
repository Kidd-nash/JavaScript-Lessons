//Hybrid from of HTML and JS(a.k.a JSX)
const h1 = <h1>Hello world</h1>;
//JSX Elements
<p>Hi world</p>
//any html elements would do, just use proper elements or classes if necessary 
//JSX Elements and their surrounding
let myArticle = <article></article>;
const myTeam = {
    center: <li>Jokix</li>,
    powerForward: <li>Shaq</li>,
    smallForward: <li>James</li>,
    shootingGuard: <li>Curry</li>,
    pointGuard: <li>CP3</li>
  };
  //elements can be inside a variable, object/array, even classes
  //Attributes in JSX
  const p1 = <p
            id="large"
            >food</p>;
const p2 = <p
            id="small"
            >bar</p>;
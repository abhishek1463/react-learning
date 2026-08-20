   
import { div, h1 } from "framer-motion/client";
import React from "react"
import ReactDOM from "react-dom/client"




// JSX → Parcel/Babel → React.createElement() → React Element (JS Object)
const jsxHeading = (
<h1 id="heading" >
    Namaste React using JSX
    </h1>
);
const reactelemetn=<h1 className="parent"> this is elemnte right </h1>
const Component=()=> (
    <h1>
        this is a component dear don't worry just learn it 1
    </h1>
)

// functionla component (function reutn a jsx )
const Heading=()=> {
    return (<div>
    
        <h1> functional component type 2</h1>
    </div>
    );
};
const Heading2= ()=>(
    <div>
        <h1> Functional component is her 3</h1>
<Component/>
<Heading2/>


    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2/>);

   


   
// <div id="parent">
//   <div id="child">
//     <h1>I'm h1 tag</h1>
//     <h2>I'm h2 tag</h2>
//   </div>

//   <div id="child2">
//     <h1>I'm h1 tag</h1>
//     <h2>I'm h2 tag</h2>
//   </div>
// </div>    make this in reactt just day 1 change onthing else so don't worry bro 



    const parent= React.createElement("div",{id:"parent"},
        [
        React.createElement("div",{id:"child"}, 
            [  
                React.createElement("h1",{},"this is one "),
              React.createElement("h1",{},"this is one ")
            ]
        ),
        React.createElement("div",{id:"child2"},
             [  
                React.createElement("h1",{},"this is one "),
              React.createElement("h1",{},"this is one ")
            ]
        )
        ] 
    )


    const root=ReactDOM.createRoot(document.getElementById("root"));
     root.render(parent);
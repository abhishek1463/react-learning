


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
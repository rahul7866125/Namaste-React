
    const heading=React.createElement(
        "h1",
        {}, 
        "Hello, this is from react");

    const parent=React.createElement(
        "div", 
        {id:"parent"},
        [React.createElement("div",
        {id:"child1"},
        [React.createElement("h1", {id:"child11"}, "I am child1"), 
        React.createElement("h1", {id:"child12"}, "I am child2")]),
        React.createElement("div",
        {id:"child2"},
        [React.createElement("h1", {id:"child21"}, "I am child1"), 
        React.createElement("h1", {id:"child22"}, "I am child2")])
        ]);    

        console.log(parent);
    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);


function Todo ({todo, index, remove}) {
    
    const handle = function () {
        remove(index);
    };

    return (<div className="todo" key={index} id={index} onClick={handle}>{todo.text} (-) </div>);  //key and id not necessary (brought over from previous usage on index)
    
    
};
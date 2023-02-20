import React from 'react';
import './App.css';
import Ps1 from "./PS-1/PS-1";
import Ps2 from "./PS-2/PS-2";
import Ps3 from "./PS-3/PS-3";


export type propsType = {
    title: string,
}

function App() {
    const taskTitles = [
        "Task 1. Render tasks list",
        "Task 2. Create filter button",
        "Task 3. Use useRef and animation",
    ]

    return (
        <div className="App">
            <Ps1 title={taskTitles[0]}/>
            <Ps2 title={taskTitles[1]}/>
            <Ps3 title={taskTitles[2]}/>
        </div>
    );
}

export default App;



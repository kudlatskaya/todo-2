import React from 'react';
import './App.css';
import Ps1 from "./PS-1/PS-1";
import Ps2 from "./PS-2/PS-2";
import Ps3 from "./PS-3/PS-3";
import Ps4 from "./PS-4/PS-4";


export type propsType = {
    title: string,
}

function App() {
    const taskTitles = [
        "Task 1. Render tasks list",
        "Task 2. Create filter button",
        "Task 3. Use useRef and animation",
        "Task 4. Create function filteredTasks",
    ]

    return (
        <div className="App">
            <Ps1 title={taskTitles[0]}/>
            <Ps2 title={taskTitles[1]}/>
            <Ps3 title={taskTitles[2]}/>
            <Ps4 title={taskTitles[3]}/>

        </div>
    );
}

export default App;



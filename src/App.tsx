import React from "react";
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/task-components
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
>>>>>>> origin/task-components

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
>>>>>>> origin/task-components
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
<<<<<<< HEAD
            <TwoDice></TwoDice> 
=======
            <TwoDice></TwoDice>
>>>>>>> origin/task-components
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
<<<<<<< HEAD
=======
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
>>>>>>> origin/main
=======
>>>>>>> origin/task-components
        </div>
    );
}

export default App;

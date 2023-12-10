import './App.css';
import {CritterSwitcher} from "./CritterSwitcher";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CritterSwitcher randomGenerator={() => Math.floor(Math.random() * 100)}/>
            </header>
        </div>
    );
}

export default App;

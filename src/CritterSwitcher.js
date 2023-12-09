import {useState} from "react";

export function CritterSwitcher() {
    const [functionalText, setFunctionalText] = useState("Elephant");
    const onClick = () => setFunctionalText("Chameleon");
    return <div>
        <div>Critter!!!
            <div>{functionalText}</div>
        </div>

        <button onClick={onClick}>
            Change Critter
        </button>
    </div>;
}
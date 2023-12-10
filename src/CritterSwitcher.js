import {useState} from "react";


const critters = [
    "Elephant",
    "Chameleon",
    "Hummingbird",
]

export function CritterSwitcher(props) {
    const randomer = props.randomGenerator;

    const [functionalText, setFunctionalText] = useState("Elephant");
    const onClick = function () {
        const number = randomer();
        const critterNumber = number % critters.length;
        const critter = critters[critterNumber];
        return setFunctionalText(critter);
    };
    return <div>
        <div>Critter!!!
            <div>{functionalText}</div>
        </div>

        <button onClick={onClick}>
            Change Critter
        </button>
    </div>;
}
import {render, screen, within} from "@testing-library/react";
import {CritterSwitcher} from "./CritterSwitcher";
import userEvent from "@testing-library/user-event";

test('critter switcher starts showing elephant', () => {
    render(<CritterSwitcher/>);

    const critterSection = screen.getByText("Critter!!!");
    expect(critterSection).toBeInTheDocument();
    expect(within(critterSection).getByText("Elephant")).toBeInTheDocument()
});

test('critter switcher has a button', () => {
    render(<CritterSwitcher/>);
    const changeButton = screen.getByRole("button", {name: "Change Critter"});
    expect(changeButton).toBeEnabled();
});

test('hitting the switcher button will change the critter', async () => {
    render(<CritterSwitcher/>);

    const changeButton = screen.getByRole("button", {name: "Change Critter"});

    await userEvent.click(changeButton);

    const critterSection = screen.getByText("Critter!!!");
    expect(critterSection).toBeInTheDocument();
    expect(within(critterSection).getByText("Chameleon")).toBeInTheDocument()
});

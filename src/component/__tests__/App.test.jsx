import React from "react";
import renderWithRedux from "../../util/testUtil";


// Import your component for testing
import App from "../App";

describe("App component", () => {
  it("should render app with error", () => {
    // asFragment' is a method that returns a DocumentFragment of our rendered component.
    const { asFragment } = renderWithRedux(<App />,{});

    // Testing with Jest snapshot
    // Snapshots are generally testing the initial rendering of a component
    //
    // toMatchSnapshot() is a function to compare the current snapshot with the newly generated output.
    expect(asFragment()).toMatchSnapshot();
  });
});

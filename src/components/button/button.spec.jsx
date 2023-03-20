import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

/**
 * This follows a "Don't Nest When You Jest" testing style.
 */

// This is a mock call to test if our button is clicked.
const mockCall = jest.fn();

const setup = () => {
  render(<Button className="" label="test button" onClick={mockCall} />);

  const container = screen.getByTestId("button-container");

  // I make this an invoked expression for ease of use later.
  const clickButton = () => fireEvent.click(container);

  return {
    container,
    clickButton,
  };
};

describe("Button Component", () => {
  beforeAll(() => {
    // This clears mock calls between each test.
    mockCall.mockClear();
  });
  it("should successfully render the button component.", () => {
    const { container } = setup();

    // I expect the button to be rendered and exist.
    expect(container).toBeInTheDocument();
  });
  it("should successfully register unique button clicks on the button component.", () => {
    const { container, clickButton } = setup();

    // I expect the button to be rendered and exist.
    expect(container).toBeInTheDocument();

    // I will click the button 3 times and test for that exact number of times.
    clickButton();
    clickButton();
    clickButton();

    expect(mockCall).toHaveBeenCalledTimes(3);
  });
  it("should not register button clicks if the button is not clicked.", () => {
    const { container } = setup();

    // I expect the button to be rendered and exist.
    expect(container).toBeInTheDocument();

    // I expect the button to not be clicked.
    expect(mockCall).not.toHaveBeenCalled();
  });
});

import { render, fireEvent, screen } from "@testing-library/react";
import ConfirmButton from ".";

describe("<ConfirmButton /> Testing", () => {
  it.only("should click button", async () => {
    const testFunction = jest.fn();
    render(<ConfirmButton onClick={() => testFunction()}>Sunda</ConfirmButton>);
    fireEvent.click(screen.getByText(/Sunda/));

    expect(testFunction).toBeCalledTimes(1);
  });
});

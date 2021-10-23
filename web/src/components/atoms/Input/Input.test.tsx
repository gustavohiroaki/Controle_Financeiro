import { render, fireEvent, act, waitFor } from "@testing-library/react";
import Input from ".";

describe("<Input /> Testing", () => {
  it("should render normal input", async () => {
    const { queryByText } = render(<Input id="input" />);
    const input = queryByText("R$");
    expect(input).not.toBeInTheDocument();
  });
  it("should render money input", async () => {
    const { queryByText } = render(
      <Input inputTypeStyle="currency" id="input" />
    );
    const input = queryByText("R$");
    expect(input).toBeInTheDocument();
  });
  it("should have border when focus on normal input", async () => {
    const { getByPlaceholderText } = render(
      <Input id="input" placeholder="test" />
    );
    const inputElement = getByPlaceholderText("test");

    inputElement.focus();
    await waitFor(() => {
      expect(inputElement).toHaveFocus();
      expect(inputElement).toHaveStyle("border-color: var(--primary)");
    });
  });

  it("should have border when focus on currency input", async () => {
    const { getByPlaceholderText } = render(
      <Input id="input" inputTypeStyle="currency" placeholder="test" />
    );
    const inputElement = getByPlaceholderText("test");
    const parentElement = inputElement.parentElement;

    inputElement.focus();
    await waitFor(() => {
      expect(inputElement).toHaveFocus();
      expect(parentElement).toHaveStyle("border-color: var(--primary)");
    });
  });
});

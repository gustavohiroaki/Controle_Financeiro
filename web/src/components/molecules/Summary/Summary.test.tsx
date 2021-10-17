import { render, screen } from "@testing-library/react";
import Summary from ".";
import { nockSuccess, checkNocks, clearNocks } from "../../../utils/nocks";

describe("<Summary /> Testing", () => {
  afterEach(() => {
    if (checkNocks.length) {
      clearNocks();
    }
  });
  it("Should show texts correctly", async () => {
    render(<Summary />);
    expect(await screen.findByText("Entrada")).toBeInTheDocument();
    expect(await screen.findByText("Saída")).toBeInTheDocument();
    expect(await screen.findByText("Total")).toBeInTheDocument();
  });

  it("Should show the correct value", async () => {
    nockSuccess("/balance", {
      incomeTotal: 3915.46,
      outcomeTotal: 404,
      remaining: 3471.46,
    });
    render(<Summary />);
    expect(await screen.findByText(/R\$ 3.915,46/g)).toBeInTheDocument();
    expect(await screen.findByText(/R\$ 404,00/g)).toBeInTheDocument();
    expect(await screen.findByText(/R\$ 3.471,46/g)).toBeInTheDocument();
  });
});

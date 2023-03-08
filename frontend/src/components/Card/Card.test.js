import React from "react";
import { render, screen } from "@testing-library/react";

import Card from ".";

describe("Card component", () => {
  it("renders children prop", () => {
    render(
      <Card>
        <h1>Test</h1>
      </Card>
    );
    const childElement = screen.getByRole("heading");
    expect(childElement).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from ".";

describe("Header component", () => {
  it("renders children prop", () => {
    render(
      <Header>
        <h1>Test</h1>
      </Header>,
      { wrapper: BrowserRouter }
    );

    const childElement = screen.getByRole("heading");
    expect(childElement).toBeInTheDocument();
  });
});

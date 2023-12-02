import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("都道府県人口グラフ");
  expect(linkElement).toBeInTheDocument();
});

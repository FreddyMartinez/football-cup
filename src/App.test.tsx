import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home by default", () => {
  render(<App />);
  const welcomeText = screen.getByText(/Welcome to Your Adidas Team/i);
  expect(welcomeText).toBeInTheDocument();
});

test("App has a navbar", () => {
  render(<App />);
  const linkHome = screen.getByText(/Home/i);
  expect(linkHome).toBeInTheDocument();
  const linkCreate = screen.getByText("Create Team");
  expect(linkCreate).toBeInTheDocument();

  const linkMyTeams = screen.getByText("My Teams");
  expect(linkMyTeams).toBeInTheDocument();
});

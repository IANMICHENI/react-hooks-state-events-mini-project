import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text and category", () => {
  const task = { text: "text!", category: "category!" };
  render(<Task task={task} onDeleteTask={() => {}} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const taskText = screen.getByText("Buy rice");
  const deleteButton = taskText.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});

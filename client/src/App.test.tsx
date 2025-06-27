import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
  // Este test solo verifica que se renderice correctamente
  expect(screen.getByTestId("app")).toBeInTheDocument();
});

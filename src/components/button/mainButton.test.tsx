import { render, screen } from "@testing-library/react";
import MainButton from "./MainButton";

describe("Given a main button component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the given text", () => {
      const buttonText = "Click Me";

      render(
        <MainButton buttonText={buttonText} actionOnClick={() => "hello"} />
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});

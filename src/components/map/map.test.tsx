import { render, screen } from "@testing-library/react";
import Map from "./Map";

describe("Given a Map component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the given map", () => {
      render(<Map matchLocation={"Barcelona, 32"} />);

      const mapElement = screen.getByTestId("map-element");

      expect(mapElement).toBeInTheDocument();
    });
  });
});

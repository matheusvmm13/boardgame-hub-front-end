import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When it get's rendered receiving a given title", () => {
    test("Then it should render it", () => {
      const title = "My title";

      render(<Header title={title} />);

      const onPageTitle = screen.getByRole("heading", { name: title });

      expect(onPageTitle).toBeInTheDocument();
    });
  });
});

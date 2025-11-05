import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
    window.history.pushState({}, "Test page", route);
    return render(ui, { wrapper: BrowserRouter });
  };

  test("renders Navbar and Footer components", () => {
    renderWithRouter(<App />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("renders Home component on default route", () => {
    renderWithRouter(<App />, { route: "/" });

    expect(screen.getByTestId("home")).toBeInTheDocument();
  });

  test("renders correct components for different routes", () => {
    const routes = [
      { path: "/fondos", testId: "fondos" },
      { path: "/quienes-somos", testId: "somos" },
      { path: "/historia", testId: "history" },
      { path: "/marketing", testId: "marketing" },
      { path: "/seguros", testId: "seguros" },
      { path: "/turistico", testId: "turismo" },
      { path: "/constructora", testId: "constructora" },
      { path: "/juridicos", testId: "juridicos" },
      { path: "/innovacion", testId: "innovacion" },
      { path: "/observatorio", testId: "observatorio" },
      { path: "/transporte", testId: "transporte" },
    ];

    routes.forEach(({ path, testId }) => {
      const { unmount } = renderWithRouter(<App />, { route: path });
      expect(screen.getByTestId(testId)).toBeInTheDocument();
      unmount();
    });
  });

  test("has main element in the document", () => {
    renderWithRouter(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = renderWithRouter(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

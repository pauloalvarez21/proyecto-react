import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
    globalThis.history.pushState({}, "Test page", route);
    return render(ui, { wrapper: BrowserRouter });
  };

  test("renders Navbar and Footer components", () => {
    renderWithRouter(<App />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("renders Home component on default route", () => {
    renderWithRouter(<App />, { route: "/" });

    expect(screen.getByText("Galería de Videos")).toBeInTheDocument();
  });

  test("renders correct components for different routes", () => {
    const routes = [
      {
        path: "/fondos",
        test: () => {
          // Look for "Fondo de Asociados" in an h1 element specifically
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent("Fondo de Asociados");
        },
      },
      {
        path: "/quienes-somos",
        test: () => {
          expect(
            screen.getByText("Grupo Servitransporte S.A.S.")
          ).toBeInTheDocument();
        },
      },
      {
        path: "/historia",
        test: () => {
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent("Historia");
        },
      },
      {
        path: "/marketing",
        test: () => {
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent("Marketing y Publicidad");
        },
      },
      {
        path: "/seguros",
        test: () => {
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent("Corredor de Seguros");
        },
      },
      {
        path: "/turistico",
        test: () => {
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent("Operador Turístico");
        },
      },
      {
        path: "/constructora",
        test: () => {
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent("Constructora");
        },
      },
      {
        path: "/juridicos",
        test: () => {
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent("Servicios Jurídicos y Financieros");
        },
      },
      {
        path: "/innovacion",
        test: () => {
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent("Innovación y Tecnología");
        },
      },
      {
        path: "/observatorio",
        test: () => {
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent(
            /OBSERVATORIO DE SERVICIOS ESPECIALIZADOS TURÍSTICOS.*OSET/i
          );
        },
      },
      {
        path: "/transporte",
        test: () => {
          const heading = screen.getByRole("heading", { level: 1 });
          expect(heading).toHaveTextContent("Transporte");
        },
      },
    ];

    routes.forEach(({ path, test }) => {
      const { unmount } = renderWithRouter(<App />, { route: path });
      test();
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

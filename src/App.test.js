import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Mock de los componentes hijos
jest.mock('./components/Navbar', () => () => _jsx("div", { "data-testid": "navbar", children: "Navbar" }));
jest.mock('./components/Footer', () => () => _jsx("div", { "data-testid": "footer", children: "Footer" }));
jest.mock('./components/Home', () => () => _jsx("div", { "data-testid": "home", children: "Home" }));
jest.mock('./pages/fondo/FondoAsociados', () => () => _jsx("div", { "data-testid": "fondos", children: "Fondos" }));
jest.mock('./pages/somos/Somos', () => () => _jsx("div", { "data-testid": "somos", children: "Somos" }));
jest.mock('./pages/history/History', () => () => _jsx("div", { "data-testid": "history", children: "History" }));
jest.mock('./pages/marketing/Marketing', () => () => _jsx("div", { "data-testid": "marketing", children: "Marketing" }));
jest.mock('./pages/seguros/Seguros', () => () => _jsx("div", { "data-testid": "seguros", children: "Seguros" }));
jest.mock('./pages/turismo/Turismo', () => () => _jsx("div", { "data-testid": "turismo", children: "Turismo" }));
jest.mock('./pages/constructora/Constructora', () => () => _jsx("div", { "data-testid": "constructora", children: "Constructora" }));
jest.mock('./pages/juridicos/ServiciosJuridicos', () => () => _jsx("div", { "data-testid": "juridicos", children: "ServiciosJuridicos" }));
jest.mock('./pages/innovacion/InnovacionTecnologia', () => () => _jsx("div", { "data-testid": "innovacion", children: "InnovacionTecnologia" }));
jest.mock('./pages/observatorio/Observatorio', () => () => _jsx("div", { "data-testid": "observatorio", children: "Observatorio" }));
jest.mock('./pages/transporte/Transporte', () => () => _jsx("div", { "data-testid": "transporte", children: "Transporte" }));
describe('App Component', () => {
    const renderWithRouter = (ui, { route = '/' } = {}) => {
        window.history.pushState({}, 'Test page', route);
        return render(ui, { wrapper: BrowserRouter });
    };
    test('renders Navbar and Footer components', () => {
        renderWithRouter(_jsx(App, {}));
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
    test('renders Home component on default route', () => {
        renderWithRouter(_jsx(App, {}), { route: '/' });
        expect(screen.getByTestId('home')).toBeInTheDocument();
    });
    test('renders correct components for different routes', () => {
        const routes = [
            { path: '/fondos', testId: 'fondos' },
            { path: '/quienes-somos', testId: 'somos' },
            { path: '/historia', testId: 'history' },
            { path: '/marketing', testId: 'marketing' },
            { path: '/seguros', testId: 'seguros' },
            { path: '/turistico', testId: 'turismo' },
            { path: '/constructora', testId: 'constructora' },
            { path: '/juridicos', testId: 'juridicos' },
            { path: '/innovacion', testId: 'innovacion' },
            { path: '/observatorio', testId: 'observatorio' },
            { path: '/transporte', testId: 'transporte' }
        ];
        routes.forEach(({ path, testId }) => {
            const { unmount } = renderWithRouter(_jsx(App, {}), { route: path });
            expect(screen.getByTestId(testId)).toBeInTheDocument();
            unmount();
        });
    });
    test('has main element in the document', () => {
        renderWithRouter(_jsx(App, {}));
        expect(screen.getByRole('main')).toBeInTheDocument();
    });
    test('matches snapshot', () => {
        const { asFragment } = renderWithRouter(_jsx(App, {}));
        expect(asFragment()).toMatchSnapshot();
    });
});

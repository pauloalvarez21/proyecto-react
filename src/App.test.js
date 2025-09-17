import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
// Mocks básicos para los componentes
jest.mock('./components/Navbar', () => () => _jsx("nav", { "data-testid": "navbar", children: "Navbar" }));
jest.mock('./components/Footer', () => () => _jsx("footer", { "data-testid": "footer", children: "Footer" }));
jest.mock('./components/Presentation', () => () => _jsx("section", { "data-testid": "presentation", children: "Presentation" }));
jest.mock('./components/Pillars', () => () => _jsx("section", { "data-testid": "pillars", children: "Pillars" }));
jest.mock('./components/Alliances', () => () => _jsx("section", { "data-testid": "alliances", children: "Alliances" }));
jest.mock('./pages/fondo/FondoAsociados', () => () => _jsx("div", { "data-testid": "fondos", children: "Fondos" }));
jest.mock('./pages/somos/Somos', () => () => _jsx("div", { "data-testid": "somos", children: "Somos" }));
jest.mock('./pages/history/History', () => () => _jsx("div", { "data-testid": "history", children: "History" }));
jest.mock('./pages/marketing/Marketing', () => () => _jsx("div", { "data-testid": "marketing", children: "Marketing" }));
jest.mock('./pages/seguros/Seguros', () => () => _jsx("div", { "data-testid": "seguros", children: "Seguros" }));
jest.mock('./pages/turismo/Turismo', () => () => _jsx("div", { "data-testid": "turismo", children: "Turismo" }));
jest.mock('./pages/constructora/Constructora', () => () => _jsx("div", { "data-testid": "constructora", children: "Constructora" }));
jest.mock('./pages/juridicos/ServiciosJuridicos', () => () => _jsx("div", { "data-testid": "juridicos", children: "ServiciosJuridicos" }));
jest.mock('./pages/innovacion/InnovacionTecnologia', () => () => _jsx("div", { "data-testid": "innovacion", children: "InnovacionTecnologia" }));
describe('App Component', () => {
    const renderApp = (initialRoute = '/') => {
        return render(_jsx(MemoryRouter, { initialEntries: [initialRoute], children: _jsx(App, {}) }));
    };
    it('debería renderizar Navbar y Footer en todas las rutas', () => {
        renderApp();
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
    it('debería renderizar componentes principales en la ruta raíz "/"', () => {
        renderApp('/');
        expect(screen.getByTestId('presentation')).toBeInTheDocument();
        expect(screen.getByTestId('pillars')).toBeInTheDocument();
        expect(screen.getByTestId('alliances')).toBeInTheDocument();
    });
    it('debería renderizar Fondos en la ruta "/fondos"', () => {
        renderApp('/fondos');
        expect(screen.getByTestId('fondos')).toBeInTheDocument();
    });
    it('debería renderizar Somos en la ruta "/quienes-somos"', () => {
        renderApp('/quienes-somos');
        expect(screen.getByTestId('somos')).toBeInTheDocument();
    });
    it('debería renderizar History en la ruta "/historia"', () => {
        renderApp('/historia');
        expect(screen.getByTestId('history')).toBeInTheDocument();
    });
    it('debería renderizar Marketing en la ruta "/marketing"', () => {
        renderApp('/marketing');
        expect(screen.getByTestId('marketing')).toBeInTheDocument();
    });
    it('debería renderizar Seguros en la ruta "/seguros"', () => {
        renderApp('/seguros');
        expect(screen.getByTestId('seguros')).toBeInTheDocument();
    });
    it('debería renderizar Turismo en la ruta "/turistico"', () => {
        renderApp('/turistico');
        expect(screen.getByTestId('turismo')).toBeInTheDocument();
    });
    it('debería renderizar Constructora en la ruta "/constructora"', () => {
        renderApp('/constructora');
        expect(screen.getByTestId('constructora')).toBeInTheDocument();
    });
    it('debería renderizar ServiciosJuridicos en la ruta "/juridicos"', () => {
        renderApp('/juridicos');
        expect(screen.getByTestId('juridicos')).toBeInTheDocument();
    });
    it('debería renderizar InnovacionTecnologia en la ruta "/innovacion"', () => {
        renderApp('/innovacion');
        expect(screen.getByTestId('innovacion')).toBeInTheDocument();
    });
    it('debería tener un elemento main para el contenido', () => {
        renderApp();
        expect(screen.getByRole('main')).toBeInTheDocument();
    });
    it('debería no renderizar componentes de la página principal en otras rutas', () => {
        renderApp('/fondos');
        expect(screen.queryByTestId('presentation')).not.toBeInTheDocument();
        expect(screen.queryByTestId('pillars')).not.toBeInTheDocument();
        expect(screen.queryByTestId('alliances')).not.toBeInTheDocument();
    });
});

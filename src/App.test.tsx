import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock de los componentes hijos
jest.mock('./components/Navbar', () => () => <div data-testid="navbar">Navbar</div>);
jest.mock('./components/Footer', () => () => <div data-testid="footer">Footer</div>);
jest.mock('./components/Home', () => () => <div data-testid="home">Home</div>);

jest.mock('./pages/fondo/FondoAsociados', () => () => <div data-testid="fondos">Fondos</div>);
jest.mock('./pages/somos/Somos', () => () => <div data-testid="somos">Somos</div>);
jest.mock('./pages/history/History', () => () => <div data-testid="history">History</div>);
jest.mock('./pages/marketing/Marketing', () => () => <div data-testid="marketing">Marketing</div>);
jest.mock('./pages/seguros/Seguros', () => () => <div data-testid="seguros">Seguros</div>);
jest.mock('./pages/turismo/Turismo', () => () => <div data-testid="turismo">Turismo</div>);
jest.mock('./pages/constructora/Constructora', () => () => <div data-testid="constructora">Constructora</div>);
jest.mock('./pages/juridicos/ServiciosJuridicos', () => () => <div data-testid="juridicos">ServiciosJuridicos</div>);
jest.mock('./pages/innovacion/InnovacionTecnologia', () => () => <div data-testid="innovacion">InnovacionTecnologia</div>);
jest.mock('./pages/observatorio/Observatorio', () => () => <div data-testid="observatorio">Observatorio</div>);
jest.mock('./pages/transporte/Transporte', () => () => <div data-testid="transporte">Transporte</div>);

describe('App Component', () => {
  const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(ui, { wrapper: BrowserRouter });
  };

  test('renders Navbar and Footer components', () => {
    renderWithRouter(<App />);
    
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('renders Home component on default route', () => {
    renderWithRouter(<App />, { route: '/' });
    
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
      const { unmount } = renderWithRouter(<App />, { route: path });
      expect(screen.getByTestId(testId)).toBeInTheDocument();
      unmount();
    });
  });

  test('has main element in the document', () => {
    renderWithRouter(<App />);
    
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = renderWithRouter(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
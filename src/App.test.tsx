import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mocks básicos para los componentes
jest.mock('./components/Navbar', () => () => <nav data-testid="navbar">Navbar</nav>);
jest.mock('./components/Footer', () => () => <footer data-testid="footer">Footer</footer>);
jest.mock('./components/Presentation', () => () => <section data-testid="presentation">Presentation</section>);
jest.mock('./components/Pillars', () => () => <section data-testid="pillars">Pillars</section>);
jest.mock('./components/Alliances', () => () => <section data-testid="alliances">Alliances</section>);
jest.mock('./pages/fondo/FondoAsociados', () => () => <div data-testid="fondos">Fondos</div>);
jest.mock('./pages/somos/Somos', () => () => <div data-testid="somos">Somos</div>);
jest.mock('./pages/history/History', () => () => <div data-testid="history">History</div>);
jest.mock('./pages/marketing/Marketing', () => () => <div data-testid="marketing">Marketing</div>);
jest.mock('./pages/seguros/Seguros', () => () => <div data-testid="seguros">Seguros</div>);
jest.mock('./pages/turismo/Turismo', () => () => <div data-testid="turismo">Turismo</div>);
jest.mock('./pages/constructora/Constructora', () => () => <div data-testid="constructora">Constructora</div>);
jest.mock('./pages/juridicos/ServiciosJuridicos', () => () => <div data-testid="juridicos">ServiciosJuridicos</div>);
jest.mock('./pages/innovacion/InnovacionTecnologia', () => () => <div data-testid="innovacion">InnovacionTecnologia</div>);

describe('App Component', () => {
  const renderApp = (initialRoute = '/') => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
      </MemoryRouter>
    );
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
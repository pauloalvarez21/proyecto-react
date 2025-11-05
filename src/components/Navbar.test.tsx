import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Mocks para CSS e imágenes
jest.mock('./Navbar.css', () => ({}));
jest.mock('../assets/image/grupo.png', () => 'grupo-mock-url');
jest.mock('../assets/image/sumyt.png', () => 'sumyt-mock-url');

// Mock mejorado de react-router-dom para NavLink
 jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  NavLink: ({ to, children, onClick, className }: never) => (
    <a href={to} onClick={onClick} className={className}>
      {children}
    </a>
  ),
}));

describe('Navbar Component', () => {
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(ui, { wrapper: BrowserRouter });
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar los logos correctamente', () => {
    renderWithRouter(<Navbar />);
    
    const grupoLogo = screen.getByAltText('Grupo Servitransporte');
    const sumytLogo = screen.getByAltText('SUMYT');
    
    expect(grupoLogo).toBeInTheDocument();
    expect(grupoLogo).toHaveAttribute('src', 'grupo-mock-url');
    expect(sumytLogo).toBeInTheDocument();
    expect(sumytLogo).toHaveAttribute('src', 'sumyt-mock-url');
  });

  it('debería renderizar el botón hamburguesa', () => {
    renderWithRouter(<Navbar />);
    
    const hamburgerButton = screen.getByRole('button', { name: /menu/i });
    expect(hamburgerButton).toBeInTheDocument();
    expect(hamburgerButton).toHaveClass('hamburger');
  });

  it('debería tener el menú cerrado inicialmente', () => {
    renderWithRouter(<Navbar />);
    
    const menu = screen.getByRole('list');
    expect(menu).not.toHaveClass('open');
    
    const hamburgerButton = screen.getByRole('button', { name: /menu/i });
    expect(hamburgerButton).not.toHaveClass('open');
  });

  it('debería abrir y cerrar el menú al hacer clic en el botón hamburguesa', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Navbar />);
    
    const hamburgerButton = screen.getByRole('button', { name: /menu/i });
    const menu = screen.getByRole('list');
    
    // Abrir menú
    await user.click(hamburgerButton);
    expect(menu).toHaveClass('open');
    expect(hamburgerButton).toHaveClass('open');
    
    // Cerrar menú
    await user.click(hamburgerButton);
    expect(menu).not.toHaveClass('open');
    expect(hamburgerButton).not.toHaveClass('open');
  });

  it('debería renderizar todos los items del menú', () => {
    renderWithRouter(<Navbar />);
    
    const menuItems = screen.getAllByRole('listitem');
    expect(menuItems).toHaveLength(11); // 11 items en el array menu
    
    // Verificar algunos items específicos
    expect(screen.getByText('Quiénes somos')).toBeInTheDocument();
    expect(screen.getByText('Historia')).toBeInTheDocument();
    expect(screen.getByText('Transporte')).toBeInTheDocument();
    expect(screen.getByText('Fondo de Asociados')).toBeInTheDocument();
    expect(screen.getByText('Corredor de Seguros')).toBeInTheDocument();
    expect(screen.getByText('Operador Turístico')).toBeInTheDocument();
    expect(screen.getByText('Constructora')).toBeInTheDocument();
    expect(screen.getByText('Marketing y Publicidad')).toBeInTheDocument();
    expect(screen.getByText('Jurídicos y Financieros')).toBeInTheDocument();
    expect(screen.getByText('Innovación y Tecnología')).toBeInTheDocument();
    expect(screen.getByText('Observatorio "OSET"')).toBeInTheDocument();
  });

  it('debería cerrar el menú al hacer clic en un enlace', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Navbar />);
    
    // Abrir menú primero
    const hamburgerButton = screen.getByRole('button', { name: /menu/i });
    await user.click(hamburgerButton);
    expect(screen.getByRole('list')).toHaveClass('open');
    
    // Hacer clic en un enlace del menú
    await user.click(screen.getByText('Quiénes somos'));
    
    // Verificar que el menú se cierra
    expect(screen.getByRole('list')).not.toHaveClass('open');
  });

  it('debería tener enlaces con las rutas correctas', () => {
    renderWithRouter(<Navbar />);
    
    // Buscar enlaces específicos en lugar de todos
    expect(screen.getByAltText('Grupo Servitransporte').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByAltText('SUMYT').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Quiénes somos')).toHaveAttribute('href', '/quienes-somos');
    expect(screen.getByText('Historia')).toHaveAttribute('href', '/historia');
    expect(screen.getByText('Transporte')).toHaveAttribute('href', '/transporte');
  });

  it('debería tener la estructura correcta con navbar-top y navbar-links', () => {
    const { container } = renderWithRouter(<Navbar />);
    
    const navbarTop = container.querySelector('.navbar-top');
    const navbarLinks = container.querySelector('.navbar-links');
    
    expect(navbarTop).toBeInTheDocument();
    expect(navbarLinks).toBeInTheDocument();
  });

  it('debería tener los logos en las posiciones correctas (left y right)', () => {
    const { container } = renderWithRouter(<Navbar />);
    
    const navbarLeft = container.querySelector('.navbar-left');
    const navbarLogoRight = container.querySelector('.navbar-logo-right');
    
    expect(navbarLeft).toBeInTheDocument();
    expect(navbarLogoRight).toBeInTheDocument();
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = renderWithRouter(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
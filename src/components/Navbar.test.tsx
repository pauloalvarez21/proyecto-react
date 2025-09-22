import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Mocks para CSS e imágenes
jest.mock('./Navbar.css', () => ({}));
jest.mock('../assets/image/grupo.png', () => 'grupo-mock-url');
jest.mock('../assets/image/sumyt.png', () => 'sumyt-mock-url');

// Mock de react-router-dom para NavLink
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  NavLink: ({ to, children, onClick, className }: any) => (
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
    
    const hamburgerButton = screen.getByLabelText('menu');
    expect(hamburgerButton).toBeInTheDocument();
    expect(hamburgerButton).toHaveClass('hamburger');
  });

  it('debería tener el menú cerrado inicialmente', () => {
    renderWithRouter(<Navbar />);
    
    const menu = screen.getByRole('list');
    expect(menu).not.toHaveClass('open');
  });

  it('debería abrir y cerrar el menú al hacer clic en el botón hamburguesa', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Navbar />);
    
    const hamburgerButton = screen.getByLabelText('menu');
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
    expect(screen.getByText('Observatorio')).toBeInTheDocument();
  });

  it('debería cerrar el menú al hacer clic en un enlace', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Navbar />);
    
    // Abrir menú primero
    await user.click(screen.getByLabelText('menu'));
    expect(screen.getByRole('list')).toHaveClass('open');
    
    // Hacer clic en un enlace del menú
    await user.click(screen.getByText('Quiénes somos'));
    
    // Verificar que el menú se cierra
    expect(screen.getByRole('list')).not.toHaveClass('open');
  });

  it('debería tener enlaces con las rutas correctas', () => {
    renderWithRouter(<Navbar />);
    
    const links = screen.getAllByRole('link');
    
    // Verificar algunas rutas importantes
    expect(links[0]).toHaveAttribute('href', '/'); // Logo grupo
    expect(links[1]).toHaveAttribute('href', '/'); // Logo sumyt
    expect(links[2]).toHaveAttribute('href', '/quienes-somos');
    expect(links[3]).toHaveAttribute('href', '/historia');
    expect(links[4]).toHaveAttribute('href', '/transporte');
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
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Mock de CSS
jest.mock('./Navbar.css', () => ({}), { virtual: true });

// Mock mejorado de react-router-dom para NavLink
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  NavLink: ({ to, children, onClick, className }: any) => {
    const computedClassName = typeof className === 'function' ? className({ isActive: false }) : className;
    return (
      <a 
        href={to} 
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClick) onClick(e);
        }} 
        className={computedClassName}
      >
        {children}
      </a>
    );
  },
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
    expect(grupoLogo).toHaveAttribute('src', 'test-file-stub');
    expect(sumytLogo).toBeInTheDocument();
    expect(sumytLogo).toHaveAttribute('src', 'test-file-stub');
  });

  it('debería renderizar el botón hamburguesa', () => {
    renderWithRouter(<Navbar />);
    
    const hamburgerButton = screen.getByRole('button', { name: /menu/i });
    expect(hamburgerButton).toBeInTheDocument();
    expect(hamburgerButton).toHaveClass('hamburger');
  });

  it('debería tener el menú cerrado inicialmente', () => {
    const { container } = renderWithRouter(<Navbar />);
    
    const menu = container.querySelector('.navbar-links');
    expect(menu).not.toHaveClass('open');
    
    const hamburgerButton = screen.getByRole('button', { name: /menu/i });
    expect(hamburgerButton).not.toHaveClass('open');
  });

  it('debería abrir y cerrar el menú al hacer clic en el botón hamburguesa', async () => {
    const user = userEvent.setup();
    const { container } = renderWithRouter(<Navbar />);
    
    const menu = container.querySelector('.navbar-mobile');
    const hamburgerButton = screen.getByRole('button', { name: /menu/i });
    
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
    expect(menuItems).toHaveLength(22); // 11 items in desktop menu + 11 items in mobile menu
    
    // Verificar algunos items específicos (usando regex para ignorar mayúsculas/minúsculas y coincidencias parciales si es necesario)
    expect(screen.getAllByText(/Quiénes Somos/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Historia/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Transporte/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Fondo/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Seguros/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Turismo/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Constructora/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Marketing y Publicidad/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Jurídicos/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Innovación/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Observatorio/i)[0]).toBeInTheDocument();
  });

  it('debería cerrar el menú al hacer clic en un enlace', async () => {
    const user = userEvent.setup();
    const { container } = renderWithRouter(<Navbar />);
    
    // Abrir menú primero
    const hamburgerButton = screen.getByRole('button', { name: /menu/i });
    const menu = container.querySelector('.navbar-mobile');
    await user.click(hamburgerButton);
    expect(menu).toHaveClass('open');
    
    // Hacer clic en un enlace del menú
    await user.click(screen.getAllByText(/Quiénes Somos/i)[0]);
    
    // Verificar que el menú se cierra
    expect(container.querySelector('.navbar-mobile')).not.toHaveClass('open');
  });

  it('debería tener enlaces con las rutas correctas', () => {
    renderWithRouter(<Navbar />);
    
    // Buscar enlaces específicos en lugar de todos
    expect(screen.getByAltText('Grupo Servitransporte').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByAltText('SUMYT').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getAllByText(/Quiénes Somos/i)[0]).toHaveAttribute('href', '/quienes-somos');
    expect(screen.getAllByText(/Historia/i)[0]).toHaveAttribute('href', '/historia');
    expect(screen.getAllByText(/Transporte/i)[0]).toHaveAttribute('href', '/transporte');
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

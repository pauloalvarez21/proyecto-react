import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Mocks para CSS e imágenes
jest.mock('./Navbar.css', () => ({}));
jest.mock('../assets/image/grupo.png', () => 'grupo-mock-url');
jest.mock('../assets/image/sumyt.png', () => 'sumyt-mock-url');

// Mock mejorado para react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  NavLink: ({
    to,
    children,
    onClick,
    className,
  }: React.PropsWithChildren<{
    to: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    className?: string | ((props: unknown) => string);
  }>) => {
    // Si className es una función, la convertimos a string vacío
    const classNameString = typeof className === 'function' ? '' : className || '';
    return (
      <a href={to} onClick={onClick} className={classNameString}>
        {children}
      </a>
    );
  }
}));

describe('Navbar Component', () => {
  const renderNavbar = () => {
    return render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar los logos principales', () => {
    renderNavbar();
    
    expect(screen.getByAltText('Grupo Servitransporte')).toBeInTheDocument();
    expect(screen.getByAltText('SUMYT')).toBeInTheDocument();
  });

  it('debería renderizar los enlaces extra "Quiénes somos" e "Historia"', () => {
    renderNavbar();
    
    expect(screen.getByText('Quiénes somos')).toBeInTheDocument();
    expect(screen.getByText('Historia')).toBeInTheDocument();
  });

  it('debería abrir y cerrar el menú al hacer clic en el botón hamburguesa', () => {
    renderNavbar();
    
    const hamburgerButton = screen.getByLabelText('menu');
    const navLinks = screen.getByRole('list');
    
    // Menú inicialmente cerrado
    expect(navLinks).not.toHaveClass('open');
    
    // Abrir menú
    fireEvent.click(hamburgerButton);
    expect(navLinks).toHaveClass('open');
  });

  it('debería renderizar todos los elementos del menú', () => {
    renderNavbar();
    
    const menuItems = [
      'Transporte', 'Fondos de Asociados', 'Corredor de Seguros', 
      'Operador Turístico', 'Constructora', 'Marketing y Publicidad',
      'Jurídicos y Financieros', 'Innovación y Tecnología', 'Observatorio'
    ];
    
    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('debería tener un enlace de descarga para "Observatorio"', () => {
    renderNavbar();
    
    const observatorioLink = screen.getByText('Observatorio');
    expect(observatorioLink).toHaveAttribute('download', 'Cartas_Intencion_OSET.docx');
  });
});
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FondoAsociados from './FondoAsociados';

// Mocks para CSS e imágenes
jest.mock('./FondoAsociados.css', () => ({}));

describe('FondoAsociados Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el logo SUMYT en la sección izquierda', () => {
    render(<FondoAsociados />);
    
    const sumytLogo = screen.getByAltText('Logo SUMYT');
    expect(sumytLogo).toBeInTheDocument();
    expect(sumytLogo).toHaveAttribute('src', 'test-file-stub');
    expect(sumytLogo).toHaveClass('fondo-left__logo');
  });

  it('debería renderizar todas las imágenes de fondo', () => {
    render(<FondoAsociados />);
    
    const fondoImages = screen.getAllByAltText('Fondo');
    expect(fondoImages).toHaveLength(3);
    
    expect(fondoImages[0]).toHaveAttribute('src', 'test-file-stub');
    expect(fondoImages[1]).toHaveAttribute('src', 'test-file-stub');
    expect(fondoImages[2]).toHaveAttribute('src', 'test-file-stub');
    expect(fondoImages[0]).toHaveClass('fondo-img');
  });

  it('debería renderizar el logo del grupo en el footer', () => {
    render(<FondoAsociados />);
    
    const grupoLogo = screen.getByAltText('Grupo Servitransporte');
    expect(grupoLogo).toBeInTheDocument();
    expect(grupoLogo).toHaveAttribute('src', 'test-file-stub');
    expect(grupoLogo).toHaveClass('fondo-logo');
  });

  it('debería renderizar la lista de segmentos clave', () => {
    render(<FondoAsociados />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
    
    expect(screen.getByText('Sector Transporte:')).toBeInTheDocument();
    expect(screen.getByText('transporte especial, taxis, vehículos de lujo y transporte alternativo.')).toBeInTheDocument();
    
    expect(screen.getByText('Sector Turismo:')).toBeInTheDocument();
    expect(screen.getByText('hoteles, restaurantes, guías, agencias de viajes y operadores turísticos.')).toBeInTheDocument();
    
    expect(screen.getByText('Sector Carga:')).toBeInTheDocument();
    expect(screen.getByText('interconexión entre pequeños transportadores y usuarios de servicio de carga; servicio de courier para estudiantes.')).toBeInTheDocument();
    
    expect(screen.getByText('Empresas del Holding:')).toBeInTheDocument();
    expect(screen.getByText('empresas que forman parte del grupo.')).toBeInTheDocument();
  });

  it('debería mencionar SUMYT múltiples veces en el texto', () => {
    render(<FondoAsociados />);
    
    const sumytElements = screen.getAllByText('SUMYT');
    expect(sumytElements.length).toBeGreaterThan(1);
    
    // Verificar que al menos uno tiene la clase texto-rojo
    const sumytWithClass = sumytElements.find(element => 
      element.classList.contains('texto-rojo')
    );
    expect(sumytWithClass).toBeInTheDocument();
  });

  it('debería tener texto en negrita para los títulos de sectores', () => {
    render(<FondoAsociados />);
    
    const strongElements = document.querySelectorAll('strong');
    expect(strongElements.length).toBeGreaterThan(4);
    
    // Verificar algunos textos específicos en negrita
    expect(screen.getByText('Sector Transporte:')).toContainHTML('strong');
    expect(screen.getByText('Sector Turismo:')).toContainHTML('strong');
    expect(screen.getByText('Sector Carga:')).toContainHTML('strong');
    expect(screen.getByText('Empresas del Holding:')).toContainHTML('strong');
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<FondoAsociados />);
    
    expect(container.querySelector('.fondo-page')).toBeInTheDocument();
    expect(container.querySelector('.fondo-left')).toBeInTheDocument();
    expect(container.querySelector('.fondo-right')).toBeInTheDocument();
    expect(container.querySelector('.imagenes-fondo')).toBeInTheDocument();
    expect(container.querySelector('.fondo-section')).toBeInTheDocument();
    expect(container.querySelector('.fondo-footer')).toBeInTheDocument();
    expect(container.querySelectorAll('.fondo-img')).toHaveLength(3);
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<FondoAsociados />);
    expect(container).toMatchSnapshot();
  });

  it('debería tener la estructura semántica correcta', () => {
    const { container } = render(<FondoAsociados />);
    
    expect(container.querySelector('aside')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelectorAll('section')).toHaveLength(2);
    expect(container.querySelector('ul')).toBeInTheDocument();
  });
});
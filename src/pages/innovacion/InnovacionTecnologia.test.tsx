import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InnovacionTecnologia from './InnovacionTecnologia';

// Mocks para CSS e imágenes
jest.mock('./InnovacionTecnologia.css', () => ({}));

describe('InnovacionTecnologia Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal', () => {
    render(<InnovacionTecnologia />);
    expect(screen.getByText('Innovación y Tecnología')).toBeInTheDocument();
  });

  it('debería renderizar el subtítulo', () => {
    render(<InnovacionTecnologia />);
    expect(screen.getByText('Servitrasporte S.A.S')).toBeInTheDocument();
  });

  it('debería renderizar la imagen de innovación', () => {
    render(<InnovacionTecnologia />);
    
    const innovacionImage = screen.getByAltText('Innovación');
    expect(innovacionImage).toBeInTheDocument();
    expect(innovacionImage).toHaveAttribute('src', 'test-file-stub');
    expect(innovacionImage).toHaveClass('innovacion-img');
  });

  it('debería renderizar el logo del grupo', () => {
    render(<InnovacionTecnologia />);
    
    const logo = screen.getByAltText('Logo Derecho');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'test-file-stub');
    expect(logo).toHaveClass('innovacion-logo');
  });

  it('debería mencionar SUMYT en el texto', () => {
    render(<InnovacionTecnologia />);
    
    const sumytElements = screen.getAllByText('SUMYT');
    expect(sumytElements.length).toBeGreaterThan(0);
    
    // Verificar que SUMYT tiene la clase texto-rojo
    const sumytWithClass = sumytElements.find(element => 
      element.classList.contains('texto-rojo')
    );
    expect(sumytWithClass).toBeInTheDocument();
  });

  it('debería resaltar el porcentaje de desarrollo', () => {
    render(<InnovacionTecnologia />);
    
    const desarrolloText = screen.getByText('60% de desarrollo');
    expect(desarrolloText).toBeInTheDocument();
    expect(desarrolloText).toContainHTML('strong');
  });

  it('debería tener texto en negrita para énfasis', () => {
    render(<InnovacionTecnologia />);
    
    const strongElements = document.querySelectorAll('strong');
    expect(strongElements.length).toBeGreaterThan(5);
    
    // Verificar algunos textos específicos en negrita
    expect(screen.getByText('60% de desarrollo')).toContainHTML('strong');
    expect(screen.getByText('transporte, turismo y mensajería')).toContainHTML('strong');
    expect(screen.getByText('Movilidad y Conectividad Inteligente:')).toContainHTML('strong');
    expect(screen.getByText('Integración de Servicios Complementarios:')).toContainHTML('strong');
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<InnovacionTecnologia />);
    
    expect(container.querySelector('.innovacion-page')).toBeInTheDocument();
    expect(container.querySelector('.innovacion-left')).toBeInTheDocument();
    expect(container.querySelector('.innovacion-right')).toBeInTheDocument();
    expect(container.querySelector('.imagenes-innovacion')).toBeInTheDocument();
    expect(container.querySelector('.section')).toBeInTheDocument();
    expect(container.querySelector('.innovacion-img')).toBeInTheDocument();
    expect(container.querySelector('.innovacion-logo')).toBeInTheDocument();
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<InnovacionTecnologia />);
    expect(container).toMatchSnapshot();
  });

  it('debería tener la estructura de dos columnas', () => {
    const { container } = render(<InnovacionTecnologia />);
    
    const leftColumn = container.querySelector('.innovacion-left');
    const rightColumn = container.querySelector('.innovacion-right');
    
    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();
    
    // Verificar que la columna izquierda tiene los títulos
    expect(leftColumn).toHaveTextContent('Innovación y Tecnología');
    expect(leftColumn).toHaveTextContent('Servitrasporte S.A.S');
    
    // Verificar que la columna derecha tiene el contenido principal
    expect(rightColumn).toHaveTextContent('SUMYT');
    expect(rightColumn).toHaveTextContent('60% de desarrollo');
  });
});
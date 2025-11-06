import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Turismo from './Turismo';

// Mocks para CSS e imágenes
jest.mock('./Turismo.css', () => ({}));

describe('Turismo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el subtítulo', () => {
    render(<Turismo />);
    expect(screen.getByText('Servitrasporte S.A.S')).toBeInTheDocument();
  });

  it('debería renderizar todas las imágenes de turismo', () => {
    render(<Turismo />);
    
    const turismoImages = screen.getAllByAltText('Turismo');
    expect(turismoImages).toHaveLength(3);
    
    expect(turismoImages[0]).toHaveAttribute('src', 'test-file-stub');
    expect(turismoImages[1]).toHaveAttribute('src', 'test-file-stub');
    expect(turismoImages[2]).toHaveAttribute('src', 'test-file-stub');
    expect(turismoImages[0]).toHaveClass('turismo-img');
  });

  it('debería renderizar el logo del grupo', () => {
    render(<Turismo />);
    
    const logo = screen.getByAltText('Logo Derecho');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'test-file-stub');
    expect(logo).toHaveClass('turismo-logo');
  });

  it('debería mencionar SUMYT en el texto', () => {
    render(<Turismo />);
    
    const sumytElements = screen.getAllByText('SUMYT');
    expect(sumytElements.length).toBeGreaterThan(0);
    
    // Verificar que SUMYT tiene la clase texto-rojo
    const sumytWithClass = sumytElements.find(element => 
      element.classList.contains('texto-rojo')
    );
    expect(sumytWithClass).toBeInTheDocument();
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<Turismo />);
    
    expect(container.querySelector('.turismo-page')).toBeInTheDocument();
    expect(container.querySelector('.turismo-left')).toBeInTheDocument();
    expect(container.querySelector('.turismo-right')).toBeInTheDocument();
    expect(container.querySelector('.imagenes-turismo')).toBeInTheDocument();
    expect(container.querySelector('.section')).toBeInTheDocument();
    expect(container.querySelectorAll('.turismo-img')).toHaveLength(3);
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<Turismo />);
    expect(container).toMatchSnapshot();
  });

  it('debería tener la estructura de dos columnas', () => {
    const { container } = render(<Turismo />);
    
    const leftColumn = container.querySelector('.turismo-left');
    const rightColumn = container.querySelector('.turismo-right');
    
    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();
    
    // Verificar que la columna izquierda tiene los títulos
    expect(leftColumn).toHaveTextContent('Operador Turístico');
    expect(leftColumn).toHaveTextContent('Servitrasporte S.A.S');
    
    // Verificar que la columna derecha tiene el contenido principal
    expect(rightColumn).toHaveTextContent('SUMYT');
    expect(rightColumn).toHaveTextContent('INHOTELCOL');
    expect(rightColumn).toHaveTextContent('onboarding digital');
  });
});
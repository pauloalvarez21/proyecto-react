import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Seguros from './Seguros';

// Mocks para CSS e imágenes
jest.mock('./Seguros.css', () => ({}));

describe('Seguros Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal', () => {
    render(<Seguros />);
    expect(screen.getByText('Corredor de Seguros')).toBeInTheDocument();
  });

  it('debería renderizar todas las imágenes de seguros', () => {
    render(<Seguros />);
    
    const segurosImages = screen.getAllByAltText('Seguro');
    expect(segurosImages).toHaveLength(3);
    
    expect(segurosImages[0]).toHaveAttribute('src', 'test-file-stub');
    expect(segurosImages[1]).toHaveAttribute('src', 'test-file-stub');
    expect(segurosImages[2]).toHaveAttribute('src', 'test-file-stub');
    expect(segurosImages[0]).toHaveClass('seguros-img');
  });

  it('debería renderizar el logo del grupo', () => {
    render(<Seguros />);
    
    const logo = screen.getByAltText('Logo Derecho');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'test-file-stub');
    expect(logo).toHaveClass('seguros-logo');
  });

  it('debería mencionar Seguros del Estado', () => {
    render(<Seguros />);
    
    expect(screen.getByText('Seguros del Estado')).toBeInTheDocument();
    expect(screen.getByText('Seguros del Estado')).toContainHTML('strong');
  });

  it('debería mencionar Servitrasporte Ltda y Servitrasporte S.A.S', () => {
    render(<Seguros />);
    expect(screen.getByText('Servitrasporte S.A.S')).toBeInTheDocument();
    expect(screen.getByText('Servitrasporte S.A.S')).toContainHTML('strong');
  });

  it('debería mencionar los sectores atendidos', () => {
    render(<Seguros />);
    
    expect(screen.getByText(/turismo y el transporte/)).toBeInTheDocument();
  });

  it('debería mostrar la proyección de clientes', () => {
    render(<Seguros />);
    
    expect(screen.getByText('60,000 operadores')).toBeInTheDocument();
    expect(screen.getByText('60,000 operadores')).toContainHTML('strong');
  });

  it('debería mencionar SUMYT en el texto', () => {
    render(<Seguros />);
    
    const sumytElements = screen.getAllByText('SUMYT');
    expect(sumytElements.length).toBeGreaterThan(0);
    
    // Verificar que SUMYT tiene la clase texto-rojo
    const sumytWithClass = sumytElements.find(element => 
      element.classList.contains('texto-rojo')
    );
    expect(sumytWithClass).toBeInTheDocument();
  });

  it('debería tener texto en negrita para énfasis', () => {
    render(<Seguros />);
    
    const strongElements = document.querySelectorAll('strong');
    expect(strongElements.length).toBeGreaterThan(5);
    
    // Verificar algunos textos específicos en negrita
    expect(screen.getByText('Seguros del Estado')).toContainHTML('strong');
    expect(screen.getByText('Servitrasporte S.A.S')).toContainHTML('strong');
    expect(screen.getByText('60,000 operadores')).toContainHTML('strong');
    expect(screen.getByText('Desarrollo y Requisitos en Tecnología')).toContainHTML('strong');
    expect(screen.getByText('onboarding')).toContainHTML('strong');
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<Seguros />);
    
    expect(container.querySelector('.seguros-page')).toBeInTheDocument();
    expect(container.querySelector('.seguros-left')).toBeInTheDocument();
    expect(container.querySelector('.seguros-right')).toBeInTheDocument();
    expect(container.querySelector('.imagenes-seguros')).toBeInTheDocument();
    expect(container.querySelector('.section')).toBeInTheDocument();
    expect(container.querySelectorAll('.seguros-img')).toHaveLength(3);
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<Seguros />);
    expect(container).toMatchSnapshot();
  });

  it('debería tener la estructura de dos columnas', () => {
    const { container } = render(<Seguros />);
    
    const leftColumn = container.querySelector('.seguros-left');
    const rightColumn = container.querySelector('.seguros-right');
    
    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();
    
    // Verificar que la columna izquierda tiene los títulos
    expect(leftColumn).toHaveTextContent('Corredor de Seguros');
    expect(leftColumn).toHaveTextContent('Servitrasporte Ltda');
    
    // Verificar que la columna derecha tiene el contenido principal
    expect(rightColumn).toHaveTextContent('Seguros del Estado');
    expect(rightColumn).toHaveTextContent('SUMYT');
    expect(rightColumn).toHaveTextContent('onboarding');
  });
});
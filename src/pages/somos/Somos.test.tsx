import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Somos from './Somos';

// Mocks para CSS e imágenes
jest.mock('./Somos.css', () => ({}));

describe('Somos Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el logo del grupo', () => {
    render(<Somos />);
    
    const logo = screen.getByAltText('Grupo Servitransporte');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'test-file-stub');
    expect(logo).toHaveClass('logo');
  });

  it('debería renderizar la imagen hexagonal del equipo', () => {
    render(<Somos />);
    
    const hexaImage = screen.getByAltText('Equipo de trabajo');
    expect(hexaImage).toBeInTheDocument();
    expect(hexaImage).toHaveAttribute('src', 'test-file-stub');
  });

  it('debería mencionar el nombre completo de la empresa', () => {
    render(<Somos />);
    
    expect(screen.getByText('Grupo Servitransporte S.A.S.')).toBeInTheDocument();
    expect(screen.getByText('Grupo Servitransporte S.A.S.')).toContainHTML('strong');
  });

  it('debería mencionar los modelos de negocio B2B y B2C', () => {
    render(<Somos />);
    
    expect(screen.getByText('(B2B, B2C)')).toBeInTheDocument();
    expect(screen.getByText('(B2B, B2C)')).toContainHTML('strong');
  });

  it('debería mencionar SUMYT y su significado', () => {
    render(<Somos />);
    
    const sumytElements = screen.getAllByText('SUMYT');
    expect(sumytElements.length).toBeGreaterThan(0);
    
    // Verificar que SUMYT tiene la clase texto-rojo
    const sumytWithClass = sumytElements.find(element => 
      element.classList.contains('texto-rojo')
    );
    expect(sumytWithClass).toBeInTheDocument();
  });

  it('debería mencionar los cuatro pilares fundamentales', () => {
    render(<Somos />);
    
    expect(screen.getByText('Salud, Educación, Vivienda y Tecnología')).toBeInTheDocument();
    expect(screen.getByText('Salud, Educación, Vivienda y Tecnología')).toContainHTML('strong');
  });

  it('debería mencionar los objetivos de desarrollo sostenible', () => {
    render(<Somos />);
    
    expect(screen.getByText('17 Objetivos de Desarrollo Sostenible')).toBeInTheDocument();
    expect(screen.getByText('17 Objetivos de Desarrollo Sostenible')).toContainHTML('strong');
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<Somos />);
    
    expect(container.querySelector('.container')).toBeInTheDocument();
    expect(container.querySelector('.text-content')).toBeInTheDocument();
    expect(container.querySelector('.image-content')).toBeInTheDocument();
    expect(container.querySelector('.hexagon')).toBeInTheDocument();
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<Somos />);
    expect(container).toMatchSnapshot();
  });

  it('debería tener la estructura de dos columnas', () => {
    const { container } = render(<Somos />);
    
    const textColumn = container.querySelector('.text-content');
    const imageColumn = container.querySelector('.image-content');
    
    expect(textColumn).toBeInTheDocument();
    expect(imageColumn).toBeInTheDocument();
    
    // Verificar que la columna de texto tiene el contenido principal
    expect(textColumn).toHaveTextContent('Grupo Servitransporte S.A.S.');
    expect(textColumn).toHaveTextContent('SUMYT');
    
  });
});

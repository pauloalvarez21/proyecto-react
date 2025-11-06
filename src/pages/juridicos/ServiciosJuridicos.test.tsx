import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ServiciosJuridicos from './ServiciosJuridicos';

// Mocks para CSS e imágenes
jest.mock('./ServiciosJuridicos.css', () => ({}));

describe('ServiciosJuridicos Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal', () => {
    render(<ServiciosJuridicos />);
    expect(screen.getByText('Servicios Jurídicos y Financieros')).toBeInTheDocument();
  });

  it('debería renderizar todas las imágenes jurídicas', () => {
    render(<ServiciosJuridicos />);
    
    const juridicosImages = screen.getAllByAltText('Jurídicos');
    expect(juridicosImages).toHaveLength(3);
    
    expect(juridicosImages[0]).toHaveAttribute('src', 'test-file-stub');
    expect(juridicosImages[1]).toHaveAttribute('src', 'test-file-stub');
    expect(juridicosImages[2]).toHaveAttribute('src', 'test-file-stub');
    expect(juridicosImages[0]).toHaveClass('juridicos-img');
  });

  it('debería renderizar el logo del grupo', () => {
    render(<ServiciosJuridicos />);
    
    const logo = screen.getByAltText('Logo Derecho');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'test-file-stub');
    expect(logo).toHaveClass('juridicos-logo');
  });

  it('debería mencionar la Constructora Servitrasporte', () => {
    render(<ServiciosJuridicos />);
    
    expect(screen.getByText('Constructora Servitrasporte')).toBeInTheDocument();
    expect(screen.getByText('Constructora Servitrasporte')).toContainHTML('strong');
  });

  it('debería mencionar SUMYT en el texto', () => {
    render(<ServiciosJuridicos />);
    
    const sumytElements = screen.getAllByText('SUMYT');
    expect(sumytElements.length).toBeGreaterThan(0);
    
    // Verificar que SUMYT tiene la clase texto-rojo
    const sumytWithClass = sumytElements.find(element => 
      element.classList.contains('texto-rojo')
    );
    expect(sumytWithClass).toBeInTheDocument();
  });

  it('debería tener texto en negrita para énfasis', () => {
    render(<ServiciosJuridicos />);
    
    const strongElements = document.querySelectorAll('strong');
    expect(strongElements.length).toBeGreaterThan(2);
    
    // Verificar algunos textos específicos en negrita
    expect(screen.getByText('Servicios Jurídicos y Económicos Servitrasporte')).toContainHTML('strong');
    expect(screen.getByText('Constructora Servitrasporte')).toContainHTML('strong');
    expect(screen.getByText('Desarrollo y Requisitos en Tecnología')).toContainHTML('strong');
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<ServiciosJuridicos />);
    
    expect(container.querySelector('.juridicos-page')).toBeInTheDocument();
    expect(container.querySelector('.juridicos-left')).toBeInTheDocument();
    expect(container.querySelector('.juridicos-right')).toBeInTheDocument();
    expect(container.querySelector('.imagenes-juridicos')).toBeInTheDocument();
    expect(container.querySelector('.section')).toBeInTheDocument();
    expect(container.querySelectorAll('.juridicos-img')).toHaveLength(3);
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<ServiciosJuridicos />);
    expect(container).toMatchSnapshot();
  });

  it('debería tener la estructura de dos columnas', () => {
    const { container } = render(<ServiciosJuridicos />);
    
    const leftColumn = container.querySelector('.juridicos-left');
    const rightColumn = container.querySelector('.juridicos-right');
    
    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();
    
    // Verificar que la columna izquierda tiene los títulos
    expect(leftColumn).toHaveTextContent('Servicios Jurídicos y Financieros');
    
    // Verificar que la columna derecha tiene el contenido principal
    expect(rightColumn).toHaveTextContent('Servicios Jurídicos y Económicos Servitrasporte');
    expect(rightColumn).toHaveTextContent('Constructora Servitrasporte');
    expect(rightColumn).toHaveTextContent('SUMYT');
  });
});
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Transporte from './Transporte';

// Mocks para CSS e imágenes
jest.mock('./Transporte.css', () => ({}));

describe('Transporte Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal', () => {
    render(<Transporte />);
    expect(screen.getByText('Transporte')).toBeInTheDocument();
  });

  it('debería renderizar todas las imágenes de transporte', () => {
    render(<Transporte />);
    
    const transporteImages = screen.getAllByRole('img');
    // 3 imágenes de transporte + 1 logo del grupo
    expect(transporteImages.length).toBe(4);
    
    const taxiImage = screen.getByAltText('Logo taxi');
    const segmentoImage = screen.getByAltText('Logo segmento');
    const camionImage = screen.getByAltText('Logo camion');
    
    expect(taxiImage).toHaveAttribute('src', 'test-file-stub');
    expect(taxiImage).toHaveClass('transporte-taxi');
    
    expect(segmentoImage).toHaveAttribute('src', 'test-file-stub');
    expect(segmentoImage).toHaveClass('transporte-taxi');
    
    expect(camionImage).toHaveAttribute('src', 'test-file-stub');
    expect(camionImage).toHaveClass('transporte-taxi');
  });

  it('debería renderizar el logo del grupo', () => {
    render(<Transporte />);
    
    const logo = screen.getByAltText('Logo Derecho');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'test-file-stub');
    expect(logo).toHaveClass('transporte-logo');
  });

  it('debería mencionar SUMYT en el texto', () => {
    render(<Transporte />);
    
    const sumytElements = screen.getAllByText('SUMYT');
    expect(sumytElements.length).toBeGreaterThan(1);
    
    // Verificar que SUMYT tiene la clase texto-rojo
    const sumytWithClass = sumytElements.find(element => 
      element.classList.contains('texto-rojo')
    );
    expect(sumytWithClass).toBeInTheDocument();
  });

  it('debería contener la sección de objetivo inmediato', () => {
    render(<Transporte />);
    
    expect(screen.getByText('Objetivo Inmediato:')).toBeInTheDocument();
    expect(screen.getByText('Objetivo Inmediato:')).toContainHTML('strong');
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<Transporte />);
    
    expect(container.querySelector('.transporte-page')).toBeInTheDocument();
    expect(container.querySelector('.transporte-left')).toBeInTheDocument();
    expect(container.querySelector('.transporte-right')).toBeInTheDocument();
    expect(container.querySelector('.imagenes-transporte')).toBeInTheDocument();
    expect(container.querySelector('.section')).toBeInTheDocument();
    expect(container.querySelectorAll('.transporte-taxi')).toHaveLength(3);
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<Transporte />);
    expect(container).toMatchSnapshot();
  });

  it('debería tener la estructura de dos columnas', () => {
    const { container } = render(<Transporte />);
    
    const leftColumn = container.querySelector('.transporte-left');
    const rightColumn = container.querySelector('.transporte-right');
    
    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();
    
    // Verificar que la columna izquierda tiene los títulos
    expect(leftColumn).toHaveTextContent('Transporte');
    expect(leftColumn).toHaveTextContent('Grupo Servitrasporte S.A.S');
    
    // Verificar que la columna derecha tiene el contenido principal
    expect(rightColumn).toHaveTextContent('SUMYT');
    expect(rightColumn).toHaveTextContent('B2B y B2C');
    expect(rightColumn).toHaveTextContent('Objetivo Inmediato');
  });
});
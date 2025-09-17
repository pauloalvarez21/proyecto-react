import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FondoAsociados from './FondoAsociados';

// Mocks para CSS e imágenes
jest.mock('./FondoAsociados.css', () => ({}));
jest.mock('../../assets/image/sumyt.png', () => 'sumyt-mock-url');
jest.mock('./proposito.png', () => 'proposito-mock-url');
jest.mock('./segmentos.png', () => 'segmentos-mock-url');
jest.mock('./proyecciones.png', () => 'proyecciones-mock-url');

describe('FondoAsociados Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el logo SUMYT', () => {
    render(<FondoAsociados />);
    expect(screen.getByAltText('Logo SUMYT')).toBeInTheDocument();
    expect(screen.getByAltText('Logo SUMYT')).toHaveAttribute('src', 'sumyt-mock-url');
  });

  it('debería renderizar los 3 items principales', () => {
    render(<FondoAsociados />);
    
    expect(screen.getByText('Propósito')).toBeInTheDocument();
    expect(screen.getByText('Segmentos')).toBeInTheDocument();
    expect(screen.getByText('Proyecciones')).toBeInTheDocument();
  });

  it('debería renderizar todas las imágenes de los items', () => {
    render(<FondoAsociados />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4); // logo SUMYT + 3 imágenes de items
    
    expect(screen.getByAltText('Propósito')).toBeInTheDocument();
    expect(screen.getByAltText('Segmentos')).toBeInTheDocument();
    expect(screen.getByAltText('Proyecciones')).toBeInTheDocument();
  });

  it('debería tener los src correctos en las imágenes', () => {
    render(<FondoAsociados />);
    
    expect(screen.getByAltText('Logo SUMYT')).toHaveAttribute('src', 'sumyt-mock-url');
    expect(screen.getByAltText('Propósito')).toHaveAttribute('src', 'proposito-mock-url');
    expect(screen.getByAltText('Segmentos')).toHaveAttribute('src', 'segmentos-mock-url');
    expect(screen.getByAltText('Proyecciones')).toHaveAttribute('src', 'proyecciones-mock-url');
  });

  it('debería renderizar la descripción del propósito', () => {
    render(<FondoAsociados />);
    expect(screen.getByText('Fomentar el ahorro y la cooperación entre nuestros asociados.')).toBeInTheDocument();
  });

  it('debería renderizar la lista de segmentos', () => {
    render(<FondoAsociados />);
    
    expect(screen.getByText('Transporte público.')).toBeInTheDocument();
    expect(screen.getByText('Turismo.')).toBeInTheDocument();
    expect(screen.getByText('Mensajería.')).toBeInTheDocument();
    expect(screen.getByText('Empresas del holding.')).toBeInTheDocument();
    
    // Verificar que es una lista
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(6); // 4 segmentos + 2 proyecciones
  });

  it('debería renderizar la lista de proyecciones', () => {
    render(<FondoAsociados />);
    
    expect(screen.getByText('Meta de 60,000 afiliados.')).toBeInTheDocument();
    expect(screen.getByText('Programas de beneficios y apoyo financiero para los asociados.')).toBeInTheDocument();
  });
});
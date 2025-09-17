import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import History from './History';

// Mocks para CSS e imágenes
jest.mock('./History.css', () => ({}));
jest.mock('../../assets/image/grupo.svg', () => 'grupo-mock-url');

describe('History Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal "Historia"', () => {
    render(<History />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Historia');
  });

  it('debería renderizar el logo del grupo', () => {
    render(<History />);
    
    const logo = screen.getByAltText('Grupo Servitransporte');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'grupo-mock-url');
    expect(logo).toHaveAttribute('width', '300');
    expect(logo).toHaveAttribute('height', '400');
    expect(logo).toHaveClass('logo');
  });

  it('debería renderizar los 4 eventos de la línea de tiempo', () => {
    render(<History />);
    
    const events = screen.getAllByRole('heading', { level: 2 });
    expect(events).toHaveLength(4);
    
    expect(events[0]).toHaveTextContent('2018');
    expect(events[1]).toHaveTextContent('2019');
    expect(events[2]).toHaveTextContent('2021');
    expect(events[3]).toHaveTextContent('Presente');
  });

  it('debería renderizar los títulos de los eventos', () => {
    render(<History />);
    
    expect(screen.getByText('Fundación renovando sueños')).toBeInTheDocument();
    expect(screen.getByText('Grupo Alianza Sevitransporte')).toBeInTheDocument();
    expect(screen.getByText('Grupo de Servicios de transportes especiales de Colombia - Servitransporte')).toBeInTheDocument();
    expect(screen.getByText('Servicios Unificados de Movilidad y Turismo')).toBeInTheDocument();
  });

  it('debería tener el texto SUMYT en negrita', () => {
    render(<History />);
    
    const sumytText = screen.getByText('SUMYT');
    expect(sumytText.tagName).toBe('STRONG');
    expect(sumytText).toBeInTheDocument();
  });

  it('debería renderizar en el orden cronológico correcto', () => {
    render(<History />);
    
    const yearHeadings = screen.getAllByRole('heading', { level: 2 });
    const years = yearHeadings.map(heading => heading.textContent);
    
    expect(years).toEqual(['2018', '2019', '2021', 'Presente']);
  });
});
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InnovacionTecnologia from './InnovacionTecnologia';

// Mocks para CSS e imágenes
jest.mock('./InnovacionTecnologia.css', () => ({}));
jest.mock('../../assets/image/grupo.svg', () => 'grupo-mock-url');

describe('InnovacionTecnologia Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal "Innovación y Tecnología"', () => {
    render(<InnovacionTecnologia />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Innovación y Tecnología');
  });

  it('debería renderizar los 3 items de innovación', () => {
    render(<InnovacionTecnologia />);
    
    expect(screen.getByText('Servicios a Empresas del Holding')).toBeInTheDocument();
    expect(screen.getByText('Energía Limpia')).toBeInTheDocument();
    expect(screen.getByText('Onboarding Digital')).toBeInTheDocument();
  });

  it('debería renderizar las descripciones de cada item', () => {
    render(<InnovacionTecnologia />);
    
    expect(screen.getByText('Desarrollo de soluciones tecnológicas para mejorar la eficiencia y la sostenibilidad')).toBeInTheDocument();
    expect(screen.getByText('Promoción del uso de vehículos eléctricos y energías renovables')).toBeInTheDocument();
    expect(screen.getByText('Proceso de captación de asociados mediante plataformas digitales innovadoras')).toBeInTheDocument();
  });

  it('debería renderizar el logo del grupo', () => {
    render(<InnovacionTecnologia />);
    
    const logo = screen.getByAltText('Logo Grupo Servitransporte');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'grupo-mock-url');
    expect(logo).toHaveAttribute('width', '200');
  });

  it('debería tener el orden correcto de los elementos', () => {
    render(<InnovacionTecnologia />);
    
    const headings = screen.getAllByRole('heading');
    const headingTexts = headings.map(heading => heading.textContent);
    
    // Verificar que el h1 está primero y luego los h3
    expect(headingTexts[0]).toBe('Innovación y Tecnología');
    expect(headingTexts.slice(1)).toEqual([
      'Servicios a Empresas del Holding',
      'Energía Limpia',
      'Onboarding Digital'
    ]);
  });
});
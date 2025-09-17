import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ServiciosJuridicos from './ServiciosJuridicos';

// Mocks para CSS e imágenes
jest.mock('./ServiciosJuridicos.css', () => ({}));
jest.mock('./juridicos1.png', () => 'juridicos1-mock-url');
jest.mock('./juridicos2.png', () => 'juridicos2-mock-url');
jest.mock('./juridicos3.png', () => 'juridicos3-mock-url');
jest.mock('../../assets/image/grupo.svg', () => 'grupo-mock-url');

describe('ServiciosJuridicos Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal "Servicios Jurídicos y Financieros"', () => {
    render(<ServiciosJuridicos />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Servicios Jurídicos y Financieros');
  });

  it('debería renderizar las 3 imágenes de servicios jurídicos', () => {
    render(<ServiciosJuridicos />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4); // 3 imágenes de items + 1 logo grupo
    
    expect(screen.getByAltText('Servicios a Empresas del Holding')).toBeInTheDocument();
    expect(screen.getByAltText('Planes de Pago')).toBeInTheDocument();
    expect(screen.getByAltText('Infraestructura')).toBeInTheDocument();
    expect(screen.getByAltText('Logo Grupo Servitransporte')).toBeInTheDocument();
  });

  it('debería tener los src correctos en las imágenes', () => {
    render(<ServiciosJuridicos />);
    
    expect(screen.getByAltText('Servicios a Empresas del Holding')).toHaveAttribute('src', 'juridicos1-mock-url');
    expect(screen.getByAltText('Planes de Pago')).toHaveAttribute('src', 'juridicos2-mock-url');
    expect(screen.getByAltText('Infraestructura')).toHaveAttribute('src', 'juridicos3-mock-url');
    expect(screen.getByAltText('Logo Grupo Servitransporte')).toHaveAttribute('src', 'grupo-mock-url');
  });

  it('debería renderizar los títulos de los servicios', () => {
    render(<ServiciosJuridicos />);
    
    expect(screen.getByText('Servicios a Empresas del Holding')).toBeInTheDocument();
    expect(screen.getByText('Planes de Pago')).toBeInTheDocument();
    expect(screen.getByText('Infraestructura')).toBeInTheDocument();
  });

  it('debería renderizar la descripción de servicios a empresas', () => {
    render(<ServiciosJuridicos />);
    expect(screen.getByText('Asesoría jurídica y financiera para apoyar el crecimiento y la estabilidad de nuestras empresas.')).toBeInTheDocument();
  });

  it('debería renderizar la lista de planes de pago', () => {
    render(<ServiciosJuridicos />);
    
    expect(screen.getByText('Financiamiento y planes de pago adaptados a las necesidades de clientes.')).toBeInTheDocument();
    
    // Verificar que es una lista
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(1);
  });

  it('debería renderizar la descripción de infraestructura', () => {
    render(<ServiciosJuridicos />);
    expect(screen.getByText('Gestión y optimización de recursos para garantizar un servicio eficiente y eficaz.')).toBeInTheDocument();
  });

  it('debería renderizar el logo del grupo con el ancho correcto', () => {
    render(<ServiciosJuridicos />);
    
    const grupoLogo = screen.getByAltText('Logo Grupo Servitransporte');
    expect(grupoLogo).toHaveAttribute('width', '200');
    expect(grupoLogo).toHaveClass('juridicos-logo-grupo');
  });
});
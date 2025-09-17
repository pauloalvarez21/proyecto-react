import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Seguros from './Seguros';

// Mocks para CSS e imágenes
jest.mock('./Seguros.css', () => ({}));
jest.mock('./estado.png', () => 'estado-mock-url');
jest.mock('./segmentos.png', () => 'segmentos-mock-url');
jest.mock('./estrategia.png', () => 'estrategia-mock-url');
jest.mock('../../assets/image/grupo.svg', () => 'grupo-mock-url');

describe('Seguros Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal "Corredor de Seguros"', () => {
    render(<Seguros />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Corredor de Seguros');
  });

  it('debería renderizar las 4 imágenes de seguros', () => {
    render(<Seguros />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4); // 3 imágenes hexagonales + 1 logo grupo
    
    expect(screen.getByAltText('Convenio Seguros')).toBeInTheDocument();
    expect(screen.getByAltText('Segmentos')).toBeInTheDocument();
    expect(screen.getByAltText('Estrategia')).toBeInTheDocument();
    expect(screen.getByAltText('Logo Grupo Servitransporte')).toBeInTheDocument();
  });

  it('debería tener los src correctos en las imágenes', () => {
    render(<Seguros />);
    
    expect(screen.getByAltText('Convenio Seguros')).toHaveAttribute('src', 'estado-mock-url');
    expect(screen.getByAltText('Segmentos')).toHaveAttribute('src', 'segmentos-mock-url');
    expect(screen.getByAltText('Estrategia')).toHaveAttribute('src', 'estrategia-mock-url');
    expect(screen.getByAltText('Logo Grupo Servitransporte')).toHaveAttribute('src', 'grupo-mock-url');
  });

  it('debería renderizar los títulos de las secciones', () => {
    render(<Seguros />);
    
    expect(screen.getByText('Convenio Seguros del Estado')).toBeInTheDocument();
    expect(screen.getByText('Segmentos')).toBeInTheDocument();
    expect(screen.getByText('Estrategia')).toBeInTheDocument();
  });

  it('debería renderizar la descripción de convenio seguros', () => {
    render(<Seguros />);
    expect(screen.getByText('Productos adaptados a las necesidades de los clientes')).toBeInTheDocument();
  });

  it('debería renderizar la lista de segmentos de seguros', () => {
    render(<Seguros />);
    
    expect(screen.getByText('Seguros personales.')).toBeInTheDocument();
    expect(screen.getByText('Seguros patrimoniales.')).toBeInTheDocument();
    expect(screen.getByText('Seguros de prestación de servicios.')).toBeInTheDocument();
    
    // Verificar que es una lista
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(5); // 3 segmentos + 2 estrategias
  });

  it('debería renderizar la lista de estrategias', () => {
    render(<Seguros />);
    
    expect(screen.getByText('Oferta productos a bajo costo.')).toBeInTheDocument();
    expect(screen.getByText('Ventas en volumen para maximizar beneficios.')).toBeInTheDocument();
  });

  it('debería renderizar el logo del grupo en el footer', () => {
    render(<Seguros />);
    
    const grupoLogo = screen.getByAltText('Logo Grupo Servitransporte');
    expect(grupoLogo).toBeInTheDocument();
  });

  it('debería tener la estructura correcta con secciones', () => {
    render(<Seguros />);
    
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4); // h1 + 3 h2
  });

});
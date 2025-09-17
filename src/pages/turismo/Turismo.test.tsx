import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Turismo from './Turismo';

// Mocks para CSS e imágenes
jest.mock('./Turismo.css', () => ({}));
jest.mock('./turismo1.png', () => 'turismo1-mock-url');
jest.mock('./turismo2.png', () => 'turismo2-mock-url');
jest.mock('./turismo3.png', () => 'turismo3-mock-url');
jest.mock('../../assets/image/grupo.png', () => 'grupo-mock-url');

describe('Turismo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal "Operador Turístico"', () => {
    render(<Turismo />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Operador');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Turístico');
  });

  it('debería renderizar las 3 imágenes de turismo', () => {
    render(<Turismo />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4); // 3 imágenes de items + 1 logo grupo
    
    expect(screen.getByAltText('Hoteles')).toBeInTheDocument();
    expect(screen.getByAltText('Turismo')).toBeInTheDocument();
    expect(screen.getByAltText('Transporte')).toBeInTheDocument();
    expect(screen.getByAltText('Logo Grupo Servitransporte')).toBeInTheDocument();
  });

  it('debería tener los src correctos en las imágenes', () => {
    render(<Turismo />);
    
    expect(screen.getByAltText('Hoteles')).toHaveAttribute('src', 'turismo1-mock-url');
    expect(screen.getByAltText('Turismo')).toHaveAttribute('src', 'turismo2-mock-url');
    expect(screen.getByAltText('Transporte')).toHaveAttribute('src', 'turismo3-mock-url');
    expect(screen.getByAltText('Logo Grupo Servitransporte')).toHaveAttribute('src', 'grupo-mock-url');
  });

  it('debería renderizar los títulos de los items', () => {
    render(<Turismo />);
    
    expect(screen.getByText('Alianzas Estratégicas')).toBeInTheDocument();
    expect(screen.getByText('Enfoque')).toBeInTheDocument();
    expect(screen.getByText('Afiliados')).toBeInTheDocument();
  });

  it('debería renderizar la descripción de alianzas estratégicas', () => {
    render(<Turismo />);
    expect(screen.getByText('Convenios con hoteles, moteles, restaurantes y otros servicios turísticos')).toBeInTheDocument();
  });

  it('debería renderizar la lista de enfoques turísticos', () => {
    render(<Turismo />);
    
    expect(screen.getByText('Turismo nacional e internacional.')).toBeInTheDocument();
    expect(screen.getByText('Turismo en salud, aprovechando nuestra red de servicios médicos.')).toBeInTheDocument();
    
    // Verificar que es una lista
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });

  it('debería renderizar la información de afiliados', () => {
    render(<Turismo />);
    expect(screen.getByText('260 asociados a INHOTELCOL, fortaleciendo nuestra red de servicios turísticos')).toBeInTheDocument();
  });

  it('debería renderizar el logo del grupo con el ancho correcto', () => {
    render(<Turismo />);
    
    const grupoLogo = screen.getByAltText('Logo Grupo Servitransporte');
    expect(grupoLogo).toHaveAttribute('width', '200');
    expect(grupoLogo).toHaveClass('turismo-logo-grupo');
  });

});
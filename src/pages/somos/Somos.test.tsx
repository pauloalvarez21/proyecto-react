import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Somos from './Somos';

// Mocks para CSS e imágenes
jest.mock('./Somos.css', () => ({}));
jest.mock('../../assets/image/grupo.png', () => 'grupo-mock-url');
jest.mock('./hexa.png', () => 'hexa-mock-url');

describe('Somos Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el logo del grupo', () => {
    render(<Somos />);
    
    const logo = screen.getByAltText('Grupo Servitransporte');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'grupo-mock-url');
    expect(logo).toHaveClass('logo');
  });

  it('debería renderizar la imagen hexagonal del equipo', () => {
    render(<Somos />);
    
    const hexaImage = screen.getByAltText('Equipo de trabajo');
    expect(hexaImage).toBeInTheDocument();
    expect(hexaImage).toHaveAttribute('src', 'hexa-mock-url');
  });

  it('debería renderizar el nombre de la empresa en negrita', () => {
    render(<Somos />);
    
    const empresaName = screen.getByText('Grupo Servitrasporte S.A.S.');
    expect(empresaName).toBeInTheDocument();
    expect(empresaName.tagName).toBe('STRONG');
  });

  it('debería renderizar el texto SUMYT en rojo', () => {
    render(<Somos />);
    
    const sumytText = screen.getByText('SUMYT');
    expect(sumytText).toBeInTheDocument();
    expect(sumytText).toHaveClass('texto-rojo');
  });

  it('debería contener todos los párrafos de texto', () => {
    render(<Somos />);
    
    const paragraphs = screen.getAllByText(/./); // Busca cualquier texto
    expect(paragraphs.length).toBeGreaterThan(3); // Al menos 3 párrafos
  });
});
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Constructora from './Constructora';

// Mocks para CSS e imágenes
jest.mock('./Constructora.css', () => ({}));

describe('Constructora Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal', () => {
    render(<Constructora />);
    expect(screen.getByText('Constructora')).toBeInTheDocument();
  });

  it('debería renderizar el subtítulo', () => {
    render(<Constructora />);
    expect(screen.getByText('Servitrasporte S.A.S')).toBeInTheDocument();
  });

  it('debería renderizar todas las imágenes de construcción', () => {
    render(<Constructora />);
    
    const constructionImages = screen.getAllByAltText('Constructora');
    expect(constructionImages).toHaveLength(3);
    
    expect(constructionImages[0]).toHaveAttribute('src', 'test-file-stub');
    expect(constructionImages[1]).toHaveAttribute('src', 'test-file-stub');
    expect(constructionImages[2]).toHaveAttribute('src', 'test-file-stub');
  });

  it('debería renderizar el logo del grupo', () => {
    render(<Constructora />);
    
    const logo = screen.getByAltText('Logo Derecho');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'test-file-stub');
    expect(logo).toHaveClass('constructora-logo');
  });

  it('debería mencionar SUMYT en el texto', () => {
    render(<Constructora />);
    
    const sumytElements = screen.getAllByText('SUMYT');
    expect(sumytElements.length).toBeGreaterThan(0);
    
    // Verificar que SUMYT tiene la clase texto-rojo
    const sumytWithClass = sumytElements.find(element => 
      element.classList.contains('texto-rojo')
    );
    expect(sumytWithClass).toBeInTheDocument();
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<Constructora />);
    
    expect(container.querySelector('.constructora-page')).toBeInTheDocument();
    expect(container.querySelector('.constructora-left')).toBeInTheDocument();
    expect(container.querySelector('.constructora-right')).toBeInTheDocument();
    expect(container.querySelector('.imagenes-constructora')).toBeInTheDocument();
    expect(container.querySelector('.section')).toBeInTheDocument();
    expect(container.querySelectorAll('.constructora-img')).toHaveLength(3);
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<Constructora />);
    expect(container).toMatchSnapshot();
  });
});
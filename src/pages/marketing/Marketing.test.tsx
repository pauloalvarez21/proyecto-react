import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Marketing from './Marketing';

// Mocks para CSS e imágenes
jest.mock('./Marketing.css', () => ({}));
jest.mock('../../assets/image/grupo.png', () => 'grupo-mock-url');
jest.mock('./marketing1.png', () => 'marketing1-mock-url');
jest.mock('./marketing2.png', () => 'marketing2-mock-url');
jest.mock('./marketing3.png', () => 'marketing3-mock-url');

describe('Marketing Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal', () => {
    render(<Marketing />);
    expect(screen.getByText('Agencia de Marketing y Publicidad')).toBeInTheDocument();
  });

  it('debería renderizar el subtítulo', () => {
    render(<Marketing />);
    expect(screen.getByText('Servitrasporte S.A.S')).toBeInTheDocument();
  });

  it('debería renderizar todas las imágenes de marketing', () => {
    render(<Marketing />);
    
    const marketingImages = screen.getAllByAltText('Marketing');
    expect(marketingImages).toHaveLength(3);
    
    expect(marketingImages[0]).toHaveAttribute('src', 'marketing1-mock-url');
    expect(marketingImages[1]).toHaveAttribute('src', 'marketing2-mock-url');
    expect(marketingImages[2]).toHaveAttribute('src', 'marketing3-mock-url');
    expect(marketingImages[0]).toHaveClass('marketing-img');
  });

  it('debería renderizar el logo del grupo', () => {
    render(<Marketing />);
    
    const logo = screen.getByAltText('Logo Derecho');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'grupo-mock-url');
    expect(logo).toHaveClass('marketing-logo');
  });

  it('debería mencionar SUMYT en el texto', () => {
    render(<Marketing />);
    
    const sumytElements = screen.getAllByText('SUMYT');
    expect(sumytElements.length).toBeGreaterThan(0);
    
    // Verificar que SUMYT tiene la clase texto-rojo
    const sumytWithClass = sumytElements.find(element => 
      element.classList.contains('texto-rojo')
    );
    expect(sumytWithClass).toBeInTheDocument();
  });

  it('debería tener texto en negrita para énfasis', () => {
    render(<Marketing />);
    
    const strongElements = document.querySelectorAll('strong');
    expect(strongElements.length).toBeGreaterThan(5);
    
    // Verificar algunos textos específicos en negrita
    expect(screen.getByText('Agencia de Marketing y Publicidad Servitrasporte')).toContainHTML('strong');
    expect(screen.getByText('salud, educación, vivienda y tecnología')).toContainHTML('strong');
    expect(screen.getByText('SENA')).toContainHTML('strong');
    expect(screen.getByText('neuromarketing')).toContainHTML('strong');
    expect(screen.getByText('cerebro emocional')).toContainHTML('strong');
    expect(screen.getByText('Desarrollo y Requisitos en Tecnología')).toContainHTML('strong');
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<Marketing />);
    
    expect(container.querySelector('.marketing-page')).toBeInTheDocument();
    expect(container.querySelector('.marketing-left')).toBeInTheDocument();
    expect(container.querySelector('.marketing-right')).toBeInTheDocument();
    expect(container.querySelector('.imagenes-marketing')).toBeInTheDocument();
    expect(container.querySelector('.section')).toBeInTheDocument();
    expect(container.querySelectorAll('.marketing-img')).toHaveLength(3);
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<Marketing />);
    expect(container).toMatchSnapshot();
  });

  it('debería tener la estructura de dos columnas', () => {
    const { container } = render(<Marketing />);
    
    const leftColumn = container.querySelector('.marketing-left');
    const rightColumn = container.querySelector('.marketing-right');
    
    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();
    
    // Verificar que la columna izquierda tiene los títulos
    expect(leftColumn).toHaveTextContent('Agencia de Marketing y Publicidad');
    expect(leftColumn).toHaveTextContent('Servitrasporte S.A.S');
    
    // Verificar que la columna derecha tiene el contenido principal
    expect(rightColumn).toHaveTextContent('Agencia de Marketing y Publicidad Servitrasporte');
    expect(rightColumn).toHaveTextContent('neuromarketing');
    expect(rightColumn).toHaveTextContent('SUMYT');
  });
});
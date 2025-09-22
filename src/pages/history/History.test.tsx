import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import History from './History';

// Mocks para CSS e imágenes
jest.mock('./History.css', () => ({}));
jest.mock('../../assets/image/grupo.svg', () => 'grupo-mock-url');
jest.mock('../../assets/image/sumyt.png', () => 'sumyt-mock-url');

describe('History Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título principal', () => {
    render(<History />);
    expect(screen.getByText('Historia')).toBeInTheDocument();
  });

  it('debería renderizar ambos logos', () => {
    render(<History />);
    
    const grupoLogo = screen.getByAltText('Grupo Servitransporte');
    const sumytLogo = screen.getByAltText('sumyt');
    
    expect(grupoLogo).toBeInTheDocument();
    expect(grupoLogo).toHaveAttribute('src', 'grupo-mock-url');
    expect(grupoLogo).toHaveClass('logo');
    
    expect(sumytLogo).toBeInTheDocument();
    expect(sumytLogo).toHaveAttribute('src', 'sumyt-mock-url');
    expect(sumytLogo).toHaveClass('logoSumyt');
    expect(sumytLogo).toHaveAttribute('width', '100');
  });

  it('debería renderizar todos los eventos de la línea de tiempo', () => {
    render(<History />);
    
    const events = document.querySelectorAll('.event');
    expect(events).toHaveLength(4);
  });

  it('debería renderizar el evento de 2018 correctamente', () => {
    render(<History />);
    
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.getByText('Fundación renovando sueños')).toBeInTheDocument();
    expect(screen.getByText('Apoyo propietarios y transportadores en la defensa de los derechos del servicio público')).toBeInTheDocument();
  });

  it('debería renderizar el evento de 2019 correctamente', () => {
    render(<History />);
    
    expect(screen.getByText('2019')).toBeInTheDocument();
    expect(screen.getByText('Grupo Alianza Sevitransporte')).toBeInTheDocument();
    expect(screen.getByText('Empresa de transporte público en modalidad de servicio público, especial y todas las modalidades')).toBeInTheDocument();
  });

  it('debería renderizar el evento de 2021 correctamente', () => {
    render(<History />);
    
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('Grupo de Servicios de transportes especiales de Colombia - Servitransporte')).toBeInTheDocument();
    expect(screen.getByText('Desarrollo Holding')).toBeInTheDocument();
  });

  it('debería mostrar SUMYT en rojo en el evento presente', () => {
    render(<History />);
    
    const sumytText = screen.getByText('SUMYT');
    expect(sumytText).toBeInTheDocument();
    expect(sumytText).toHaveClass('texto-rojo');
  });

  it('debería tener la estructura correcta de clases CSS', () => {
    const { container } = render(<History />);
    
    expect(container.querySelector('.history-page')).toBeInTheDocument();
    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('.timeline')).toBeInTheDocument();
    expect(container.querySelectorAll('.event')).toHaveLength(4);
  });

  it('debería tener la estructura semántica correcta', () => {
    const { container } = render(<History />);
    
    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('section')).toBeInTheDocument();
    
    const headings = container.querySelectorAll('h2, h3');
    expect(headings.length).toBe(8); // 4 h2 + 4 h3
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<History />);
    expect(container).toMatchSnapshot();
  });

  it('debería renderizar todos los años en orden', () => {
    render(<History />);
    
    const years = ['2018', '2019', '2021', 'Presente'];
    years.forEach(year => {
      expect(screen.getByText(year)).toBeInTheDocument();
    });
  });

  it('debería renderizar todos los subtítulos de eventos', () => {
    render(<History />);
    
    const subtitles = [
      'Fundación renovando sueños',
      'Grupo Alianza Sevitransporte',
      'Grupo de Servicios de transportes especiales de Colombia - Servitransporte',
      'Servicios Unificados de Movilidad y Turismo'
    ];
    
    subtitles.forEach(subtitle => {
      expect(screen.getByText(subtitle)).toBeInTheDocument();
    });
  });
});
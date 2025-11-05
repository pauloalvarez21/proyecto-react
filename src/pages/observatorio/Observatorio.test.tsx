import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Observatorio from './Observatorio';

// Mocks para CSS e imágenes
jest.mock('./Observatorio.css', () => ({}));
jest.mock('../../assets/image/grupo.png', () => 'grupo-mock-url');
jest.mock('../../assets/image/oset.png', () => 'oset-mock-url');
jest.mock('../../assets/image/estructura.png', () => 'estructura-mock-url');

describe('Observatorio Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar las imágenes principales', () => {
    render(<Observatorio />);
    
    const osetImage = screen.getByAltText('Observatorio');
    const estructuraImage = screen.getByAltText('Estructura');
    const grupoLogo = screen.getByAltText('Logo Derecho');
    
    expect(osetImage).toBeInTheDocument();
    expect(osetImage).toHaveAttribute('src', 'oset-mock-url');
    
    expect(estructuraImage).toBeInTheDocument();
    expect(estructuraImage).toHaveAttribute('src', 'estructura-mock-url');
    
    expect(grupoLogo).toBeInTheDocument();
    expect(grupoLogo).toHaveAttribute('src', 'grupo-mock-url');
    expect(grupoLogo).toHaveClass('observatorio-logo');
  });

  it('debería mostrar los componentes del observatorio', () => {
    render(<Observatorio />);
    
    expect(screen.getByText('Componentes del Observatorio')).toBeInTheDocument();
    expect(screen.getByText('1. Plataforma Tecnológica y de Datos')).toBeInTheDocument();
    expect(screen.getByText('2. Equipos de Investigación y Análisis')).toBeInTheDocument();
    expect(screen.getByText('3. Red de Fuentes de Información y Aliados Estratégicos')).toBeInTheDocument();
    expect(screen.getByText('4. Mecanismos de Difusión y Comunicación')).toBeInTheDocument();
  });

  it('debería mostrar la estructura organizacional', () => {
    render(<Observatorio />);
    
    expect(screen.getByText('Estructura Organizacional')).toBeInTheDocument();
    expect(screen.getByText('COMITÉ ORGANIZACIONAL')).toBeInTheDocument();
    expect(screen.getByText('DIRECCIÓN')).toBeInTheDocument();
    expect(screen.getByText('UNIDAD ACADÉMICA')).toBeInTheDocument();
    expect(screen.getByText('UNIDAD GREMIAL')).toBeInTheDocument();
  });

  it('debería mostrar las consideraciones adicionales', () => {
    render(<Observatorio />);
    
    expect(screen.getByText('Consideraciones Adicionales')).toBeInTheDocument();
    expect(screen.getByText('1. Sostenibilidad Financiera:')).toBeInTheDocument();
    expect(screen.getByText('2. Independencia y Objetividad:')).toBeInTheDocument();
    expect(screen.getByText('3. Relevancia y Pertinencia:')).toBeInTheDocument();
  });

  it('debería mostrar el enlace de descarga del documento', () => {
    render(<Observatorio />);
    
    const downloadLink = screen.getByText('Descargar Documento');
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', '/Firma_observatorio_2025.docx');
    expect(downloadLink).toHaveAttribute('download', 'Firma_observatorio_2025.docx');
  });

  it('debería tener texto en negrita para los títulos y énfasis', () => {
    render(<Observatorio />);
    
    const strongElements = document.querySelectorAll('strong');
    expect(strongElements.length).toBeGreaterThan(10);
    
    // Verificar algunos textos específicos en negrita
    expect(screen.getByText('MISIÓN:')).toContainHTML('strong');
    expect(screen.getByText('VISIÓN:')).toContainHTML('strong');
  });

  it('debería tener la estructura de clases CSS correcta', () => {
    const { container } = render(<Observatorio />);
    
    expect(container.querySelector('.observatorio-page')).toBeInTheDocument();
    expect(container.querySelector('.observatorio-left')).toBeInTheDocument();
    expect(container.querySelector('.observatorio-right')).toBeInTheDocument();
    expect(container.querySelector('.section')).toBeInTheDocument();
    expect(container.querySelector('.objetivos')).toBeInTheDocument();
    expect(container.querySelector('.componentes')).toBeInTheDocument();
    expect(container.querySelector('.estructura')).toBeInTheDocument();
    expect(container.querySelector('.consideraciones')).toBeInTheDocument();
  });

  it('debería coincidir con el snapshot', () => {
    const { container } = render(<Observatorio />);
    expect(container).toMatchSnapshot();
  });

  it('debería mostrar subcomponentes de la plataforma tecnológica', () => {
    render(<Observatorio />);
    
    expect(screen.getByText('1.1 Base de Datos Unificada:')).toBeInTheDocument();
    expect(screen.getByText('1.2 Herramientas de Business Intelligence (BI):')).toBeInTheDocument();
    expect(screen.getByText('1.3 Software de Análisis Estadístico y Predictivo:')).toBeInTheDocument();
  });

  it('debería mostrar los mecanismos de difusión', () => {
    render(<Observatorio />);
    
    expect(screen.getByText('4.1 Portal Web Interactivo:')).toBeInTheDocument();
    expect(screen.getByText('4.2 Boletines Informativos Periódicos:')).toBeInTheDocument();
    expect(screen.getByText('4.3 Informes Anuales/Especiales:')).toBeInTheDocument();
  });

  it('debería tener la estructura de dos columnas', () => {
    const { container } = render(<Observatorio />);
    
    const leftColumn = container.querySelector('.observatorio-left');
    const rightColumn = container.querySelector('.observatorio-right');
    
    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();
    
    // Verificar que la columna derecha tiene el contenido principal
    expect(rightColumn).toHaveTextContent('OSET');
    expect(rightColumn).toHaveTextContent('MISIÓN');
    expect(rightColumn).toHaveTextContent('VISIÓN');
  });
});
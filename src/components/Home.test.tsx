import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

// Mocks para CSS
jest.mock('./Home.css', () => ({}));

// Mocks para react-slick
jest.mock('react-slick', () => {
  return function MockSlider({ children }: { children: React.ReactNode }) {
    return <div className="mock-slider">{children}</div>;
  };
});

// Mocks para todas las imágenes
jest.mock('../assets/image/aca.jpeg', () => 'aca-mock-url');
jest.mock('../assets/image/confetours.jpeg', () => 'confetours-mock-url');
jest.mock('../assets/image/ecovehiculos.jpeg', () => 'ecovehiculos-mock-url');
jest.mock('../assets/image/luxcarta.jpeg', () => 'luxcarta-mock-url');
jest.mock('../assets/image/medplus.jpeg', () => 'medplus-mock-url');
jest.mock('../assets/image/sectoriales.jpeg', () => 'sectoriales-mock-url');
jest.mock('../assets/image/seguros.jpeg', () => 'seguros-mock-url');
jest.mock('../assets/image/sena.jpeg', () => 'sena-mock-url');
jest.mock('../assets/image/ucc.jpeg', () => 'ucc-mock-url');

jest.mock('../assets/image/educacion.png', () => 'educacion-mock-url');
jest.mock('../assets/image/vivienda.png', () => 'vivienda-mock-url');
jest.mock('../assets/image/salud.png', () => 'salud-mock-url');
jest.mock('../assets/image/tecnologia.png', () => 'tecnologia-mock-url');

jest.mock('../assets/image/img1.jpeg', () => 'img1-mock-url');
jest.mock('../assets/image/img2.jpeg', () => 'img2-mock-url');
jest.mock('../assets/image/img3.jpeg', () => 'img3-mock-url');
jest.mock('../assets/image/img4.jpeg', () => 'img4-mock-url');
jest.mock('../assets/image/img5.jpeg', () => 'img5-mock-url');
jest.mock('../assets/image/img6.jpeg', () => 'img6-mock-url');

// Mocks para videos
jest.mock('../assets/video/video.mp4', () => 'video-mock-url');
jest.mock('../assets/video/video1.mp4', () => 'video1-mock-url');
jest.mock('../assets/video/video2.mp4', () => 'video2-mock-url');
jest.mock('../assets/video/video3.mp4', () => 'video3-mock-url');

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el título de presentaciones en video', () => {
    render(<Home />);
    expect(screen.getByText('Presentaciones en Video')).toBeInTheDocument();
  });

  it('debería renderizar el título de presentaciones en imágenes', () => {
    render(<Home />);
    expect(screen.getByText('Presentaciones en Imágenes')).toBeInTheDocument();
  });

  it('debería renderizar el título de los 4 pilares fundamentales', () => {
    render(<Home />);
    expect(screen.getByText('4 PILARES FUNDAMENTALES')).toBeInTheDocument();
  });

  it('debería renderizar el título de alianzas', () => {
    render(<Home />);
    expect(screen.getByText('Alianzas')).toBeInTheDocument();
  });

  it('debería renderizar los 4 pilares con sus labels', () => {
    render(<Home />);
    
    expect(screen.getByText('Educación')).toBeInTheDocument();
    expect(screen.getByText('Vivienda')).toBeInTheDocument();
    expect(screen.getByText('Salud')).toBeInTheDocument();
    expect(screen.getByText('Tecnología')).toBeInTheDocument();
  });

  it('debería renderizar todas las imágenes de los pilares', () => {
    render(<Home />);
    
    const pillarImages = screen.getAllByAltText(/Educación|Vivienda|Salud|Tecnología/);
    expect(pillarImages).toHaveLength(4);
    
    expect(screen.getByAltText('Educación')).toHaveAttribute('src', 'educacion-mock-url');
    expect(screen.getByAltText('Vivienda')).toHaveAttribute('src', 'vivienda-mock-url');
    expect(screen.getByAltText('Salud')).toHaveAttribute('src', 'salud-mock-url');
    expect(screen.getByAltText('Tecnología')).toHaveAttribute('src', 'tecnologia-mock-url');
  });

  it('debería renderizar todos los logos de alianzas', () => {
    render(<Home />);
    
    const allianceLogos = screen.getAllByAltText(/^aliado-/);
    expect(allianceLogos).toHaveLength(9); // 9 logos en el array logos
    
    // Verificar algunos logos específicos
    expect(screen.getByAltText('aliado-ACA')).toBeInTheDocument();
    expect(screen.getByAltText('aliado-Confetours')).toBeInTheDocument();
    expect(screen.getByAltText('aliado-Ecovehiculos')).toBeInTheDocument();
    expect(screen.getByAltText('aliado-Luxcarta')).toBeInTheDocument();
    expect(screen.getByAltText('aliado-Medplus')).toBeInTheDocument();
  });

  it('debería cerrar el popup al hacer clic en el botón de cerrar', async () => {
    const user = userEvent.setup();
    render(<Home />);
    
    // Abrir popup
    await user.click(screen.getByText('Educación'));
    expect(screen.getByText('La educación es la base del desarrollo personal y social.')).toBeInTheDocument();
    
    // Cerrar popup
    await user.click(screen.getByText('✖'));
    expect(screen.queryByText('La educación es la base del desarrollo personal y social.')).not.toBeInTheDocument();
  });

  it('debería cerrar el popup al hacer clic fuera del contenido', async () => {
    const user = userEvent.setup();
    render(<Home />);
    
    // Abrir popup
    await user.click(screen.getByText('Educación'));
    expect(screen.getByText('La educación es la base del desarrollo personal y social.')).toBeInTheDocument();
    
    // Cerrar popup haciendo clic fuera
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
      await user.click(overlay);
    }
    
    expect(screen.queryByText('La educación es la base del desarrollo personal y social.')).not.toBeInTheDocument();
  });

  it('debería renderizar los sliders de video e imágenes', () => {
    render(<Home />);
    
    const sliders = document.querySelectorAll('.mock-slider');
    expect(sliders).toHaveLength(2); // Uno para videos y otro para imágenes
  });

  it('debería tener la estructura correcta de secciones', () => {
    const { container } = render(<Home />);
    
    const presentationSection = container.querySelector('.presentation');
    const pillarsSection = container.querySelector('.pillars');
    const alliancesSection = container.querySelector('.alliances');
    
    expect(presentationSection).toBeInTheDocument();
    expect(pillarsSection).toBeInTheDocument();
    expect(alliancesSection).toBeInTheDocument();
  });

  it('debería prevenir la propagación al hacer clic dentro del popup', async () => {
    const user = userEvent.setup();
    render(<Home />);
    
    // Abrir popup
    await user.click(screen.getByText('Educación'));
    
    // Hacer clic dentro del contenido del popup
    const popupContent = document.querySelector('.popup-content');
    if (popupContent) {
      await user.click(popupContent);
    }
    
    // Verificar que el popup sigue abierto
    expect(screen.getByText('La educación es la base del desarrollo personal y social.')).toBeInTheDocument();
  });
});
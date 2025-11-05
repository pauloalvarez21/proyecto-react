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

// Mock de CookieConsent
jest.mock('./CookieConsent', () => {
  return function MockCookieConsent() {
    return <div data-testid="cookie-consent">Cookie Consent</div>;
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
jest.mock('../assets/image/img7.jpeg', () => 'img7-mock-url'); // ✅ Agregar este mock

// Mock para window.innerWidth
const originalInnerWidth = window.innerWidth;
beforeAll(() => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1024, // Desktop por defecto
  });
});

afterAll(() => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: originalInnerWidth,
  });
});

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset window width para cada test
    window.innerWidth = 1024;
  });

  it('debería renderizar el título de galería de videos', () => {
    render(<Home />);
    expect(screen.getByText('Galería de Videos')).toBeInTheDocument();
  });

  it('debería renderizar el título de galería de fotos', () => {
    render(<Home />);
    expect(screen.getByText('Galería de Fotos')).toBeInTheDocument();
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

  it('debería cerrar el popup al hacer clic fuera del contenido', async () => {
    const user = userEvent.setup();
    render(<Home />);
    
    // Abrir popup
    await user.click(screen.getByText('Educación'));
    expect(screen.getByText(/Pensando en el desarrollo y beneficio/)).toBeInTheDocument();
    
    // Cerrar popup haciendo clic fuera (en el overlay)
    const overlays = document.querySelectorAll('.popup-overlay');
    if (overlays.length > 0) {
      await user.click(overlays[0]);
    }
    
    expect(screen.queryByText(/Los procesos de educación y formación/)).not.toBeInTheDocument();
  });

  it('debería renderizar los sliders de video e imágenes', () => {
    render(<Home />);
    
    const sliders = document.querySelectorAll('.mock-slider');
    expect(sliders.length).toBeGreaterThanOrEqual(2); // Al menos 2 sliders (videos e imágenes)
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

  it('debería renderizar el componente CookieConsent', () => {
    render(<Home />);
    expect(screen.getByTestId('cookie-consent')).toBeInTheDocument();
  });

  it('debería renderizar iframes de YouTube', () => {
    render(<Home />);
    
    const iframes = screen.getAllByTitle('YouTube video player');
    expect(iframes.length).toBeGreaterThan(0);
    
    iframes.forEach(iframe => {
      expect(iframe).toHaveAttribute('allowFullScreen');
      expect(iframe).toHaveAttribute('src');
    });
  });

  it('debería manejar el estado de imagen seleccionada', async () => {
    const user = userEvent.setup();
    render(<Home />);
    
    // Encontrar y hacer clic en una imagen clickeable
    const clickableImages = screen.getAllByAltText(/slide-/);
    if (clickableImages.length > 0) {
      await user.click(clickableImages[0]);
      
      // Verificar que se abrió el popup de imagen
      const popupImages = document.querySelectorAll('.popup-img');
      expect(popupImages.length).toBeGreaterThan(0);
    }
  });
});
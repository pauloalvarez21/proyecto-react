import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CookieConsent from './CookieConsent';

// Mocks
jest.mock('./CookieConsent.css', () => ({}));
jest.mock('../assets/image/cookie.png', () => 'cookie-mock-url');

// Mock simple de js-cookie
jest.mock('js-cookie', () => ({
  get: jest.fn(() => undefined),
  set: jest.fn(),
}));

import Cookies from 'js-cookie';

const mockGet = Cookies.get as jest.Mock;
const mockSet = Cookies.set as jest.Mock;

describe('CookieConsent Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGet.mockReturnValue(undefined);
  });

  // Test básicos sin animaciones complejas
  it('debería mostrar el banner inicialmente', () => {
    render(<CookieConsent />);
    expect(screen.getByText(/🍪 Usamos cookies para mejorar tu experiencia/)).toBeInTheDocument();
  });

  it('no debería mostrar el banner con consentimiento previo', () => {
    mockGet.mockReturnValue('accepted');
    render(<CookieConsent />);
    expect(screen.queryByText(/🍪 Usamos cookies/)).not.toBeInTheDocument();
  });

  it('debería llamar Cookies.set al aceptar', async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);
    
    await user.click(screen.getByRole('button', { name: /aceptar/i }));
    
    expect(mockSet).toHaveBeenCalledWith('cookie_consent', 'accepted', { expires: 365 });
  });

  it('debería llamar Cookies.set al rechazar', async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);
    
    await user.click(screen.getByRole('button', { name: /rechazar/i }));
    
    expect(mockSet).toHaveBeenCalledWith('cookie_consent', 'rejected', { expires: 365 });
  });
});
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './Footer';

// Mock para CSS
jest.mock('./Footer.css', () => ({}));

// Mock de fetch global
global.fetch = jest.fn();

describe('Footer Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (fetch as jest.Mock).mockResolvedValue({
      text: jest.fn().mockResolvedValue('success'),
    });
  });

  it('debería renderizar el botón de contacto y el copyright', () => {
    render(<Footer />);
    
    expect(screen.getByText('📞 Contáctanos')).toBeInTheDocument();
    expect(screen.getByText(/© \d{4} Grupo Servitransporte/)).toBeInTheDocument();
  });

  it('debería abrir el modal al hacer clic en el botón de contacto', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    await user.click(screen.getByText('📞 Contáctanos'));
    
    expect(screen.getByText('Contáctanos')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tu correo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Escribe tu mensaje...')).toBeInTheDocument();
  });

  it('debería cerrar el modal al hacer clic en cancelar', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    await user.click(screen.getByText('📞 Contáctanos'));
    expect(screen.getByText('Contáctanos')).toBeInTheDocument();
    
    await user.click(screen.getByText('Cancelar'));
    expect(screen.queryByText('Contáctanos')).not.toBeInTheDocument();
  });

  it('debería mostrar error por nombre muy corto', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    await user.click(screen.getByText('📞 Contáctanos'));
    
    await user.type(screen.getByPlaceholderText('Tu nombre'), 'ab');
    await user.type(screen.getByPlaceholderText('Tu correo'), 'test@example.com');
    await user.type(screen.getByPlaceholderText('Escribe tu mensaje...'), 'Mensaje de prueba con más de 10 caracteres');
    
    await user.click(screen.getByText('Enviar'));
    
    await waitFor(() => {
      expect(screen.getByText('El nombre debe tener entre 3 y 50 caracteres.')).toBeInTheDocument();
    });
  });

  it('debería mostrar error por mensaje muy corto', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    await user.click(screen.getByText('📞 Contáctanos'));
    
    await user.type(screen.getByPlaceholderText('Tu nombre'), 'Juan Pérez');
    await user.type(screen.getByPlaceholderText('Tu correo'), 'test@example.com');
    await user.type(screen.getByPlaceholderText('Escribe tu mensaje...'), 'Corto');
    
    await user.click(screen.getByText('Enviar'));
    
    await waitFor(() => {
      expect(screen.getByText('El mensaje debe tener entre 10 y 500 caracteres.')).toBeInTheDocument();
    });
  });

  it('debería enviar el formulario exitosamente con datos válidos', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    await user.click(screen.getByText('📞 Contáctanos'));
    
    await user.type(screen.getByPlaceholderText('Tu nombre'), 'Juan Pérez');
    await user.type(screen.getByPlaceholderText('Tu correo'), 'test@example.com');
    await user.type(screen.getByPlaceholderText('Escribe tu mensaje...'), 'Este es un mensaje de prueba con más de 10 caracteres');
    
    await user.click(screen.getByText('Enviar'));
    
    await waitFor(() => {
      expect(screen.getByText('✅ Tu mensaje fue enviado correctamente.')).toBeInTheDocument();
    });
    
    expect(fetch).toHaveBeenCalledWith(
      'https://gruposervitrasporte.com/sendmail.php',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    );
  });

  it('debería manejar errores del servidor', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      text: jest.fn().mockResolvedValue('error'),
    });
    
    const user = userEvent.setup();
    render(<Footer />);
    
    await user.click(screen.getByText('📞 Contáctanos'));
    
    await user.type(screen.getByPlaceholderText('Tu nombre'), 'Juan Pérez');
    await user.type(screen.getByPlaceholderText('Tu correo'), 'test@example.com');
    await user.type(screen.getByPlaceholderText('Escribe tu mensaje...'), 'Este es un mensaje de prueba con más de 10 caracteres');
    
    await user.click(screen.getByText('Enviar'));
    
    await waitFor(() => {
      expect(screen.getByText('❌ Hubo un error al enviar el mensaje. Intenta nuevamente.')).toBeInTheDocument();
    });
  });

  it('debería sanitizar los inputs correctamente', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    await user.click(screen.getByText('📞 Contáctanos'));
    
    await user.type(screen.getByPlaceholderText('Tu nombre'), 'Juan\nPérez');
    await user.type(screen.getByPlaceholderText('Tu correo'), 'test@example.com');
    await user.type(screen.getByPlaceholderText('Escribe tu mensaje...'), 'Mensaje\ncon\nsaltos\nde\nlínea');
    
    await user.click(screen.getByText('Enviar'));
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });
  });

  it('debería limpiar el estado al cerrar el modal', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    await user.click(screen.getByText('📞 Contáctanos'));
    await user.type(screen.getByPlaceholderText('Tu nombre'), 'Juan Pérez');
    await user.click(screen.getByText('Cancelar'));
    
    await user.click(screen.getByText('📞 Contáctanos'));
    expect(screen.getByPlaceholderText('Tu nombre')).toHaveValue('');
  });
});
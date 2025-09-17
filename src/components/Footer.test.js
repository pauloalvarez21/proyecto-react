import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Footer from './Footer';
// Mock de fetch global
global.fetch = jest.fn();
// Mock para CSS
jest.mock('./Footer.css', () => ({}));
describe('Footer Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        fetch.mockReset();
    });
    it('debería renderizar el botón de contacto inicialmente', () => {
        render(_jsx(Footer, {}));
        expect(screen.getByText('📞 Contáctanos')).toBeInTheDocument();
    });
    it('debería abrir el modal al hacer clic en el botón de contacto', () => {
        render(_jsx(Footer, {}));
        const button = screen.getByText('📞 Contáctanos');
        fireEvent.click(button);
        expect(screen.getByText('Contáctanos')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Tu correo')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Escribe tu mensaje...')).toBeInTheDocument();
    });
    it('debería cerrar el modal al hacer clic en cancelar', () => {
        render(_jsx(Footer, {}));
        // Abrir modal
        fireEvent.click(screen.getByText('📞 Contáctanos'));
        expect(screen.getByText('Contáctanos')).toBeInTheDocument();
        // Cerrar modal
        fireEvent.click(screen.getByText('Cancelar'));
        expect(screen.queryByText('Contáctanos')).not.toBeInTheDocument();
    });
    it('debería mostrar error cuando el nombre es muy corto', async () => {
        render(_jsx(Footer, {}));
        // Abrir modal
        fireEvent.click(screen.getByText('📞 Contáctanos'));
        // Llenar formulario con datos inválidos
        fireEvent.change(screen.getByPlaceholderText('Tu nombre'), {
            target: { value: 'ab' } // Nombre muy corto
        });
        fireEvent.change(screen.getByPlaceholderText('Tu correo'), {
            target: { value: 'test@example.com' }
        });
        fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje...'), {
            target: { value: 'Este es un mensaje de prueba válido' }
        });
        // Enviar formulario
        fireEvent.click(screen.getByText('Enviar'));
        expect(await screen.findByText('El nombre debe tener entre 3 y 50 caracteres.')).toBeInTheDocument();
    });
    it('debería mostrar error cuando el mensaje es muy corto', async () => {
        render(_jsx(Footer, {}));
        fireEvent.click(screen.getByText('📞 Contáctanos'));
        fireEvent.change(screen.getByPlaceholderText('Tu nombre'), {
            target: { value: 'Juan Pérez' }
        });
        fireEvent.change(screen.getByPlaceholderText('Tu correo'), {
            target: { value: 'test@example.com' }
        });
        fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje...'), {
            target: { value: 'Corto' } // Mensaje muy corto
        });
        fireEvent.click(screen.getByText('Enviar'));
        expect(await screen.findByText('El mensaje debe tener entre 10 y 500 caracteres.')).toBeInTheDocument();
    });
    it('debería enviar el formulario exitosamente', async () => {
        // Mock de fetch exitoso
        fetch.mockResolvedValueOnce({
            text: jest.fn().mockResolvedValue('success')
        });
        render(_jsx(Footer, {}));
        fireEvent.click(screen.getByText('📞 Contáctanos'));
        // Llenar formulario con datos válidos
        fireEvent.change(screen.getByPlaceholderText('Tu nombre'), {
            target: { value: 'Juan Pérez' }
        });
        fireEvent.change(screen.getByPlaceholderText('Tu correo'), {
            target: { value: 'test@example.com' }
        });
        fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje...'), {
            target: { value: 'Este es un mensaje de prueba válido con más de 10 caracteres' }
        });
        fireEvent.click(screen.getByText('Enviar'));
        await waitFor(() => {
            expect(screen.getByText('✅ Tu mensaje fue enviado correctamente.')).toBeInTheDocument();
        });
        expect(fetch).toHaveBeenCalledWith('https://gruposervitrasporte.com/sendmail.php', expect.objectContaining({
            method: 'POST',
            body: expect.any(FormData)
        }));
    });
    it('debería mostrar error cuando el servidor falla', async () => {
        // Mock de fetch fallido
        fetch.mockResolvedValueOnce({
            text: jest.fn().mockResolvedValue('error')
        });
        render(_jsx(Footer, {}));
        fireEvent.click(screen.getByText('📞 Contáctanos'));
        fireEvent.change(screen.getByPlaceholderText('Tu nombre'), {
            target: { value: 'Juan Pérez' }
        });
        fireEvent.change(screen.getByPlaceholderText('Tu correo'), {
            target: { value: 'test@example.com' }
        });
        fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje...'), {
            target: { value: 'Este es un mensaje de prueba válido con más de 10 caracteres' }
        });
        fireEvent.click(screen.getByText('Enviar'));
        await waitFor(() => {
            expect(screen.getByText('❌ Hubo un error al enviar el mensaje. Intenta nuevamente.')).toBeInTheDocument();
        });
    });
    it('debería mostrar error de conexión cuando fetch falla', async () => {
        // Mock de fetch que lanza error
        fetch.mockRejectedValueOnce(new Error('Network error'));
        render(_jsx(Footer, {}));
        fireEvent.click(screen.getByText('📞 Contáctanos'));
        fireEvent.change(screen.getByPlaceholderText('Tu nombre'), {
            target: { value: 'Juan Pérez' }
        });
        fireEvent.change(screen.getByPlaceholderText('Tu correo'), {
            target: { value: 'test@example.com' }
        });
        fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje...'), {
            target: { value: 'Este es un mensaje de prueba válido con más de 10 caracteres' }
        });
        fireEvent.click(screen.getByText('Enviar'));
        await waitFor(() => {
            expect(screen.getByText(/⚠️ No se pudo conectar con el servidor./)).toBeInTheDocument();
        });
    });
    it('debería mostrar el copyright con el año actual', () => {
        render(_jsx(Footer, {}));
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`© ${currentYear} Grupo Servitransporte. Todos los derechos reservados.`)).toBeInTheDocument();
    });
});

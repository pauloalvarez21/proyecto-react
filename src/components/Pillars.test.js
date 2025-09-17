import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Pillars from './Pillars';
// Mocks para CSS e imágenes
jest.mock('./Pillars.css', () => ({}));
jest.mock('../assets/image/educacion.png', () => 'educacion-mock-url');
jest.mock('../assets/image/vivienda.png', () => 'vivienda-mock-url');
jest.mock('../assets/image/salud.png', () => 'salud-mock-url');
jest.mock('../assets/image/tecnologia.png', () => 'tecnologia-mock-url');
describe('Pillars Component', () => {
    it('debería renderizar el título correctamente', () => {
        render(_jsx(Pillars, {}));
        expect(screen.getByText('4 PILARES FUNDAMENTALES')).toBeInTheDocument();
    });
    it('debería renderizar los 4 pilares', () => {
        render(_jsx(Pillars, {}));
        const pillarElements = screen.getAllByText(/Educación|Vivienda|Salud|Tecnología/);
        expect(pillarElements).toHaveLength(4);
    });
    it('debería renderizar todos los pilares con sus labels correctos', () => {
        render(_jsx(Pillars, {}));
        expect(screen.getByText('Educación')).toBeInTheDocument();
        expect(screen.getByText('Vivienda')).toBeInTheDocument();
        expect(screen.getByText('Salud')).toBeInTheDocument();
        expect(screen.getByText('Tecnología')).toBeInTheDocument();
    });
    it('debería renderizar las imágenes de los pilares', () => {
        render(_jsx(Pillars, {}));
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(4);
        expect(screen.getByAltText('Educación')).toBeInTheDocument();
        expect(screen.getByAltText('Vivienda')).toBeInTheDocument();
        expect(screen.getByAltText('Salud')).toBeInTheDocument();
        expect(screen.getByAltText('Tecnología')).toBeInTheDocument();
    });
    it('debería tener los src correctos en las imágenes', () => {
        render(_jsx(Pillars, {}));
        expect(screen.getByAltText('Educación')).toHaveAttribute('src', 'educacion-mock-url');
        expect(screen.getByAltText('Vivienda')).toHaveAttribute('src', 'vivienda-mock-url');
        expect(screen.getByAltText('Salud')).toHaveAttribute('src', 'salud-mock-url');
        expect(screen.getByAltText('Tecnología')).toHaveAttribute('src', 'tecnologia-mock-url');
    });
    it('debería renderizar los pilares en el orden correcto', () => {
        render(_jsx(Pillars, {}));
        const paragraphs = screen.getAllByText(/Educación|Vivienda|Salud|Tecnología/);
        const texts = paragraphs.map(p => p.textContent);
        expect(texts).toEqual(['Educación', 'Vivienda', 'Salud', 'Tecnología']);
    });
    it('debería tener la estructura semántica correcta', () => {
        render(_jsx(Pillars, {}));
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
        expect(screen.getByText('4 PILARES FUNDAMENTALES')).toBeInTheDocument();
    });
});

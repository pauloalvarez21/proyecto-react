import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Marketing from './Marketing';
// Mocks para CSS e imágenes
jest.mock('./Marketing.css', () => ({}));
jest.mock('./marketing1.png', () => 'marketing1-mock-url');
jest.mock('./marketing2.png', () => 'marketing2-mock-url');
jest.mock('./marketing3.png', () => 'marketing3-mock-url');
jest.mock('../../assets/image/grupo.png', () => 'grupo-mock-url');
describe('Marketing Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('debería renderizar el título principal "Agencia de Marketing y Publicidad"', () => {
        render(_jsx(Marketing, {}));
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Agencia de');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Marketing y');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Publicidad');
    });
    it('debería renderizar las 3 imágenes de marketing', () => {
        render(_jsx(Marketing, {}));
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(4); // 3 imágenes de items + 1 logo grupo
        expect(screen.getByAltText('Estrategias Innovadoras')).toBeInTheDocument();
        expect(screen.getByAltText('Colaboraciones')).toBeInTheDocument();
        expect(screen.getByAltText('Desarrollo de Contenidos')).toBeInTheDocument();
        expect(screen.getByAltText('Logo Grupo Servitransporte')).toBeInTheDocument();
    });
    it('debería tener los src correctos en las imágenes', () => {
        render(_jsx(Marketing, {}));
        expect(screen.getByAltText('Estrategias Innovadoras')).toHaveAttribute('src', 'marketing1-mock-url');
        expect(screen.getByAltText('Colaboraciones')).toHaveAttribute('src', 'marketing2-mock-url');
        expect(screen.getByAltText('Desarrollo de Contenidos')).toHaveAttribute('src', 'marketing3-mock-url');
        expect(screen.getByAltText('Logo Grupo Servitransporte')).toHaveAttribute('src', 'grupo-mock-url');
    });
    it('debería renderizar los títulos de los servicios de marketing', () => {
        render(_jsx(Marketing, {}));
        expect(screen.getByText('Estrategias Innovadoras')).toBeInTheDocument();
        expect(screen.getByText('Colaboraciones')).toBeInTheDocument();
        expect(screen.getByText('Desarrollo de Contenidos')).toBeInTheDocument();
    });
    it('debería renderizar la lista de estrategias innovadoras', () => {
        render(_jsx(Marketing, {}));
        expect(screen.getByText('Neuro marketing para entender y captar mejor a nuestra audiencia.')).toBeInTheDocument();
        expect(screen.getByText('Comunicación asertiva')).toBeInTheDocument();
        // Verificar que es una lista
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(2);
    });
    it('debería renderizar la descripción de colaboraciones', () => {
        render(_jsx(Marketing, {}));
        expect(screen.getByText('Trabajo conjunto con universidades y el SENA para el desarrollo de talento y conocimiento.')).toBeInTheDocument();
    });
    it('debería renderizar la descripción de desarrollo de contenidos', () => {
        render(_jsx(Marketing, {}));
        expect(screen.getByText('Creación de contenido audiovisual de alta calidad para nuestras campañas publicitarias.')).toBeInTheDocument();
    });
    it('debería renderizar el logo del grupo con el ancho correcto', () => {
        render(_jsx(Marketing, {}));
        const grupoLogo = screen.getByAltText('Logo Grupo Servitransporte');
        expect(grupoLogo).toHaveAttribute('width', '200');
        expect(grupoLogo).toHaveClass('logo-grupo');
    });
});

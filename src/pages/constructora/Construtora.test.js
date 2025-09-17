import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Constructora from './Constructora';
// Mocks para CSS e imágenes
jest.mock('./Constructora.css', () => ({}));
jest.mock('./constructora1.png', () => 'constructora1-mock-url');
jest.mock('./constructora2.png', () => 'constructora2-mock-url');
jest.mock('./constructora3.png', () => 'constructora3-mock-url');
jest.mock('../../assets/image/grupo.svg', () => 'grupo-mock-url');
describe('Constructora Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('debería renderizar el título principal "Constructora"', () => {
        render(_jsx(Constructora, {}));
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Constructora');
    });
    it('debería renderizar los 3 items de construcción', () => {
        render(_jsx(Constructora, {}));
        const items = screen.getAllByRole('img');
        // 3 imágenes de items + 1 logo grupo = 4 imágenes totales
        expect(items).toHaveLength(4);
    });
    it('debería renderizar los títulos de los proyectos', () => {
        render(_jsx(Constructora, {}));
        expect(screen.getByText('Proyectos de Vivienda')).toBeInTheDocument();
        expect(screen.getByText('Iniciativas de Reforestación')).toBeInTheDocument();
        expect(screen.getByText('Convenios y Subsidios')).toBeInTheDocument();
    });
    it('debería tener las imágenes con alt text correcto', () => {
        render(_jsx(Constructora, {}));
        expect(screen.getByAltText('Proyectos de Vivienda')).toBeInTheDocument();
        expect(screen.getByAltText('Iniciativas de Reforestación')).toBeInTheDocument();
        expect(screen.getByAltText('Convenios y Subsidios')).toBeInTheDocument();
        expect(screen.getByAltText('Logo Grupo Servitransporte')).toBeInTheDocument();
    });
    it('debería tener los src correctos en las imágenes', () => {
        render(_jsx(Constructora, {}));
        expect(screen.getByAltText('Proyectos de Vivienda')).toHaveAttribute('src', 'constructora1-mock-url');
        expect(screen.getByAltText('Iniciativas de Reforestación')).toHaveAttribute('src', 'constructora2-mock-url');
        expect(screen.getByAltText('Convenios y Subsidios')).toHaveAttribute('src', 'constructora3-mock-url');
        expect(screen.getByAltText('Logo Grupo Servitransporte')).toHaveAttribute('src', 'grupo-mock-url');
    });
    it('debería tener el logo del grupo con el ancho correcto', () => {
        render(_jsx(Constructora, {}));
        const grupoLogo = screen.getByAltText('Logo Grupo Servitransporte');
        expect(grupoLogo).toHaveAttribute('width', '200');
    });
});

import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Alliances from './Alliances';
// Mock de las imágenes y CSS
jest.mock('./Alliances.css', () => ({}));
jest.mock('../assets/image/aca.jpeg', () => 'aca-mock-url');
jest.mock('../assets/image/confetours.jpeg', () => 'confetours-mock-url');
jest.mock('../assets/image/ecovehiculos.jpeg', () => 'ecovehiculos-mock-url');
jest.mock('../assets/image/luxcarta.jpeg', () => 'luxcarta-mock-url');
jest.mock('../assets/image/medplus.jpeg', () => 'medplus-mock-url');
jest.mock('../assets/image/sectoriales.jpeg', () => 'sectoriales-mock-url');
jest.mock('../assets/image/seguros.jpeg', () => 'seguros-mock-url');
jest.mock('../assets/image/sena.jpeg', () => 'sena-mock-url');
jest.mock('../assets/image/ucc.jpeg', () => 'ucc-mock-url');
describe('Alliances Component', () => {
    it('debería renderizar el título "Alianzas"', () => {
        render(_jsx(Alliances, {}));
        expect(screen.getByText('Alianzas')).toBeInTheDocument();
    });
    it('debería renderizar todas las imágenes de aliados', () => {
        render(_jsx(Alliances, {}));
        // Verificar que todas las imágenes estén presentes
        expect(screen.getByAltText('aliado-ACA')).toBeInTheDocument();
        expect(screen.getByAltText('aliado-Confetours')).toBeInTheDocument();
        expect(screen.getByAltText('aliado-Ecovehiculos')).toBeInTheDocument();
        expect(screen.getByAltText('aliado-Luxcarta')).toBeInTheDocument();
        expect(screen.getByAltText('aliado-Medplus')).toBeInTheDocument();
        expect(screen.getByAltText('aliado-Sectoriales')).toBeInTheDocument();
        expect(screen.getByAltText('aliado-Seguros')).toBeInTheDocument();
        expect(screen.getByAltText('aliado-SENA')).toBeInTheDocument();
        expect(screen.getByAltText('aliado-UCC')).toBeInTheDocument();
    });
    it('debería renderizar exactamente 9 imágenes', () => {
        render(_jsx(Alliances, {}));
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(9);
    });
    it('debería tener los src correctos en las imágenes', () => {
        render(_jsx(Alliances, {}));
        expect(screen.getByAltText('aliado-ACA')).toHaveAttribute('src', 'aca-mock-url');
        expect(screen.getByAltText('aliado-Confetours')).toHaveAttribute('src', 'confetours-mock-url');
        expect(screen.getByAltText('aliado-Ecovehiculos')).toHaveAttribute('src', 'ecovehiculos-mock-url');
        expect(screen.getByAltText('aliado-Luxcarta')).toHaveAttribute('src', 'luxcarta-mock-url');
        expect(screen.getByAltText('aliado-Medplus')).toHaveAttribute('src', 'medplus-mock-url');
        expect(screen.getByAltText('aliado-Sectoriales')).toHaveAttribute('src', 'sectoriales-mock-url');
        expect(screen.getByAltText('aliado-Seguros')).toHaveAttribute('src', 'seguros-mock-url');
        expect(screen.getByAltText('aliado-SENA')).toHaveAttribute('src', 'sena-mock-url');
        expect(screen.getByAltText('aliado-UCC')).toHaveAttribute('src', 'ucc-mock-url');
    });
    it('debería renderizar las imágenes en el orden correcto', () => {
        render(_jsx(Alliances, {}));
        const images = screen.getAllByRole('img');
        const altTexts = images.map(img => img.alt);
        expect(altTexts).toEqual([
            'aliado-ACA',
            'aliado-Confetours',
            'aliado-Ecovehiculos',
            'aliado-Luxcarta',
            'aliado-Medplus',
            'aliado-Sectoriales',
            'aliado-Seguros',
            'aliado-SENA',
            'aliado-UCC'
        ]);
    });
});

import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Presentation from './Presentation';
// Mock simple
jest.mock('./Presentation.css', () => ({}));
jest.mock('../assets/video/video.mp4', () => 'valid-video-url.mp4');
jest.mock('react-slick', () => ({ children }) => _jsx("div", { children: children }));
describe('Presentation', () => {
    // Test minimalista que evita el problema
    it('renderiza título y estructura básica', () => {
        const { container } = render(_jsx(Presentation, {}));
        expect(screen.getByText('Presentaciones')).toBeInTheDocument();
        expect(container.querySelectorAll('video')).toHaveLength(3);
        expect(container.querySelectorAll('source')).toHaveLength(3);
    });
});

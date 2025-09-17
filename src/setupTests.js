// setupTests.ts
import { TextEncoder, TextDecoder } from "util";
import "@testing-library/jest-dom";
// Aseguramos que Jest tenga las implementaciones correctas (jsdom no las expone)
Object.assign(global, {
    TextEncoder: TextEncoder,
    TextDecoder: TextDecoder,
});

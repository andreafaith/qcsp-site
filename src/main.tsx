
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// CRITICAL: Apply ColorScheme styles immediately before anything else renders
import ColorScheme from './components/common/ColorScheme';
const colorSchemeElement = document.createElement('div');
colorSchemeElement.id = 'color-scheme-root';
document.body.insertBefore(colorSchemeElement, document.body.firstChild);
createRoot(colorSchemeElement).render(<ColorScheme />);

// Then render the main app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(<App />);

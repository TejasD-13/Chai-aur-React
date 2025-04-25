import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom app</h1>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);

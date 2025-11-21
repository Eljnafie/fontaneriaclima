import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Iniciando aplicación FontaneriaClima...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("ERROR CRÍTICO: No se encontró el elemento con id 'root' en el HTML.");
  throw new Error("No se encontró el elemento root");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("Renderizado de React completado.");
} catch (error) {
  console.error("Error al renderizar la aplicación:", error);
}
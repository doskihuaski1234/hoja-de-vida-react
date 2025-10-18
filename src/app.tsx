import { useState } from 'react';
import './App.css';

function App() {
  const [section, setSection] = useState<string | null>(null); // null = pantalla principal

  const goBack = () => setSection(null); // volver a pantalla principal

  // Contenido de cada sección
  const SectionContent = () => {
    switch (section) {
      case 'perfil':
        return (
          <div className="full-screen">
            <h2>Perfil</h2>
            <p>
              Ingeniero en sistemas con experiencia en desarrollo web,
              Node.js y React. Apasionado por crear interfaces limpias y eficientes.
            </p>
            <button onClick={goBack}>← Volver</button>
          </div>
        );
      case 'experiencia':
        return (
          <div className="full-screen">
            <h2>Experiencia</h2>
            <ul>
              <li>Desarrollador Full Stack en Proyectos  (2025)</li>
              <li>Desarrollador Frontend en Empresa  (2025)</li>
            </ul>
            <button onClick={goBack}>← Volver</button>
          </div>
        );
      case 'educacion':
        return (
          <div className="full-screen">
            <h2>Educación</h2>
            <ul>
              <li>Ingeniería en Sistemas - Universidad Mariano Gálvez</li>
              <li>Curso de React + Node.js - FreeCodeCamp</li>
            </ul>
            <button onClick={goBack}>← Volver</button>
          </div>
        );
      case 'portafolio':
        return (
          <div className="full-screen">
            <h2>Portafolio</h2>
            <ul>
              <li><a href="https://github.com/alexander/proyecto1" target="_blank" rel="noopener noreferrer">Proyecto 1 - Sistema de Nóminas</a></li>
              <li><a href="https://github.com/alexander/proyecto2" target="_blank" rel="noopener noreferrer">Proyecto 2 - Tienda de Computadoras</a></li>
              <li><a href="https://github.com/doskihuaski1234/hoja-de-vida-react" target="_blank" rel="noopener noreferrer">Hoja de Vida Web</a></li>
            </ul>
            <button onClick={goBack}>← Volver</button>
          </div>
        );
      case 'contacto':
        return (
          <div className="full-screen">
            <h2>Contacto</h2>
            <div className="contact-buttons">
              <button onClick={() => window.open('https://github.com/doskihuaski1234', '_blank')}>💻 GitHub</button>
              <button onClick={() => window.open('https://www.linkedin.com/in/alexander-marroquin-junior-738378278/', '_blank')}>🔗 LinkedIn</button>
              <button onClick={() => window.open('https://wa.me/50238159185', '_blank')}>📱 WhatsApp</button>
            </div>
            <button onClick={goBack}>← Volver</button>
          </div>
        );
      default:
        return null;
    }
  };

  // Si hay sección seleccionada, mostramos la “pantalla completa”
  if (section) {
    return <SectionContent />;
  }

  // Pantalla principal
  return (
    <div className="app-container">
      <header>
        <h1>PAOLO ALEXANDER MARROQUIN DE LA CRUZ</h1>
        <nav>
          <button onClick={() => setSection('perfil')}>Perfil</button>
          <button onClick={() => setSection('experiencia')}>Experiencia</button>
          <button onClick={() => setSection('educacion')}>Educación</button>
          <button onClick={() => setSection('portafolio')}>Portafolio</button>
          <button onClick={() => setSection('contacto')}>Contacto</button>
        </nav>
      </header>

      <main>
        <h2>Bienvenido a mi hoja de vida web</h2>
        <p>Selecciona una sección para ver más detalles.</p>
      </main>

      <footer>
        <p>© 2025 Alexander Marroquín</p>
      </footer>
    </div>
  );
}

export default App;

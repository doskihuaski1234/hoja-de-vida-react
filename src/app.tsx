import { useState } from 'react';
import './App.css';

function App() {
  const [section, setSection] = useState('perfil');

  return (
    <div className="app-container">
      <header>
        <h1>Alexander Marroquín</h1>
        <nav>
          <button onClick={() => setSection('perfil')}>Perfil</button>
          <button onClick={() => setSection('experiencia')}>Experiencia</button>
          <button onClick={() => setSection('educacion')}>Educación</button>
          <button onClick={() => setSection('portafolio')}>Portafolio</button>
          <button onClick={() => setSection('contacto')}>Contacto</button>
        </nav>
      </header>

      <main>
        {section === 'perfil' && (
          <section>
            <h2>Perfil</h2>
            <p>
              Ingeniero en sistemas con experiencia en desarrollo web,
              Node.js y React. Apasionado por crear interfaces limpias y eficientes.
            </p>
          </section>
        )}

        {section === 'experiencia' && (
          <section>
            <h2>Experiencia</h2>
            <ul>
              <li>Desarrollador Full Stack en Proyecto XYZ (2024)</li>
              <li>Desarrollador Frontend en Empresa ABC (2023)</li>
            </ul>
          </section>
        )}

        {section === 'educacion' && (
          <section>
            <h2>Educación</h2>
            <ul>
              <li>Ingeniería en Sistemas - Universidad Mariano Gálvez</li>
              <li>Curso de React + Node.js - FreeCodeCamp</li>
            </ul>
          </section>
        )}

        {section === 'portafolio' && (
          <section>
            <h2>Portafolio</h2>
            <ul>
              <li>
                <a
                  href="https://github.com/alexander/proyecto1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Proyecto 1 - Sistema de Nóminas
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/alexander/proyecto2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Proyecto 2 - Tienda de Computadoras
                </a>
              </li>
              <li>
                <a
                  href="https://alexander.github.io/hoja-de-vida"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hoja de Vida Web
                </a>
              </li>
            </ul>
          </section>
        )}

        {section === 'contacto' && (
          <section className="contacto-section">
            <h2>Contacto</h2>
            <div className="contact-buttons">
              <button
                onClick={() => window.open('https://github.com/alexander', '_blank')}
              >
                💻 GitHub
              </button>
              <button
                onClick={() => window.open('https://www.linkedin.com/feed/', '_blank')}
              >
                🔗 LinkedIn
              </button>
              <button
                onClick={() => window.open('https://wa.me/50238159185', '_blank')}
              >
                📱 WhatsApp
              </button>
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>© 2025 Alexander Marroquín</p>
      </footer>

      {/* 🧭 Botón lateral flotante */}
      <button
        className="floating-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </div>
  );
}

export default App;

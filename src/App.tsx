import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import './App.css';
import teddy from './assets/teddy.jpg';
import cv from './assets/CV-Teddy-Hernandez.pdf'; // ✅ Importamos el PDF

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={teddy} alt="Foto de Teddy" className="profile-pic" />
        <h1>Teddy Leonardo Hernández Pérez</h1>
        <p className="subtitle">
          Desarrollador Web en formación | Apasionado por la tecnología y la electricidad
        </p>
        {/* ✅ Botón para descargar CV */}
        <a href={cv} download className="btn-download">
          <FaDownload /> Descargar CV
        </a>
      </header>

      <section className="info">
        <h2>Información Personal</h2>
        <ul>
          <li><strong>Correo:</strong> teddyhernandezp02@gmail.com</li>
          <li><strong>Teléfono:</strong> 58169011</li>
        </ul>
      </section>

      <section className="perfil">
        <h2>Perfil</h2>
        <p>
          Soy un desarrollador en formación apasionado por React, bases de datos y electricidad.
          Actualmente soy estudiante activo de Ingeniería en Sistemas, con interés en la tecnología,
          innovación y proyectos que integren software y hardware.
        </p>
      </section>

      <section className="educacion">
        <h2>Educación</h2>
        <ul>
          <li><strong>Primaria:</strong> Francisco Orantes</li>
          <li><strong>Secundaria:</strong> INEB</li>
          <li><strong>Carrera:</strong> Bachillerato en Ciencias y Letras con orientación en Electricidad (Colegio Tecnológico de Informática)</li>
          <li><strong>Universidad:</strong> Estudiante activo de Ingeniería en Sistemas (8º semestre)</li>
        </ul>
      </section>

      <section className="habilidades">
        <h2>Habilidades</h2>
        <ul>
          <li>Programación en JavaScript/TypeScript</li>
          <li>HTML & CSS</li>
          <li>React</li>
          <li>Manejo de Git y GitHub</li>
          <li>Electricidad básica y conexiones</li>
          <li>Instalaciones eléctricas residenciales</li>
        </ul>
      </section>

      <section className="redes">
        <h2>Redes Sociales</h2>
        <div className="icons">
          <a href="https://github.com/leotedd" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './navbar.css';
import { GiDragonOrb } from "react-icons/gi";

const Navbar = () => {
  // Definir un estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el clic en la hamburguesa
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambiar el estado de abierto/cerrado
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="icon"><GiDragonOrb /></span> 
        <span className="logo-text">Friki</span>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      {/* Usar el estado `isOpen` para controlar la clase `show` */}
      <ul className={`navbar-menu ${isOpen ? 'show' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Disabled</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

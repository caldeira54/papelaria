import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./style.css";

import logo from "../../assets/logo.png";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alterarMenu() {
    setMenuAberto(!menuAberto);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo-container">
          <img
            src={logo}
            alt="Logo Papelmix Papelaria e Presentes"
            className="logo"
          />
        </a>

        <button
          className="botao-menu"
          onClick={alterarMenu}
          aria-label="Abrir ou fechar menu"
          aria-expanded={menuAberto}
        >
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`menu ${menuAberto ? "menu-aberto" : ""}`}>
          <Link to='/papelaria' onClick={fecharMenu}>Início</Link>
          <Link to='/produtos' onClick={fecharMenu}>Produtos</Link>
          <Link to='/materiais' onClick={fecharMenu}>Material Escolar</Link>
          <Link onClick={fecharMenu}>Escritório</Link>
          <Link onClick={fecharMenu}>Presentes</Link>
          <Link onClick={fecharMenu}>Promoções</Link>
          <Link onClick={fecharMenu}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}
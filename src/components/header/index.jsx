import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
          <a href="#" onClick={fecharMenu}>Início</a>
          <a href="#produtos" onClick={fecharMenu}>Produtos</a>
          <a href="#material-escolar" onClick={fecharMenu}>Material Escolar</a>
          <a href="#escritorio" onClick={fecharMenu}>Escritório</a>
          <a href="#presentes" onClick={fecharMenu}>Presentes</a>
          <a href="#promocoes" onClick={fecharMenu}>Promoções</a>
          <a href="#contato" onClick={fecharMenu}>Contato</a>
        </nav>
      </div>
    </header>
  );
}
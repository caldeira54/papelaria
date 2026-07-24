import React from "react";

import logo from "../../assets/logo.png";

import './style.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <img src={logo} alt="Papelmix" className="logo" />

                <nav className="menu">
                    <a href="#">Início</a>
                    <a href="#">Produtos</a>
                    <a href="#">Material Escolar</a>
                    <a href="#">Escritório</a>
                    <a href="#">Presentes</a>
                    <a href="#">Promoções</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    );
}
import React from "react";

import {
    FaBook,
    FaPenFancy,
    FaSchool,
    FaBriefcase,
    FaPalette,
    FaGift,
    FaPuzzlePiece,
    FaFileAlt,
} from "react-icons/fa";

import "./style.css";

export default function Categorias() {
    return (
        <section className="categorias">
            <div className="titulo">
                <span>Categorias</span>
                <h2>Encontre tudo o que você precisa</h2>
                <p>Produtos organizados para facilitar sua compra.</p>
            </div>
            <div className="categorias-grid">
                <a href="" className="categoria">
                    <FaBook />
                    <h3>Material Escolar</h3>
                </a>
                <a href="" className="categoria">
                    <FaPenFancy />
                    <h3>Escrita</h3>
                </a>
                <a href="" className="categoria">
                    <FaSchool />
                    <h3>Mochilas</h3>
                </a>
                <a href="" className="categoria">
                    <FaBriefcase />
                    <h3>Escritório</h3>
                </a>
                <a href="" className="categoria">
                    <FaPalette />
                    <h3>Artes</h3>
                </a>
                <a href="" className="categoria">
                    <FaGift />
                    <h3>Presentes</h3>
                </a>
                <a href="" className="categoria">
                    <FaPuzzlePiece />
                    <h3>Brinquedos</h3>
                </a>
                <a href="" className="categoria">
                    <FaFileAlt />
                    <h3>Papel</h3>
                </a>
            </div>
        </section>
    );
}
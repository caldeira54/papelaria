import React from "react";

import {
    FaInstagram,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope
} from "react-icons/fa";

import "./style.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h2>PAPELMIX</h2>
                    <p>Papelaria & Presentes</p>
                    <p>
                        Tudo para sua criatividade, estudos,
                        escritório e presentes especiais.
                    </p>
                </div>
                <div className="footer-col">
                    <h3>Institucional</h3>
                    <a href="#">Início</a>
                    <a href="#">Produtos</a>
                    <a href="#">Promoções</a>
                    <a href="#">Contato</a>
                </div>
                <div className="footer-col">
                    <h3>Categorias</h3>
                    <a href="#">Material Escolar</a>
                    <a href="#">Escritório</a>
                    <a href="#">Presentes</a>
                    <a href="#">Artes</a>
                </div>
                <div className="footer-col">
                    <h3>Contato</h3>
                    <p>
                        <FaMapMarkerAlt />
                        Rua Exemplo, 123
                    </p>
                    <p>
                        <FaPhoneAlt />
                        (38) 99999-9999
                    </p>
                    <p>
                        <FaEnvelope />
                        contato@papelmix.com.br
                    </p>

                    <div className="redes">
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                © 2026 Papelmix Papelaria & Presentes - Todos os direitos reservados.
            </div>
        </footer>
    );
}
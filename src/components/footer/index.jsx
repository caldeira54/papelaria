import React from "react";
import { Link } from "react-router-dom";

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
                    <Link to='/papelaria'>Início</Link>
                    <Link >Produtos</Link>
                    <Link >Promoções</Link>
                    <Link >Contato</Link>
                </div>
                <div className="footer-col">
                    <h3>Categorias</h3>
                    <Link >Material Escolar</Link>
                    <Link >Escritório</Link>
                    <Link >Presentes</Link>
                    <Link >Artes</Link>
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
                        <Link href="#">
                            <FaInstagram />
                        </Link>
                        <Link href="#">
                            <FaWhatsapp />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                © 2026 Papelmix Papelaria & Presentes - Todos os direitos reservados.
            </div>
        </footer>
    );
}
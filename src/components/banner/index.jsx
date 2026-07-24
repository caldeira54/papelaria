import React from "react";

import bannerImagem from "../../assets/banner.png";

import "./style.css";

export default function Banner() {
    return (
        <section className="banner">
            <div className="banner-conteudo">
                <div className="banner-texto">
                    <span className="banner-destaque">Papelaria, presentes e brinquedos</span>
                    <h1>Tudo o que você precisa em um só lugar</h1>
                    <p>
                        Encontre materiais escolares, produtos para escritório,
                        presentes, itens de arte e muito mais.
                    </p>
                    <div className="banner-botoes">
                        <a href="#produtos" className="botao botao-principal">Ver produtos</a>
                        <a href="#promocoes" className="botao botao-secundario">Ver promoções</a>
                    </div>
                </div>
                <div className="banner-imagem">
                    <div className="forma forma-amarela"></div>
                    <div className="forma forma-vermelha"></div>
                    <img
                        src={bannerImagem}
                        alt="Materiais escolares e produtos da Papelmix"
                    />
                </div>
            </div>
        </section>
    );
}
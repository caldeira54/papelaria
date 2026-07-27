import React from "react";

import "./style.css";

export default function CardProduto({ produto }) {
    return (
        <article className="card-produto">
            <div className="produto-imagem">
                {produto.promocao && (
                    <span className="produto-selo">Oferta</span>
                )}
                <img src={produto.imagem} alt={produto.nome} />
            </div>
            <div className="produto-informacoes">
                <span className="produto-categoria">
                    {produto.categoria}
                </span>
                <h3>{produto.nome}</h3>
                {produto.precoAntigo && (
                    <span className="produto-preco-antigo">
                        {produto.precoAntigo.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </span>
                )}
                <strong className="produto-preco">
                    {produto.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </strong>
                <button type="button" className="produto-botao">
                    Ver produto
                </button>
            </div>
        </article>
    );
}
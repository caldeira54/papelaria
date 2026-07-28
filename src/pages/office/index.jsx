import React, { useMemo, useState } from "react";

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

import papelA4 from "../../assets/papela4.png";
import grampeador from "../../assets/grampeador.png";
import organizador from "../../assets/organizador.png";
import calculadora from "../../assets/calculadora.png";
import canetas from "../../assets/canetas.png";
import pastaArquivo from "../../assets/pastaarquivo.png";

import "./style.css";

const produtos = [
    {
        id: 1,
        nome: "Papel sulfite A4 com 500 folhas",
        categoria: "Papéis",
        preco: 29.9,
        precoAntigo: 34.9,
        promocao: true,
        imagem: papelA4,
    },
    {
        id: 2,
        nome: "Grampeador de mesa para 25 folhas",
        categoria: "Acessórios",
        preco: 24.9,
        promocao: false,
        imagem: grampeador,
    },
    {
        id: 3,
        nome: "Organizador de mesa com divisórias",
        categoria: "Organização",
        preco: 39.9,
        promocao: false,
        imagem: organizador,
    },
    {
        id: 4,
        nome: "Calculadora de mesa com 12 dígitos",
        categoria: "Eletrônicos",
        preco: 49.9,
        precoAntigo: 59.9,
        promocao: true,
        imagem: calculadora,
    },
    {
        id: 5,
        nome: "Kit de canetas esferográficas",
        categoria: "Escrita",
        preco: 19.9,
        promocao: false,
        imagem: canetas,
    },
    {
        id: 6,
        nome: "Pasta arquivo com elástico",
        categoria: "Arquivamento",
        preco: 14.9,
        promocao: false,
        imagem: pastaArquivo,
    },
];

export default function Escritorio() {
    const [busca, setBusca] = useState("");
    const [categoria, setCategoria] = useState("Todas");
    const [ordenacao, setOrdenacao] = useState("padrao");

    const categorias = [
        "Todas",
        ...new Set(produtos.map((produto) => produto.categoria)),
    ];

    const produtosFiltrados = useMemo(() => {
        let resultado = produtos.filter((produto) => {
            const correspondeBusca = produto.nome
                .toLowerCase()
                .includes(busca.toLowerCase());

            const correspondeCategoria =
                categoria === "Todas" || produto.categoria === categoria;

            return correspondeBusca && correspondeCategoria;
        });

        if (ordenacao === "menor-preco") {
            resultado = [...resultado].sort(
                (produtoA, produtoB) => produtoA.preco - produtoB.preco
            );
        }

        if (ordenacao === "maior-preco") {
            resultado = [...resultado].sort(
                (produtoA, produtoB) => produtoB.preco - produtoA.preco
            );
        }

        if (ordenacao === "nome") {
            resultado = [...resultado].sort((produtoA, produtoB) =>
                produtoA.nome.localeCompare(produtoB.nome)
            );
        }

        return resultado;
    }, [busca, categoria, ordenacao]);

    function formatarPreco(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    function limparFiltros() {
        setBusca("");
        setCategoria("Todas");
        setOrdenacao("padrao");
    }

    return (
        <>
            <Header />

            <main className="pagina-escritorio">
                <section className="escritorio-banner">
                    <div className="escritorio-banner-conteudo">
                        <span>Organização e produtividade</span>

                        <h1>Materiais de Escritório</h1>

                        <p>
                            Encontre papéis, pastas, organizadores, calculadoras,
                            grampeadores e tudo para tornar seu ambiente de trabalho
                            mais organizado e produtivo.
                        </p>

                        <a href="#produtos-escritorio" className="botao-banner">
                            Ver produtos
                        </a>
                    </div>

                    <div className="forma forma-amarela"></div>
                    <div className="forma forma-vermelha"></div>
                </section>

                <section className="escritorio-beneficios">
                    <div>
                        <strong>Organização</strong>
                        <span>Produtos para manter tudo no lugar</span>
                    </div>

                    <div>
                        <strong>Produtividade</strong>
                        <span>Materiais para facilitar sua rotina</span>
                    </div>

                    <div>
                        <strong>Qualidade</strong>
                        <span>As melhores opções para seu escritório</span>
                    </div>
                </section>

                <section id="produtos-escritorio" className="escritorio-area">
                    <aside className="escritorio-filtros">
                        <h2>Filtrar produtos</h2>

                        <label htmlFor="busca-escritorio">Buscar produto</label>

                        <input
                            id="busca-escritorio"
                            type="text"
                            placeholder="Digite o nome do produto"
                            value={busca}
                            onChange={(evento) => setBusca(evento.target.value)}
                        />

                        <label htmlFor="categoria-escritorio">Categoria</label>

                        <select
                            id="categoria-escritorio"
                            value={categoria}
                            onChange={(evento) => setCategoria(evento.target.value)}
                        >
                            {categorias.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="ordenacao-escritorio">Ordenar por</label>

                        <select
                            id="ordenacao-escritorio"
                            value={ordenacao}
                            onChange={(evento) => setOrdenacao(evento.target.value)}
                        >
                            <option value="padrao">Mais relevantes</option>
                            <option value="menor-preco">Menor preço</option>
                            <option value="maior-preco">Maior preço</option>
                            <option value="nome">Nome</option>
                        </select>

                        <button
                            type="button"
                            className="botao-limpar"
                            onClick={limparFiltros}
                        >
                            Limpar filtros
                        </button>
                    </aside>

                    <div className="escritorio-conteudo">
                        <div className="escritorio-topo">
                            <div>
                                <span>Confira nossas opções</span>
                                <h2>Produtos para escritório</h2>
                            </div>

                            <p>
                                {produtosFiltrados.length}
                                {produtosFiltrados.length === 1
                                    ? " produto encontrado"
                                    : " produtos encontrados"}
                            </p>
                        </div>

                        {produtosFiltrados.length > 0 ? (
                            <div className="escritorio-grid">
                                {produtosFiltrados.map((produto) => (
                                    <article className="produto-card" key={produto.id}>
                                        <div className="produto-imagem">
                                            {produto.promocao && (
                                                <span className="produto-oferta">Oferta</span>
                                            )}

                                            <img src={produto.imagem} alt={produto.nome} />
                                        </div>

                                        <div className="produto-informacoes">
                                            <span className="produto-categoria">
                                                {produto.categoria}
                                            </span>

                                            <h3>{produto.nome}</h3>

                                            {produto.precoAntigo && (
                                                <span className="preco-antigo">
                                                    {formatarPreco(produto.precoAntigo)}
                                                </span>
                                            )}

                                            <strong className="preco-atual">
                                                {formatarPreco(produto.preco)}
                                            </strong>

                                            <button type="button" className="botao-produto">
                                                Ver produto
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="nenhum-produto">
                                <h3>Nenhum produto encontrado</h3>

                                <p>
                                    Tente pesquisar outro nome ou selecionar uma categoria
                                    diferente.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
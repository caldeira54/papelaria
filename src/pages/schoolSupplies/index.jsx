import React, { useMemo, useState } from "react";

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

import caderno from "../../assets/caderno.png";
import mochila from "../../assets/mochila.png";
import estojo from "../../assets/estojo.png";
import lapisCor from "../../assets/lapisCor.png";
import canetas from "../../assets/canetas.png";
import cola from "../../assets/cola.png";

import "./style.css";

const produtos = [
    {
        id: 1,
        nome: "Caderno universitário 10 matérias",
        categoria: "Cadernos",
        preco: 32.9,
        precoAntigo: 39.9,
        promocao: true,
        imagem: caderno,
    },
    {
        id: 2,
        nome: "Mochila escolar azul reforçada",
        categoria: "Mochilas",
        preco: 119.9,
        promocao: false,
        imagem: mochila,
    },
    {
        id: 3,
        nome: "Estojo escolar com divisórias",
        categoria: "Estojos",
        preco: 39.9,
        precoAntigo: 49.9,
        promocao: true,
        imagem: estojo,
    },
    {
        id: 4,
        nome: "Caixa de lápis de cor com 24 cores",
        categoria: "Desenho",
        preco: 27.9,
        promocao: false,
        imagem: lapisCor,
    },
    {
        id: 5,
        nome: "Kit com canetas coloridas",
        categoria: "Escrita",
        preco: 24.9,
        promocao: false,
        imagem: canetas,
    },
    {
        id: 6,
        nome: "Cola branca escolar 90g",
        categoria: "Acessórios",
        preco: 8.9,
        promocao: false,
        imagem: cola,
    },
];

export default function MaterialEscolar() {
    const [busca, setBusca] = useState("");
    const [categoria, setCategoria] = useState("Todas");
    const [ordenacao, setOrdenacao] = useState("padrao");

    const categorias = [
        "Todas",
        ...new Set(produtos.map((produto) => produto.categoria)),
    ];

    const produtosFiltrados = useMemo(() => {
        let resultado = produtos.filter((produto) => {
            const produtoEncontrado = produto.nome
                .toLowerCase()
                .includes(busca.toLowerCase());

            const categoriaEncontrada =
                categoria === "Todas" || produto.categoria === categoria;

            return produtoEncontrado && categoriaEncontrada;
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

            <main className="material-escolar">
                <section className="material-banner">
                    <div className="material-banner-conteudo">
                        <span>Volta às aulas</span>

                        <h1>Material Escolar</h1>

                        <p>
                            Encontre cadernos, mochilas, estojos, lápis, canetas e
                            tudo o que você precisa para estudar.
                        </p>

                        <a href="#lista-material" className="botao-banner">
                            Ver produtos
                        </a>
                    </div>

                    <div className="detalhe detalhe-amarelo"></div>
                    <div className="detalhe detalhe-vermelho"></div>
                </section>

                <section className="material-vantagens">
                    <div>
                        <strong>Variedade</strong>
                        <span>Produtos para todas as idades</span>
                    </div>

                    <div>
                        <strong>Qualidade</strong>
                        <span>As melhores marcas escolares</span>
                    </div>

                    <div>
                        <strong>Economia</strong>
                        <span>Preços especiais para sua lista</span>
                    </div>
                </section>

                <section id="lista-material" className="material-area">
                    <aside className="material-filtros">
                        <h2>Filtrar produtos</h2>

                        <label htmlFor="busca-material">Buscar</label>

                        <input
                            id="busca-material"
                            type="text"
                            placeholder="Digite o nome do produto"
                            value={busca}
                            onChange={(evento) => setBusca(evento.target.value)}
                        />

                        <label htmlFor="categoria-material">Categoria</label>

                        <select
                            id="categoria-material"
                            value={categoria}
                            onChange={(evento) => setCategoria(evento.target.value)}
                        >
                            {categorias.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="ordenacao-material">Ordenar por</label>

                        <select
                            id="ordenacao-material"
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

                    <div className="material-conteudo">
                        <div className="material-topo">
                            <div>
                                <span>Confira nossas opções</span>
                                <h2>Produtos escolares</h2>
                            </div>

                            <p>
                                {produtosFiltrados.length}
                                {produtosFiltrados.length === 1
                                    ? " produto encontrado"
                                    : " produtos encontrados"}
                            </p>
                        </div>

                        {produtosFiltrados.length > 0 ? (
                            <div className="material-grid">
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
                                    Tente pesquisar outro nome ou escolher uma categoria
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
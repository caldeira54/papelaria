import React, { useMemo, useState } from "react";

import CardProduto from "../../components/CardProduto";
import Header from "../../components/header";
import Footer from "../../components/footer";

import caderno from "../../assets/caderno.png";
import mochila from "../../assets/mochila.png";
import canetas from "../../assets/canetas.png";
import estojo from "../../assets/estojo.png";

import "./style.css";

const produtos = [
    {
        id: 1,
        nome: "Caderno universitário 10 matérias",
        categoria: "Material Escolar",
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
        nome: "Kit de canetas coloridas",
        categoria: "Escrita",
        preco: 24.9,
        promocao: false,
        imagem: canetas,
    },
    {
        id: 4,
        nome: "Estojo escolar com divisórias",
        categoria: "Material Escolar",
        preco: 39.9,
        precoAntigo: 49.9,
        promocao: true,
        imagem: estojo,
    },
];

export default function Produtos() {
    const [busca, setBusca] = useState("");
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
    const [ordenacao, setOrdenacao] = useState("padrao");

    const categorias = [
        "Todas",
        ...new Set(produtos.map((produto) => produto.categoria)),
    ];

    const produtosFiltrados = useMemo(() => {
        const resultado = produtos.filter((produto) => {
            const nomeCombina = produto.nome
                .toLowerCase()
                .includes(busca.toLowerCase());

            const categoriaCombina = categoriaSelecionada === "Todas" || produto.categoria === categoriaSelecionada;

            return nomeCombina && categoriaCombina;
        });

        if (ordenacao === "menor-preco") {
            return [...resultado].sort((a, b) => a.preco - b.preco);
        }

        if (ordenacao === "maior-preco") {
            return [...resultado].sort((a, b) => b.preco - a.preco);
        }

        if (ordenacao === "nome") {
            return [...resultado].sort((a, b) =>
                a.nome.localeCompare(b.nome)
            );
        }

        return resultado;
    }, [busca, categoriaSelecionada, ordenacao]);

    return (
        <>
            <Header />

            <main className="pagina-produtos">
                <section className="produtos-cabecalho">
                    <span>Nossa loja</span>
                    <h1>Produtos Papelmix</h1>
                    <p>
                        Encontre materiais escolares, artigos de escritório,
                        presentes e produtos para estimular sua criatividade.
                    </p>
                </section>
                <section className="produtos-area">
                    <aside className="produtos-filtros">
                        <h2>Filtrar produtos</h2>
                        <label htmlFor="busca-produto">Buscar</label>
                        <input
                            id="busca-produto"
                            type="text"
                            placeholder="Digite o nome do produto"
                            value={busca}
                            onChange={(evento) => setBusca(evento.target.value)}
                        />
                        <label htmlFor="categoria-produto">Categoria</label>
                        <select
                            id="categoria-produto"
                            value={categoriaSelecionada}
                            onChange={(evento) =>
                                setCategoriaSelecionada(evento.target.value)
                            }
                        >
                            {categorias.map((categoria) => (
                                <option key={categoria} value={categoria}>
                                    {categoria}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="ordenacao-produto">Ordenar por</label>
                        <select
                            id="ordenacao-produto"
                            value={ordenacao}
                            onChange={(evento) =>
                                setOrdenacao(evento.target.value)
                            }
                        >
                            <option value="padrao">Mais relevantes</option>
                            <option value="menor-preco">Menor preço</option>
                            <option value="maior-preco">Maior preço</option>
                            <option value="nome">Nome</option>
                        </select>
                        <button
                            type="button"
                            className="botao-limpar"
                            onClick={() => {
                                setBusca("");
                                setCategoriaSelecionada("Todas");
                                setOrdenacao("padrao");
                            }}
                        >
                            Limpar filtros
                        </button>
                    </aside>
                    <div className="produtos-conteudo">
                        <div className="produtos-topo">
                            <h2>Todos os produtos</h2>
                            <span>
                                {produtosFiltrados.length}
                                {produtosFiltrados.length === 1
                                    ? " produto encontrado"
                                    : " produtos encontrados"}
                            </span>
                        </div>

                        {produtosFiltrados.length > 0 ? (
                            <div className="produtos-grid">
                                {produtosFiltrados.map((produto) => (
                                    <CardProduto
                                        key={produto.id}
                                        produto={produto}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="produtos-vazio">
                                <h3>Nenhum produto encontrado</h3>
                                <p>
                                    Tente utilizar outro nome ou selecionar uma
                                    categoria diferente.
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
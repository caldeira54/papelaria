import React, { useState } from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

import "./style.css";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Contato() {
    const [formulario, setFormulario] = useState({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
    });

    function alterarCampo(evento) {
        const { name, value } = evento.target;

        setFormulario({
            ...formulario,
            [name]: value,
        });
    }

    function enviarFormulario(evento) {
        evento.preventDefault();

        console.log(formulario);

        alert("Mensagem enviada com sucesso!");

        setFormulario({
            nome: "",
            email: "",
            telefone: "",
            assunto: "",
            mensagem: "",
        });
    }

    return (
        <>
            <Header />
            <main className="pagina-contato">
                <section className="contato-banner">
                    <div className="contato-banner-conteudo">
                        <span>Fale conosco</span>

                        <h1>Entre em contato</h1>

                        <p>
                            Tem alguma dúvida, sugestão ou precisa de ajuda?
                            Nossa equipe está pronta para atender você.
                        </p>
                    </div>

                    <div className="decoracao decoracao-amarela"></div>
                    <div className="decoracao decoracao-vermelha"></div>
                </section>

                <section className="contato-container">
                    <div className="contato-informacoes">
                        <span className="contato-subtitulo">
                            Estamos esperando por você
                        </span>

                        <h2>Fale com a Papelmix</h2>

                        <p className="contato-descricao">
                            Entre em contato pelos nossos canais de atendimento
                            ou envie uma mensagem pelo formulário.
                        </p>

                        <div className="contato-cards">
                            <div className="contato-card">
                                <div className="contato-icone">
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <h3>Telefone</h3>
                                    <p>(00) 0000-0000</p>
                                </div>
                            </div>

                            <div className="contato-card">
                                <div className="contato-icone">
                                    <FaWhatsapp />
                                </div>

                                <div>
                                    <h3>WhatsApp</h3>
                                    <p>(00) 00000-0000</p>
                                </div>
                            </div>

                            <div className="contato-card">
                                <div className="contato-icone">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <h3>E-mail</h3>
                                    <p>contato@papelmix.com.br</p>
                                </div>
                            </div>

                            <div className="contato-card">
                                <div className="contato-icone">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <h3>Endereço</h3>
                                    <p>
                                        Rua Exemplo, 123
                                        <br />
                                        Centro
                                    </p>
                                </div>
                            </div>

                            <div className="contato-card">
                                <div className="contato-icone">
                                    <FaClock />
                                </div>

                                <div>
                                    <h3>Horário de atendimento</h3>
                                    <p>
                                        Segunda a sexta: 8h às 18h
                                        <br />
                                        Sábado: 8h às 13h
                                    </p>
                                </div>
                            </div>

                            <div className="contato-card">
                                <div className="contato-icone">
                                    <FaInstagram />
                                </div>

                                <div>
                                    <h3>Instagram</h3>
                                    <p>@papelmix</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contato-formulario-area">
                        <div className="formulario-cabecalho">
                            <span>Envie sua mensagem</span>

                            <h2>Como podemos ajudar?</h2>

                            <p>
                                Preencha os campos abaixo e entraremos em contato
                                assim que possível.
                            </p>
                        </div>

                        <form
                            className="contato-formulario"
                            onSubmit={enviarFormulario}
                        >
                            <div className="formulario-linha">
                                <div className="formulario-grupo">
                                    <label htmlFor="nome">Nome</label>

                                    <input
                                        id="nome"
                                        name="nome"
                                        type="text"
                                        placeholder="Digite seu nome"
                                        value={formulario.nome}
                                        onChange={alterarCampo}
                                        required
                                    />
                                </div>

                                <div className="formulario-grupo">
                                    <label htmlFor="email">E-mail</label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Digite seu e-mail"
                                        value={formulario.email}
                                        onChange={alterarCampo}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="formulario-linha">
                                <div className="formulario-grupo">
                                    <label htmlFor="telefone">Telefone</label>

                                    <input
                                        id="telefone"
                                        name="telefone"
                                        type="tel"
                                        placeholder="(00) 00000-0000"
                                        value={formulario.telefone}
                                        onChange={alterarCampo}
                                    />
                                </div>

                                <div className="formulario-grupo">
                                    <label htmlFor="assunto">Assunto</label>

                                    <select
                                        id="assunto"
                                        name="assunto"
                                        value={formulario.assunto}
                                        onChange={alterarCampo}
                                        required
                                    >
                                        <option value="">
                                            Selecione um assunto
                                        </option>

                                        <option value="duvida">
                                            Dúvida
                                        </option>

                                        <option value="produto">
                                            Informações sobre produto
                                        </option>

                                        <option value="pedido">
                                            Pedido
                                        </option>

                                        <option value="sugestao">
                                            Sugestão
                                        </option>

                                        <option value="outro">
                                            Outro
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="formulario-grupo">
                                <label htmlFor="mensagem">Mensagem</label>

                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    rows="6"
                                    placeholder="Escreva sua mensagem..."
                                    value={formulario.mensagem}
                                    onChange={alterarCampo}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="botao-enviar"
                            >
                                Enviar mensagem
                            </button>
                        </form>
                    </div>
                </section>

                <section className="contato-atendimento">
                    <div>
                        <h2>Precisa de atendimento rápido?</h2>

                        <p>
                            Entre em contato pelo WhatsApp e fale diretamente
                            com nossa equipe.
                        </p>
                    </div>

                    <a href="#" className="botao-whatsapp">
                        <FaWhatsapp />

                        Falar pelo WhatsApp
                    </a>
                </section>
            </main>

            <Footer />
        </>
    );
}
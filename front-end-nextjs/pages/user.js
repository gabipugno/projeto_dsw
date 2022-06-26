import { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';

function User() {

    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        senha: ''
    });

    const [response, setResponse] = useState({
        type: '',
        mensagem: ''
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendContact = async e => {
        e.preventDefault();
        console.log(dataForm.email);

        try {
            const res = await fetch('http://localhost:8080/user', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseEnv = await res.json();

            if (responseEnv.erro) {
                setResponse({
                    type: 'error',
                    mensagem: responseEnv.mensagem
                });
            } else {
                setResponse({
                    type: 'success',
                    mensagem: responseEnv.mensagem
                });

                setDataForm({
                    name: '',
                    email: '',
                    senha: ''
                });
            }
        } catch (err) {
            setResponse({
                type: 'error',
                mensagem: "Erro: Tente mais tarde!"
            });
        }
    }

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="Gabi -Caio" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Novo Usuário</title>
            </Head>
            <Menu />

            <section className="contact">
                <div className="max-width">
                    <h2 className="title">Usuário</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <p>Cadastrar Usuário</p>
                            <div className="icons">
                                <div className="row">
                                    <i class="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">
                                            Empresa
                                        </div>
                                        <div className="sub-title">
                                            Pontos Turísticos - Travel
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">
                                            Endereço
                                        </div>
                                        <div className="sub-title">
                                            Campinas - SP
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <i class="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">
                                            E-mail
                                        </div>
                                        <div className="sub-title">
                                            travel@pontosturisticos.com.br
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="column right">
                            <div className="text">
                                Formulário de Usuário
                            </div>

                            {response.type === 'error' ? <p className="alert-danger">{response.mensagem}</p> : ""}
                            {response.type === 'success' ? <p className="alert-success">{response.mensagem}</p> : ""}

                            <form onSubmit={sendContact}>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="name" placeholder="Digite o nome" onChange={onChangeInput} value={dataForm.name} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                        <input type="email" name="email" placeholder="Digite o seu melhor e-mail" onChange={onChangeInput} value={dataForm.email} />
                                    </div>
                                </div>


                                <div className="fields">
                                    <div className="field name">
                                        <input type="password" name="senha" placeholder="Digite uma senha" onChange={onChangeInput} value={dataForm.senha} />
                                    </div>
                                </div>

                                <div className="button-area">
                                    <button type="submit">Enviar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
        </div>
    )
}

export default User;
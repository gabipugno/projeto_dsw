import { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';

function Cadastrar() {

    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        ponto: '',
        endereco: '',
        imagem:''
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
            const res = await fetch('http://localhost:8080/cadastrar', {
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
                    ponto: '',
                    endereco: '',
                    imagem:''
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
                <meta name="author" content="Gabi - Caio" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Cadastrar</title>
            </Head>
            <Menu />

            <section className="contact">
                <div className="max-width">
                    <h2 className="title">Cadastrar Ponto Turístico</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <h2>Cadastre os lugares que te encantaram!</h2>
                           </div>

                        <div className="column right">
                            <div className="text">
                                Cadastrar Ponto Turístico
                            </div>

                            {response.type === 'error' ? <p className="alert-danger">{response.mensagem}</p> : ""}
                            {response.type === 'success' ? <p className="alert-success">{response.mensagem}</p> : ""}

                            <form onSubmit={sendContact}>

                            <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="name" placeholder="Digite o nome seu nome completo" onChange={onChangeInput} value={dataForm.name} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                        <input type="email" name="email" placeholder="Digite o seu melhor e-mail" onChange={onChangeInput} value={dataForm.email} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field ponto">
                                        <input type="text" name="ponto" placeholder="Digite o nome do ponto turístico visitado" onChange={onChangeInput} value={dataForm.ponto} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field endereco">
                                        <input type="text" name="endereco" placeholder="Digite o endereço do ponto turístico" onChange={onChangeInput} value={dataForm.endereco} />
                                    </div>
                                </div>  

                                <div className="fields">
                                    <div className="field imagem">
                                        <input type="file" name="imagem" placeholder="Insira uma imagem." onChange={onChangeInput} value={dataForm.imagem} />
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



export default Cadastrar;
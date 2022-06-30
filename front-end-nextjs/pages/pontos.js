import Head from 'next/head';
import Menu from '../components/Menu';


function Pontos({ data }) {

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="Gabi - Caio" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Home</title>
            </Head>
            <Menu />

            <section className="top2">
            <form>
                <div className="max-width">
                    <div className="top-content">
                        
                        <div className="text-3">
                            {data.datahome.ponto}
                        </div>
                        <div className="text-4">
                            {data.datahome.endereco}
                        </div>
                        <div className="media">
                            {data.datahome.imagem}
                        </div>
                        <div className="text-1">
                            {data.datahome.name}
                        </div>
                        <div className="text-2">
                            {data.datahome.email}
                        </div>
                        <div className="button-area">
                        <button onClick={(data) => this.deleteRow(data.datahome.id)}>Deletar linha</button>
                        </div>
                    </div>
                </div>
                </form>  
            </section>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:8080/cadastrar`);
    const data = await response.json();
    //console.log(data);

    return { props: { data } };
}



export default Pontos;
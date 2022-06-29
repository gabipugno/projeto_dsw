import Link from "next/link";

const linkStyle = {
    marginRight: 15
}

const Menu = () => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="/">Travel - Pontos Turísticos</a>
                </div>
                <ul className="menu">
                    <li><a href="/" className="menu-btn">Home</a></li>
                    <li><a href="/user" className="menu-btn">Usuário</a></li>
                    <li><a href="/cadastrar" className="menu-btn">Cadastrar</a></li>
                    <li><a href="/contato" className="menu-btn">Contato</a></li> 
                    <li><a href="/pontos" className="menu-btn">Pontos</a></li> 

                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </div>
);

export default Menu;
import Background from "../components/Background";

export default function CadUser() {
    return (
        <>
            <div className="container-login">
                <Background />
                <div className="signup">
                    <h2>Cadastar-se</h2>
                    <h3>Rápido e simples</h3>

                    <form action="" className="form">
                        <div className="textbox">
                            <input type="text" />
                            <label htmlFor="">Nome</label>
                            <span className="material-symbols-outline" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </div>

                        <div className="textbox">
                            <input type="password" />
                            <label htmlFor="">Senha</label>
                            <span className="material-symbols-outline" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-key-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                            </svg>
                        </div>

                        <p>
                            Esqueceu a senha?
                            <span className="clique-aqui"> clique aqui</span>
                        </p>

                        <button>
                            Entrar
                        </button>
                    </form>

                    <button>
                        Nova conta
                    </button>
                </div>
            </div>

        </>
    );
}
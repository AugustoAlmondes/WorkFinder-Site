// import './none.css';

export default function LoginUser({ dataLogin, handleChange, handleSubmit, handleCheckboxChange, setFrameLogin }) {
    return (
        <>
            <h2>Fazer Login</h2>
            <h3>Rápido e simples</h3>


            <form onSubmit={handleSubmit} className="form">
                <div className="textbox-login">
                    <input
                        id="email_login"
                        name="email"
                        type="text"
                        required
                        value={dataLogin.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Email</label>
                </div>

                <div className="textbox-login">
                    <input
                        id="senha_login"
                        name="senha"
                        type="password"
                        required
                        value={dataLogin.senha}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Senha</label>
                </div>

                <div className="check-type">
                    <label
                        htmlFor=""
                    >Entrar como empresa</label>

                    <input
                        id="check-type-user"
                        name="isEnterprise"
                        // checked={isEnterprise}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        style={{
                            width: '20px',
                            cursor: 'pointer',
                        }} />
                </div>

                <p>
                    Esqueceu a senha?
                    <span className="clique-aqui"> clique aqui</span>
                </p>

                <button type="submit">
                    Entrar
                </button>
                <button onClick={() => { setFrameLogin(1) }}>
                    Nova conta
                </button>
            </form>
        </>
    );
}
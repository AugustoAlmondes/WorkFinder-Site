// import './none.css';

export default function LoginFrame({ dataUser, handleChange, handleSubmit, setFrameLogin }) {
    return (
        <>
            <h2>Cadastrar-se</h2>
            <h3>Rápido e simples</h3>
            <form onSubmit={handleSubmit} className="form" >
                <div className="user-form">
                    <div className="textbox">
                        <input
                            id="nome_completo_user"
                            name="nome_completo"
                            type="text"
                            required
                            value={dataUser.nome_completo}
                            onChange={handleChange}
                        />
                        <label htmlFor="nome_Completo">Nome Completo</label>
                    </div>

                    <div className="textbox">
                        <input
                            id="data_nascimento_user"
                            name="data_nascimento"
                            type="date"
                            required
                            value={dataUser.data_nascimento}
                            onChange={handleChange}
                        />
                        <label htmlFor="data_nascimento">Data de Nascimento</label>
                    </div>

                    <div className="textbox">
                        <input
                            id="telefone_user"
                            name="telefone"
                            type="tel"
                            required
                            value={dataUser.telefone}
                            onChange={handleChange}
                        />
                        <label htmlFor="telefone">Número de telefone</label>
                    </div>

                    <div className="textbox">
                        <input
                            id="cep_user"
                            name="cep"
                            type="text"
                            required
                            value={dataUser.cep}
                            onChange={handleChange}
                        />
                        <label htmlFor="cep">CEP</label>
                    </div>

                    <div className="textbox">
                        <input
                            id="email_user"
                            name="email"
                            type="text"
                            required
                            value={dataUser.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">E-mail</label>
                    </div>

                    <div className="textbox">
                        <input
                            id="senha_user"
                            name="senha"
                            type="password"
                            required
                            value={dataUser.senha}
                            onChange={handleChange}
                        />
                        <label htmlFor="senha">Senha</label>
                    </div>

                    <div className="textbox">
                        <input
                            id="confirm_senha_user"
                            name="confirm_senha"
                            type="password"
                            required
                            value={dataUser.confirm_senha}
                            onChange={handleChange}
                        />
                        <label htmlFor="confirm_senha">Confirmar Senha</label>
                    </div>
                </div>
                <button id="confirmar_user" type="submit">
                    Confirmar
                </button>

                <button onClick={() => { setFrameLogin(0) }}>
                    Criar como Empresa
                </button>
            </form>
        </>
    );
}
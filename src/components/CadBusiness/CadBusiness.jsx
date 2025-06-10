// import './none.css';

export default function CadBusiness({ dataEmpresa, handleChange, handleSubmit }) {
    return (
        <>
            <h2>Cadastrar Empresa</h2>
            <h3>Rápido e simples</h3>

            <form onSubmit={handleSubmit} className="form enterprise-form">
                <div className="textbox">

                    <input
                        id="nome_empresa"
                        name="nome_empresa"
                        type="text"
                        required
                        value={dataEmpresa.nome_empresa}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Nome da Empresa</label>
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="nome_fantasia"
                        name="nome_fantasia"
                        type="text"
                        required
                        value={dataEmpresa.nome_fantasia}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Nome Fantasia</label>
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="cnpj"
                        name="cnpj"
                        type="text"
                        required
                        value={dataEmpresa.cnpj}
                        onChange={handleChange}
                    />
                    <label htmlFor="">CNPJ</label>
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="inscricao_estadual"
                        name="inscricao_estadual"
                        type="text"
                        required
                        value={dataEmpresa.inscricao_estadual}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Inscrição Estadual</label>
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="inscricao_municipal"
                        name="inscricao_municipal"
                        type="text"
                        required
                        value={dataEmpresa.inscricao_municipal}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Inscrição Municipal</label>
                </div>

                <div className="textbox">
                    {/* <input type="tel" id="telefone"
                                                    //  onkeyup="mascaraFone(event)" 
                                                    className="input-padrao" required /> */}
                    <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        value={dataEmpresa.telefone}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Telefone</label>
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="cep"
                        name="cep"
                        type="text"
                        required
                        value={dataEmpresa.cep}
                        onChange={handleChange}
                    />
                    <label htmlFor="">CEP</label>
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="endereco"
                        name="endereco"
                        type="text"
                        required
                        value={dataEmpresa.endereco}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Endereço</label>
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="emailEmpresa"
                        name="email"
                        type="email"
                        required
                        value={dataEmpresa.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="">E-mail</label>
                </div>

                <div className="textbox">
                    {/* <input type="password" required="required" /> */}
                    <input
                        id="senhaEmpresa"
                        name="senha"
                        type="password"
                        required
                        value={dataEmpresa.senha}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Senha</label>
                </div>

                <div className="textbox">
                    <input
                        id="confirmar_senha_empresa"
                        name="confirm_senha"
                        type="password"
                        required
                        value={dataEmpresa.confirm_senha}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Confirmar Senha</label>
                </div>
                <button type="submit">
                    Confirmar
                </button>
            </form>
        </>
    );
}
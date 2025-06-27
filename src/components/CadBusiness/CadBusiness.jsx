// import './none.css';
import { formatCNPJ, formatTelefone, formatCEP } from '../../utils/masks';
import { validPassword } from '../../utils/validPassword';

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
                        placeholder=' Nome da Empresa'
                    />
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
                        placeholder=' Nome Fantasia'
                    />
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="cnpj"
                        name="cnpj"
                        type="text"
                        maxLength={14}
                        required
                        value={formatCNPJ(dataEmpresa.cnpj)}
                        onChange={handleChange}
                        placeholder=' CNPJ'
                    />
                    {
                        dataEmpresa.cnpj.length === 14 &&
                        <p
                            style={{ margin: '5px 0', color: 'green' }}
                            className="cnpj-valid">CNPJ Valido</p>
                    }
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="inscricao_estadual"
                        name="inscricao_estadual"
                        type="text"
                        maxLength={13}
                        required
                        value={dataEmpresa.inscricao_estadual}
                        onChange={handleChange}
                        placeholder=' Inscrição Estadual'
                    />
                    {
                        dataEmpresa.inscricao_estadual.length === 13 &&
                        <p
                            style={{ margin: '5px 0', color: 'green' }}
                            className="inscricao-valid">Inscrição Estadual Valida</p>
                    }
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="inscricao_municipal"
                        name="inscricao_municipal"
                        type="text"
                        required
                        maxLength={13}
                        minLength={7}
                        value={dataEmpresa.inscricao_municipal}
                        onChange={handleChange}
                    placeholder=' Inscrição Municipal'
                    />
                    {
                        (dataEmpresa.inscricao_municipal.length > 6
                            && dataEmpresa.inscricao_municipal.length < 14
                        ) &&
                        <p
                            style={{ margin: '5px 0', color: 'green' }}
                            className="inscricao-valid">Inscrição Municipal Valida</p>
                    }
                </div>

                <div className="textbox">
                    <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        maxLength={15}
                        minLength={15}
                        required
                        placeholder=' Telefone'
                        value={formatTelefone(dataEmpresa.telefone)}
                        onChange={handleChange}
                    />
                </div>

                <div className="textbox">
                    {/* <input type="text" required="required" /> */}
                    <input
                        id="cep"
                        name="cep"
                        minLength={9}
                        maxLength={9}
                        type="text"
                        required
                        value={formatCEP(dataEmpresa.cep)}
                        onChange={handleChange}
                        placeholder=' CEP'
                    />
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
                        placeholder=' Endereço'
                    />
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
                        placeholder=' Email'
                    />
                </div>

                <div className="textbox">
                    {/* <input type="password" required="required" /> */}
                    <input
                        id="senhaEmpresa"
                        name="senha"
                        type="password"
                        minLength={8}
                        required
                        value={dataEmpresa.senha}
                        onChange={handleChange}
                        placeholder=' Senha'
                    />

                    {
                        validPassword(dataEmpresa.senha) ?
                            <p
                                style={{ margin: '0', color: 'green' }}
                                className="senha-valid">Senha Válida</p> :
                            dataEmpresa.senha.length > 0 &&
                            <p
                                style={{ margin: '0', color: 'red' }}
                                className="senha-invalid">Tamanho minimo de 8 caracteres, letra maiúscula e um número</p>
                    }
                </div>

                <div className="textbox">
                    <input
                        id="confirmar_senha_empresa"
                        name="confirm_senha"
                        type="password"
                        minLength={8}
                        required
                        placeholder='Confirme a Senha'
                        value={dataEmpresa.confirm_senha}
                        onChange={handleChange}
                    />

                    {
                        dataEmpresa.senha === dataEmpresa.confirm_senha &&
                        validPassword(dataEmpresa.senha) &&
                        <p
                            style={{ margin: '5px 0', color: 'green' }}
                            className="senha-valid">Senha Válida</p>
                    }
                    {
                        dataEmpresa.senha !== dataEmpresa.confirm_senha &&
                        <p
                            style={{ margin: '5px 0', color: 'red' }}
                            className="senha-invalid">Senhas não conferem</p>
                    }
                </div>
                <button type="submit">
                    Confirmar
                </button>
            </form>
        </>
    );
}
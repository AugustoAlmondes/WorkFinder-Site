import { db } from "../db.js";

export const getEmpresa = (_, res) => {
    const q = "SELECT * FROM empresas";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addEmpresa = (req, res) => {
    const { nome_empresa, nome_fantasia, cnpj, inscricao_estadual, inscricao_municipal, telefone, cep, endereco, email, senha } = req.body;
    const q = "INSERT INTO empresas (nome_empresa, nome_fantasia, cnpj, inscricao_estadual, inscricao_municipal, telefone, cep, endereco, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [nome_empresa, nome_fantasia, cnpj, inscricao_estadual, inscricao_municipal, telefone, cep, endereco, email, senha];

    console.log("Comando SQL:", q);
    console.log("Valores para o SQL:", values);

    db.query(q, values, (err, result) => {
        if (err) {
            console.log(err);
            console.log(result);
            return res.status(500).json({ error: "Erro ao adicionar empresa" });
        }
        return res.status(201).json({ message: "Empresa cadastrado com sucesso" });
    });
};

export const addVacany = (req, res) => {
    // const {
    //     empresa, titulo, habilidades_qualificacoes, localizacao,
    //     tipo_contratacao, modalidade_trabalho, quantidade_vagas,
    //     area_atuacao, pcd, tipo_carteira_motorista, salario,
    //     beneficios, descricao } = req.body;
    const { enterprise, title, ability, local, contractType, modality, amount, areaActivity, pcd, cnh, salary, benefits, description, email } = req.body;

    // const q = "INSERT INTO vaga (empresa, titulo, habilidades_qualificacoes, localizacao, tipo_contratacao, modalidade_trabalho, quantidade_vagas, area_atuacao, pcd, tipo_carteira_motorista, salario, beneficios, descricao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const q = "INSERT INTO vaga (enterprise, title, ability, local, contractType, modality, amount, areaActivity, pcd, cnh, salary, benefits, description, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    // const values = [empresa, titulo, habilidades_qualificacoes, localizacao, tipo_contratacao, modalidade_trabalho, quantidade_vagas, area_atuacao, pcd, tipo_carteira_motorista, salario, beneficios, descricao]
    const values = [enterprise, title, ability, local, contractType, modality, amount, areaActivity, pcd, cnh, salary, benefits, description, email];

    console.log("Comando SQL:", q);
    console.log("Valores para o SQL:", values);
    
    db.query(q, values, (err, result) => {
        if (err) {
            console.log(err);
            console.log(result);
            return res.status(500).json({ error: "Erro ao adicionar vaga" });
        }
        return res.status(201).json({ message: "Vaga cadastrada com sucesso" });
    });
}

export const getVacany = (_, res) => {
    const q = "SELECT * FROM vaga";

    db.query(q, (err, data) => {
        if (err) return res.json(err);        
        return res.status(200).json(data);
    });
}
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Vacany from "../../components/Vacany/Vacany";
import './AllVacany.css'
import axios from "axios";

import { useEffect, useState } from 'react';
import searchJob from "../../utils/searchJob";

export default function AllVacany({ typeUser, fezLogin, handleLogout }) {

    const [listDataVvacany, setListDataVacany] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchOn, setSearchOn] = useState(false);


    useEffect(() => {
        const getAllVacany = async () => {
            const response = await axios.get('https://workfinder-api-production.up.railway.app/vacany');
            // const response = await axios.get('http://localhost:3000//vacany');
            // console.log(response.data);

            setListDataVacany(response.data);
        }
        getAllVacany();
    }, [])

    function handleSearch(e) {
        e.preventDefault();
        const lista = searchJob(listDataVvacany, e.target[0].value);
        setSearchList(lista);
    }

    return (
        <>
            <Header typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout} />
            <main style={{ minHeight: "100vh" }}>
                <div className="titulo-pagina-vaga">
                    <h1>Descubra Sua Próxima <span>Aventura Profissional!!</span></h1>
                </div>
                <div className="pesquisa-vaga">
                    <h2>Pesquise por uma <span>vaga específica</span> <label htmlFor="pesquisa-vaga"><i
                        className="bi bi-search"></i></label></h2>
                    <form className="container-pesquisa" onSubmit={handleSearch}>
                        <input
                            className="input-vaga"
                            type="text"
                            name="pesquisa-vaga"
                            id="pesquisa-vaga"
                            placeholder="Digite a característica"
                            onChange={(e) => {
                                if (e.target.value == '') {
                                    setSearchOn(false);
                                }
                            }}
                        />

                        <button type="submit" className="botao-pesquisa-vaga" onClick={() => setSearchOn(true)}>Pesquisar</button>
                    </form>
                </div>

                <h4 className="subtitulo-vaga">Todas as Vagas</h4>
                <div className="grid-vagas">
                    {!searchOn ? (
                        listDataVvacany.map((item, index) => (
                            <Vacany key={index} listDataVvacany={item} fezLogin={fezLogin} />
                        ))
                    ) : (
                        searchList.map((item, index) => (
                            <Vacany key={index} listDataVvacany={item} fezLogin={fezLogin} />
                        ))
                    )
                    }
                </div>
            </main>

            <Footer />
        </>
    );
}
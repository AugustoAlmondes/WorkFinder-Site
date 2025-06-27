import Header from '../../components/Header/Header'; // Importação corrigida
import HeaderPart2 from '../../components/HeaderPart2/HeaderPart2';
import VagaCard from '../../components/VagaCard/VagaCard';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

import progressoImagem from '../../assets/imagem2-part2.png'
import ImagemSlot from '../../assets/pesquisa2.png'
import ImagemSlot2 from '../../assets/6528597.png'
import ImagemSlot3 from '../../assets/5269970.png'
import ImagemSlot4 from '../../assets/1694615.png'
import ImagemSlot5 from '../../assets/2645897.png'

import './Home.css';
import { useEffect, useState, useRef } from 'react';

export default function Home({ fezLogin, typeUser, handleLogout }) {



    const [vaga, setVaga] = useState([]);
    const sobreRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        async function getVagas() {
            const response = await axios.get('https://workfinder-api-production.up.railway.app/vacany');

            if (response) {
                setVaga(response.data);
            }
        }

        getVagas();
    }, []);

    const scrollToSobre = () => {
        sobreRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Header typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout} scrollToSobre={scrollToSobre} />
            <HeaderPart2 />

            <main>
                <section className='part-1' style={{
                    minHeight: "100vh",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px'
                }}>

                    {typeUser !== 0 ?
                        (
                            <>
                                <div className="titulo-vaga">
                                    <h1>Vagas em <span>Destaque</span></h1>
                                    <p className="descricao-vaga">
                                        Encontre a oportunidade perfeita que se alinha com seus interesses e
                                        habilidades. De empregos em tecnologia à oportunidades na área de saúde.
                                    </p>
                                </div>

                                <div className="vagas-grid">

                                    {vaga.map((vaga, index) => {
                                        return index < 6 && <VagaCard key={index} data={vaga} fezlogin={fezLogin} />
                                    })}

                                </div>

                                <div className="vermais-card">
                                    <button>
                                        Ver mais vagas
                                    </button>
                                </div>
                            </>
                        ) :
                        (
                            <>
                                <div className="titulo-vaga">
                                    <h1>Conecte-se com <span>Talentos Qualificados</span></h1>
                                    <p className="descricao-vaga">
                                        Alcance profissionais talentosos e capacitados para fortalecer sua equipe.
                                        Nossa plataforma simplifica o processo de recrutamento, economizando tempo e conectando sua empresa
                                        com os candidatos ideais.
                                    </p>
                                </div>

                                <div className="beneficios-cadastro">
                                    <ul
                                        style={{
                                            listStyle: 'none',
                                            fontSize: '20px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '20px'
                                        }}
                                    >
                                        <li><i className="bi bi-person-plus-fill"></i> Alcance um grande número de candidatos em diversas áreas</li>
                                        <li><i className="bi bi-lightning-charge-fill"></i> Publique suas vagas rapidamente com apenas alguns cliques</li>
                                        <li><i className="bi bi-bar-chart-line-fill"></i> Receba insights e relatórios sobre candidatos interessados</li>
                                        <li><i className="bi bi-shield-fill-check"></i> Segurança e proteção dos dados da sua empresa e dos candidatos</li>
                                        <li><i className="bi bi-chat-dots-fill"></i> Suporte profissional disponível para auxiliar em cada etapa</li>
                                    </ul>
                                </div>

                                <div className="cadastrar-vaga">
                                    <button className="olhar-Vagas">Cadastrar uma Vaga Agora</button>
                                </div>
                            </>
                        )
                    }
                </section>

                <section className="part-2" ref={sobreRef}>

                    <div id="sobreId" className="content-part2">
                        <div className="img-part-2">
                            <img src={progressoImagem} alt="progressoImagem" />
                        </div>

                        <div className="info-part-2" >
                            <article>
                                <div className="titulo-part2">
                                    <h3>
                                        <span>
                                            Torne rápida</span> a busca <br />
                                        por um trabalho!
                                    </h3>
                                </div>

                                <p className="sub-titulo">
                                    Nossa plataforma foi cuidadosamente projetada para oferecer uma ampla gama de recursos e
                                    ferramentas que tornam a busca por emprego não apenas mais rápida, mas também mais
                                    eficaz e personalizada. Com uma interface intuitiva e de fácil navegação, proporcionamos
                                    aos usuários uma experiência otimizada, onde cada etapa do processo de procura de
                                    emprego é facilitada.
                                </p>

                                <ul>
                                    <li><i className="bi bi-search"></i> Pesquisa Avançada e
                                        Filtros Personalizados</li>
                                    <li><i className="bi bi-person-add"></i>Alertas de Vagas
                                        Personalizadas</li>
                                    <li><i className="bi bi-mouse2-fill"></i>Candidatura
                                        Simplificada em Um Clique</li>
                                    <li><i className="bi bi-wechat"></i>Atendimento ao Cliente Ágil
                                        e Suporte Profissional</li>
                                    <li><i className="bi bi-shield-fill-check"></i>Priorizamos a
                                        segunraça do seus dados
                                    </li>
                                </ul>
                            </article>

                            <div className="botoes-part-2">
                                {
                                    typeUser != 0 ?
                                        (
                                            <button className="olhar-Vagas">Olhar Vagas</button>
                                        ) : (
                                            <button className="olhar-Vagas">Cadastrar Vagas</button>
                                        )
                                }
                                {
                                    fezLogin ?
                                        (
                                            <button className="registar-se">Ver Perfil</button>
                                        ) : (
                                            <button className="registar-se">Cadastre-se</button>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="part-3">

                    <div className="title">
                        <h1>Uma <span>Experiência</span> jamais vista!</h1>
                    </div>

                    <div className="info-part-3">
                        <div className="info-top">
                            <div className="info-1-part-3">
                                <div className="slot">
                                    <div className="cabecalho-slot">
                                        <img src={ImagemSlot} />
                                        <h4>Recursos de Pesquisa Avançada</h4>
                                    </div>

                                    <p>Você pode <span>refinar</span> suas opções com filtros precisos, escolher a
                                        localização ideal e
                                        explorar categorias específicas de emprego.</p>
                                </div>



                                <div className="slot">
                                    <div className="cabecalho-slot">
                                        <img src={ImagemSlot2} />
                                        <h4>Algoritmos de Correspondência Avançados</h4>
                                    </div>

                                    <p>Diga adeus à busca manual de empregos! Graças aos nossos algoritmos de
                                        correspondência avançados, <span>conectamos</span> você às oportunidades de emprego
                                        que realmente
                                        importam.</p>
                                </div>



                                <div className="slot">
                                    <div className="cabecalho-slot">
                                        <img src={ImagemSlot3} />
                                        <h4>Suporte e Recursos de Desenvolvimento Profissional</h4>
                                    </div>

                                    <p>Além de oferecer as melhores oportunidades de emprego, também fornecemos suporte e
                                        recursos de <span>desenvolvimento profissional</span>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="infor-bot">
                            <div className="info-2-part-3">
                                <div className="slot">
                                    <div className="cabecalho-slot">
                                        <img src={ImagemSlot4} />
                                        <h4>Interface Intuitiva e Amigável</h4>
                                    </div>

                                    <p>Navegar em busca de emprego nunca foi <span> tão fácil</span>! Nosso site foi
                                        cuidadosamente
                                        projetado com uma interface <span> intuitiva e amigável</span> , garantindo que você
                                        encontre as
                                        informações que precisa sem qualquer dificuldade. </p>
                                </div>



                                <div className="slot">
                                    <div className="cabecalho-slot">
                                        <img src={ImagemSlot5} />
                                        <h4>Notificações Personalizadas e Alertas de Vagas</h4>
                                    </div>

                                    <p>Configure suas preferências e <span>deixe-nos fazer o resto</span>. Sempre que uma
                                        nova vaga que
                                        corresponda ao seu perfil for publicada, você será o <span>primeiro a saber</span>,
                                        garantindo
                                        que nunca deixe passar uma chance valiosa.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main>

            <Footer />
        </>
    )
}

// Home.propTypes = {
//     fezLogin: PropTypes.bool.isRequired,
//     typeUser: PropTypes.number.isRequired
// }
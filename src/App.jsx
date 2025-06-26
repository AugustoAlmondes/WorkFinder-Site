import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import JobForms from './pages/JobForms/JobForm';
import AllVacany from './pages/AllVacany/AllVacany';
import JobApplicationForm from './pages/JobApplicationForm/JobApplicationForm';
import InfoJob from './pages/InfoJob/InfoJob';

function App() {

    const [fezLogin, setFezLogin] = useState(false); //True para logado e falso para deslogado
    const [typeUser, setTypeUser] = useState(1); //0 para empresa, 1 para usuário, 2 para adm

    const [email, setEmail] = useState('');

    function handleLogout() {
        setFezLogin(false);
        setTypeUser(2);
        localStorage.removeItem('fezLogin');
        localStorage.removeItem('typeUser');
        window.location.reload();
    }

    console.log("O email logado é:", email);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home fezLogin={fezLogin} typeUser={typeUser} setFezLogin={setFezLogin} setTypeUser={setTypeUser} handleLogout={handleLogout}/>} />
                    <Route path="/login" element={<Login setFezLogin={setFezLogin} setTypeUser={setTypeUser} setEmail={setEmail}/>} />
                    <Route path="/vacany" element={<JobForms typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout} email={email} />} />
                    <Route path="/allvacany" element={<AllVacany typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout}/>} />
                    <Route path="/applyvacany" element={<JobApplicationForm typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout} userEmail={email}/>} />
                    <Route path="/infojob" element={<InfoJob typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout}/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
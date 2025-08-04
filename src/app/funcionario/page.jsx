import Header from "../../components/Header"
import Welcome from "../../components/Welcome"
import FuncionarioAC from "../../components/FuncionarioAC"
import Historial from "../../components/Historial"
import "../../styles/admin.css"

    export default function funcionario() {
    return (
        <div className="app-container">
        <div className="geometric-background funcionario">
            <div className="diagonal-left-funcionario"></div>
            <div className="diagonal-right-funcionario"></div>
        </div>
        <div className="content-wrapper">
            <Header activePage="funcionario" />
            <main className="main-content">
            <Welcome />
            <FuncionarioAC />
            <Historial />
            </main>
        </div>
        </div>
    )
    }


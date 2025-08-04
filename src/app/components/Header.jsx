import "./styles/admin.css"

    export default function Header({ activePage = "administrador" }) {
    return (
        <header className="header">
        <div className="logo">
            <h1>MIPP+</h1>
        </div>
        <div className="user-controls">
            <div className="role-toggles">
            <button className={`role-btn ${activePage === "administrador" ? "active" : ""}`}>Administrador</button>
            <button className={`role-btn ${activePage === "funcionario" ? "active" : ""}`}>Funcionario</button>
            </div>
            <button className="logout-btn">
            <span className="logout-icon">👤</span>
            Cerrar Sesión
            </button>
        </div>
        </header>
    )
    }


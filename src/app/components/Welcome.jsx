import "./styles/admin.css"

    export default function WelcomeSection() {
    return (
        <section className="welcome-section">
        <div className="welcome-text">
            <p className="greeting">Bienvenido/a,</p>
            <h2 className="user-name">Josué Gutiérrez</h2>
        </div>
        <p className="question">¿Qué deseas hacer hoy?</p>
        </section>
    )
    }


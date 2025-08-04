import "./styles/admin.css"

    export default function FuncionarioActionCards() {
    const cards = [
        {
        id: 1,
        icon: "📄",
        title: "Solicitar Permiso de Salida,",
        subtitle: "Ausencia, Tardía o Incapacidad",
        },
        {
        id: 2,
        icon: "⚙️",
        title: "Justificar Ausencia, Salida,",
        subtitle: "Tardía o Incapacidad.",
        },
        {
        id: 3,
        icon: "📋",
        title: "Justificar Omisión de marca.",
        subtitle: "",
        },
        {
        id: 4,
        icon: "🏢",
        title: "Reportar Problema o Daño.",
        subtitle: "",
        },
    ]

    return (
        <section className="funcionario-action-cards">
        <div className="cards-grid">
            {cards.map((card) => (
            <div key={card.id} className="funcionario-action-card">
                <div className="card-icon">{card.icon}</div>
                <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
                </div>
            </div>
            ))}
        </div>
        </section>
    )
    }


import "@/styles/admin.css";

export default function ActionCards() {
    const cards = [
        {
        id: 1,
        icon: "📄",
        title: "Ver Permisos de Salida,",
        subtitle: "Ausencia, Tardía o Incapacidad",
        },
        {
        id: 2,
        icon: "⚙️",
        title: "Ver Justificaciones.",
        subtitle: "",
        },
        {
        id: 3,
        icon: "🏢",
        title: "Gestionar Reportes de",
        subtitle: "Problemas y Daños.",
        },
        {
        id: 4,
        icon: "👥",
        title: "Administración de Personal",
        subtitle: "",
        },
    ]

    return (
        <section className="action-cards">
        <div className="cards-grid">
            {cards.map((card) => (
            <div key={card.id} className="action-card">
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



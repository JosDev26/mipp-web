import "../../styles/admin.css";
import Link from "next/link";

export default function ActionCardsFuncionario() {
  const cards = [
    {
      id: 1,
      icon: "📄",
      title: "Solicitar Permiso de Salida,",
      subtitle: "Ausencia, Tardía o Incapacidad",
    },
    {
      id: 2,
      icon: "👥❌",
      title: "Justificar Ausencia, Salida,",
      subtitle: "Tardía o Incapacidad.",
    },
    {
      id: 3,
      icon: "📄❌",
      title: <i>Justificar Omisión de marca.</i>,
      subtitle: "",
      href: "/funcionario/omision-marca"
    },
    {
      id: 4,
      icon: "🏢❗",
      title: "Reportar Problema o Daño.",
      subtitle: "",
    },
  ];

  return (
    <section className="action-cards">
      <div className="cards-grid">
        {cards.map((card) => (
          card.href ? (
            <Link href={card.href} key={card.id} className="action-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card-icon">{card.icon}</div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
              </div>
            </Link>
          ) : (
            <div key={card.id} className="action-card">
              <div className="card-icon">{card.icon}</div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
}

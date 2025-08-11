import "@/styles/admin.css";

    export default function HistorialSection() {
    const historialData = [
        {
        id: 1,
        fecha: "26/07/2025",
        motivo: "Exámenes rutinarios de sangre",
        estado: "Pendiente",
        tipo: "pendiente",
        },
        {
        id: 2,
        fecha: "18/06/2025",
        motivo: "Accidente automovilístico",
        estado: "Aprobado",
        tipo: "aprobado",
        },
        {
        id: 3,
        fecha: "15/06/2025",
        motivo: "Enfermedad repentina",
        estado: "Denegado",
        tipo: "denegado",
        },
    ]

    return (
        <section className="historial-section">
        <h2 className="historial-title">Historial</h2>

        <div className="historial-container">
            <div className="historial-table-container">
            <table className="historial-table">
                <thead>
                <tr>
                    <th>Fecha de solicitud</th>
                    <th>Motivo de solicitud</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                {historialData.map((item) => (
                    <tr key={item.id}>
                    <td>
                        <span className="status-indicator"></span>
                        {item.fecha}
                    </td>
                    <td>{item.motivo}</td>
                    <td>
                        <span className={`status-badge ${item.tipo}`}>{item.estado}</span>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <div className="historial-filters">
            <div className="filter-group">
                <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                Permisos
                </label>
                <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                Justificaciones
                </label>
                <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                Reportes
                </label>
            </div>
            </div>
        </div>
        </section>
    )
    }

import './gestionpermisos.css';

export default function gestionPermisos() {
    return (
        <div className="gestion-permisos-container">
                <head>
                    <title>Gestión de Permisos</title>
                </head>
                <body>
                <img src="/images/logoMIPP.png" alt="MIPP+ Logo" className="mipp-logo-header" />
                <h1>Gestión de Permisos</h1>
                <div class="content">
                    <div class="toolbar">
                        <a href='#' className="go-back">&lt; Volver</a>
                        <div className="search-wrapper">
                            {/* Icono de lupa (izquierda) */}
                            <svg
                                className="search-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>

                            {/* Campo de búsqueda */}
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Buscar..."
                            />

                            {/* Botón “Enter” (flecha derecha) */}
                            <button type="button" className="search-button">
                                <svg
                                className="search-button-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                >
                                <path
                                    d="M10 6l6 6-6 6"
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>
                            </button>
                            </div>
                        <a href="#" className="history-link">Historial</a>
                    </div>
                    <table class="permisos-table">
                        <thead>
                        <tr>
                            <th> </th>
                            <th>Nombre</th>
                            <th>Fecha solicitada</th>
                            <th>Fecha de solicitud</th>
                            <th>Hora de solicitud</th>
                            <th>Motivo</th>
                            <th>Acción</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nombre de ejemplo</td>
                            <td>DD/MM/AAAA</td>
                            <td>DD/MM/AAAA</td>
                            <td>HH:MM</td>
                            <td>Motivo de ejemplo</td>
                            <td><button class="btn-respond">Responder</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nombre de ejemplo</td>
                            <td>DD/MM/AAAA</td>
                            <td>DD/MM/AAAA</td>
                            <td>HH:MM</td>
                            <td>Motivo de ejemplo</td>
                            <td><button class="btn-respond">Responder</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nombre de ejemplo</td>
                            <td>DD/MM/AAAA</td>
                            <td>DD/MM/AAAA</td>
                            <td>HH:MM</td>
                            <td>Motivo de ejemplo</td>
                            <td><button class="btn-respond">Responder</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Nombre de ejemplo</td>
                            <td>DD/MM/AAAA</td>
                            <td>DD/MM/AAAA</td>
                            <td>HH:MM</td>
                            <td>Motivo de ejemplo</td>
                            <td><button class="btn-respond">Responder</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                </body>
        </div>
    );
}
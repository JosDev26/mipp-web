import React from "react";
import "./reportform.css"

export default function ReportForm() {
    return (
    <div className="report-form-container">
        <header>
        <button>&lt; Volver</button>
        <div>
            <img src="/logo-mipp.png" alt="MIPP+" />
            <img src="/logo-mep.png" alt="MEP" />
        </div>
        </header>
        <h1>
        Reporte de Problema de Infraestructura o Daño Material
        </h1>
        <form>
        <div>
            <span>
            Quien se suscribe <input type="text" value="Josué Gutiérrez Herrera" readOnly />,
            con cédula de identidad <input type="text" value="402760529" readOnly />,
            quien labora en la institución educativa <input type="text" value="CTP Mercedes Norte" readOnly />,
            en el puesto de <input type="text" value="Auxiliar Administrativo" readOnly />,
            en instancia de <input type="text" value="Personal docente" readOnly />. Reporta:
            </span>
        </div>
        <div className="report-type">
            <div>
            <textarea className="report-textarea"
                placeholder="Reporte:"
            />
            </div>
            <div>
            <textarea
                placeholder="Lugar: (Sea Específico)"
            />
            <div>
                Tipo de reporte:{" "}
                <select>
                <option>Seleccione una opción</option>
                <option>Infraestructura</option>
                <option>Equipo</option>
                <option>Material didáctico</option>
                <option>Otro</option>
                </select>
            </div>
            </div>
        </div>
        <div>
            <span>
            Presento el reporte a las{" "}
            <input type="text" value="3:38" readOnly /> del mes{" "}
            <input type="text" value="Abril" readOnly /> del año 2025 en Heredia, Mercedes Norte.
            </span>
            <button type="submit">
            Enviar Reporte
            </button>
        </div>
        </form>
    </div>
    );
}
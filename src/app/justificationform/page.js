import React from "react";
import "./justification.css";

export default function JustificationForm() {
    return (
        <div className="justification-form-container">
            <header className="justification-header">
                <button className="back-button">&lt; Volver</button>
                <div className="logos">
                    <img src="/logo-mipp.png" alt="MIPP+" className="logo-mipp" />
                    <img src="/logo-mep.png" alt="MEP" className="logo-mep" />
                </div>
            </header>
            <h1 className="form-title">
            Formulario de Justificación de Solicitud de Permiso de Salida, Ausencia, Tardía o Incapacidades
            </h1>
            <p className="form-important">
                <span>Importante:</span> Todo permiso de ausencia laboral está sujeto a cumplimiento de requisitos y copia adjunta de documento pertinente de cita, convocatoria o licencia, de ser posible con tres días de anticipación. Posterior a la ausencia y/o tardía, el funcionario debe de hacer entrega del comprobante pertinente de justificación de asistencia en el plazo no mayor de 48 (cuarenta y ocho) horas. Las licencias dependen de requisitos previos para su goce. De no presentar el comprobante se tramitará lo que corresponda.
            </p>
            <form className="justification-form">
                <div className="form-row" id="applicant-info">
                    <span>
                        Quien se suscribe <input type="text" value="Josué Gutiérrez Herrera" readOnly />,
                        con cédula de identidad <input type="text" value="402760529" readOnly />,
                        quien labora en la institución educativa <input type="text" value="CTP Mercedes Norte" readOnly />,
                        en el puesto de <input type="text" value="Auxiliar Administrativo" readOnly />,
                    </span>
                </div>
                <div className="form-row" id="justification-info">
                    <label>
                        Justificación de:
                        <select>
                            <option>Ausencia</option>
                            <option>Salida</option>
                            <option>Tardía</option>
                            <option>Incapacidad</option>
                        </select>
                    </label>
                    <span style={{ marginLeft: "2rem" }}>
                        ¿Hubo cambios?: 
                        <label><input type="radio" name="cambios" /> No</label>
                        <label><input type="radio" name="cambios" /> Sí</label>
                    </span>
                </div>
                <div className="form-row" id="date-time-section">
                    <div className="row">
                        <label>
                        Fecha
                        <input type="date" />
                        </label>
                        <label>
                        Hora (desde las - hasta las)
                        <div className="time-inputs">
                            <input type="time" placeholder="Desde las" />
                            <input type="time" placeholder="Hasta las" />
                        </div>
                        </label>
                        <label>
                        Tipo de jornada
                        <select>
                            <option>Jornada Laboral Completa</option>
                            <option>Media Jornada</option>
                        </select>
                        </label>
                    </div>
                    <div className="row" id="note-section">
                        <label>
                        Adjunto comprobante
                            <div className="radio-groupmini">
                                <label>
                                    <input type="radio" name="adjunto" /> Si
                                </label>
                                <label>
                                    <input type="radio" name="adjunto" /> No
                                </label>
                                <button type="button" className="attach-button">Adjuntar</button>
                                <span className="attached-file">Cita_medica.pdf</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="form-section">
                    <fieldset className="form-row">
                        <legend>Motivo</legend>
                        <div className="radio-group">
                            <label>
                            <input type="radio" name="motivo" /> Cita médica personal
                            </label>
                            <label>
                            <input type="radio" name="motivo" /> Acompañar a cita médica a padre, madre, hijos menores de edad o discapacitados, esposo o cónyuge.
                            </label>
                            <label>
                            <input type="radio" name="motivo" /> Asistencia a Convocatoria:
                            <select>
                                <option>Sindical</option>
                                <option>Otra</option>
                            </select>
                            </label>
                            <label>
                            <input type="radio" name="motivo" /> Atención de asuntos personales:
                            <input type="text" placeholder="Especifique" />
                            </label>
                        </div>
                    </fieldset>
                    <div className="form-row" id="observations-section">
                        <label>
                        <textarea placeholder="Observaciones:"></textarea>
                        </label>
                    </div>
                </div>
                <div className="form-end">
                    <div className="form-row">
                        <span>
                        Presento la solicitud a las <input type="text" value="3:38" readOnly /> del mes
                        <input type="text" value="Abril" readOnly /> del año 2025 en Heredia, Mercedes Norte.
                        </span>
                    </div>
                    <div className="form-row" style={{ textAlign: "right" }}>
                        <button type="submit" className="submit-button">
                        Enviar solicitud
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
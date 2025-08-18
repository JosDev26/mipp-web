"use client";
import React, {useState} from "react";
import "./justification.css";

export default function JustificationForm() {

    const today = new Date();
    today.setDate(today.getDate() + 3);
    const minDate = today.toISOString().split("T")[0];

    const maxDateObj = new Date(today);
    maxDateObj.setFullYear(today.getFullYear() + 1);
    const maxDate = maxDateObj.toISOString().split("T")[0];

    const [fecha, setFecha] = useState("");
    const [horaDesde, setHoraDesde] = useState("");
    const [horaHasta, setHoraHasta] = useState("");
    const [jornada, setJornada] = useState("");
    const [motivo, setMotivo] = useState("");
    const [motivoExtra, setMotivoExtra] = useState("");
    const [observaciones, setObservaciones] = useState("");

    const [variosDias, setVariosDias] = useState(false);
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");

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
                            <input
                                type="checkbox"
                                checked={variosDias}
                                onChange={e => setVariosDias(e.target.checked)}
                                style={{ marginRight: "0.5rem" }}
                            />
                            ¿Es una ausencia de varios días?
                        </label>
                        {!variosDias ? (
                            <label>
                                Fecha
                                <input
                                    type="date"
                                    min={minDate}
                                    max={maxDate}
                                    placeholder="Seleccione una fecha"
                                    onChange={e => setFecha(e.target.value)}
                                    className={fecha ? "filled" : ""}
                                    value={fecha}
                                />
                            </label>
                        ) : (
                            <>
                            <div className="date-range-group">
                                <label>
                                    Fecha inicio
                                    <input
                                        type="date"
                                        min={minDate}
                                        max={maxDate}
                                        placeholder="Desde"
                                        onChange={e => setFechaInicio(e.target.value)}
                                        className={fechaInicio ? "filled" : ""}
                                        value={fechaInicio}
                                    />
                                </label>
                                <label>
                                    Fecha fin
                                    <input
                                        type="date"
                                        min={fechaInicio || minDate}
                                        max={maxDate}
                                        placeholder="Hasta"
                                        onChange={e => setFechaFin(e.target.value)}
                                        className={fechaFin ? "filled" : ""}
                                        value={fechaFin}
                                        disabled={!fechaInicio}
                                    />
                                </label>
                            </div>
                            </>
                        )}
                    </div>
                    <div className="row">
                        <label>
                        Hora (desde las - hasta las)
                        <div className="time-inputs">
                            <input type="time" placeholder="Desde las" value={horaDesde}
                                        onChange={e => setHoraDesde(e.target.value)}
                                        className={horaDesde ? "filled" : ""} />
                            <input type="time" placeholder="Hasta las" value={horaHasta}
                                        onChange={e => setHoraHasta(e.target.value)}
                                        className={horaHasta ? "filled" : ""} />
                        </div>
                        </label>
                        <label>
                        Tipo de jornada
                        <select value={jornada} placeholder="Seleccione"
                                    onChange={e => setJornada(e.target.value)}
                                    className={jornada ? "filled" : ""}>
                            <option value="">Seleccione</option>
                            <option>Jornada Laboral Completa</option>
                            <option>Media Jornada</option>
                        </select>
                        </label>
                    </div>
                    <div className="row" id="note-section">
                        <label>
                        Adjunto comprobante
                            <div className="radio-groupmini">
                                <div className="mini-radio">
                                    <label>
                                        <input type="radio" name="adjunto" /> Si
                                    </label>
                                    <label>
                                        <input type="radio" name="adjunto" /> No
                                    </label>
                                </div>
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
                            <input type="radio" name="motivo" value="Cita médica personal"
                                        checked={motivo === "Cita médica personal"}
                                        onChange={e => setMotivo(e.target.value)} /> Cita médica personal
                            </label>
                            <label>
                            <input type="radio" name="motivo" value="Acompañar"
                                        checked={motivo === "Acompañar"}
                                        onChange={e => setMotivo(e.target.value)} /> Acompañar a cita médica a padre, madre, hijos menores de edad o discapacitados, esposo o cónyuge.
                            </label>
                            <label>
                            <input type="radio" name="motivo" value="Convocatoria"
                                        checked={motivo === "Convocatoria"}
                                        onChange={e => setMotivo(e.target.value)} /> Asistencia a Convocatoria:
                            <select value={motivoExtra}
                                        onChange={e => setMotivoExtra(e.target.value)}
                                        className={motivo === "Convocatoria" && motivoExtra ? "filled" : ""}
                                        disabled={motivo !== "Convocatoria"}>
                                <option value="">Seleccione</option>
                                <option>Sindical</option>
                                <option>Otra</option>
                            </select>
                            </label>
                            <label>
                            <input type="radio" name="motivo" value="Asuntos personales"
                                        checked={motivo === "Asuntos personales"}
                                        onChange={e => setMotivo(e.target.value)} /> Atención de asuntos personales:
                            <input type="text" placeholder="Especifique" value={motivoExtra}
                                        onChange={e => setMotivoExtra(e.target.value)}
                                        className={motivo === "Asuntos personales" && motivoExtra ? "filled" : ""}
                                        disabled={motivo !== "Asuntos personales"} />
                            </label>
                        </div>
                    </fieldset>
                    <div className="form-row" id="observations-section">
                        <label>
                        <textarea placeholder="Observaciones:" value={observaciones}
                            onChange={e => setObservaciones(e.target.value)}
                            className={observaciones ? "filled" : ""}></textarea>
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
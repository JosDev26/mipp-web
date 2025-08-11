"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { supabase } from "../supabaseClient";
import "./permission.css";

export default function PermissionForm() {
    const [userData, setUserData] = useState({
        name: "",
        id: "",
        position: "",
    });

    const [formData, setFormData] = useState({
        permitType: "Ausencia",
        date: "",
        timeFrom: "",
        timeTo: "",
        journeyType: "Jornada Laboral Completa",
        lessons: "",
        hours: "",
        exitTime: "",
        reason: "medical", // Valor inicial por defecto
        convocatoryType: "Sindical",
        personalMatter: "",
        observations: ""
    });

    const getNowCR = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Costa_Rica' }));
    const [nowCR, setNowCR] = useState(getNowCR());

    useEffect(() => {
        const timer = setInterval(() => setNowCR(getNowCR()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userIdStr = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
                if (!userIdStr) {
                    console.error("No hay userId en localStorage.");
                    return;
                }
                const userId = Number(userIdStr);

                const { data, error } = await supabase
                    .from("users")
                    .select("user_fname, user_sname, user_flname, user_slname, user_id, user_position")
                    .eq("user_id", userId)
                    .single();

                if (error) throw error;

                if (data) {
                    const fullName = [data.user_fname, data.user_sname, data.user_flname, data.user_slname]
                        .filter(Boolean)
                        .join(" ");
                    setUserData({
                        name: fullName,
                        id: data.user_id || "",
                        position: data.user_position || "",
                    });
                }
            } catch (err) {
                console.error("Error fetching user data:", err.message || err);
            }
        };
        fetchUserData();
    }, []);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toTimeInput = (d) => {
        const pad = (n) => String(n).padStart(2, "0");
        return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };

    const monthName = (d) => {
        const s = new Intl.DateTimeFormat('es-CR', { month: 'long', timeZone: 'America/Costa_Rica' }).format(d);
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    const handleBack = () => {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        alert("Solicitud enviada con éxito.");
    };

    return (
        <div className="permission-form-container">
            <header className="permission-header">
                <button className="back-button" onClick={handleBack}>
                    <ChevronLeft size={18} /> Volver
                </button>
                <div className="logos">
                    <Image src="/images/logoMIPP.png" alt="MIPP+" width={120} height={40} />
                    <div className="government-logos">
                        <Image src="/images/logoMEP.png" alt="Ministerio de Educación Pública" width={150} height={40} />
                        <Image src="/images/logoCR.png" alt="Gobierno de Costa Rica" width={130} height={40} />
                        <Image src="/images/logoCTPMN.png" alt="CTP Mercedes Norte" width={60} height={60} />
                    </div>
                </div>
            </header>

            <h1 className="form-title">
                Formulario de Solicitud de Permiso de Salida, Ausencia, Tardía o Incapacidades
            </h1>

            <p className="form-important">
                <strong>Importante:</strong> Todo permiso de ausencia laboral está sujeto a cumplimiento de requisitos y copia adjunta de documento pertinente de cita, convocatoria o licencia, de ser posible con tres días de anticipación. Posterior a la ausencia y/o tardía, el funcionario debe de hacer entrega del comprobante pertinente de justificación de asistencia en el plazo no mayor de 48 (cuarenta y ocho) horas. Las licencias dependen de requisitos previos para su goce. De no presentar el comprobante se tramitará lo que corresponda.
            </p>

            <form className="permission-form" onSubmit={handleSubmit}>
                <div className="user-info-section">
                    Quien se suscribe <span className="user-data-pill">{userData.name}</span>,
                    con cédula de identidad <span className="user-data-pill">{userData.id}</span>,
                    quien labora en la institución educativa <span className="user-data-pill">CTP Mercedes Norte</span>,
                    en el puesto de <span className="user-data-pill">{userData.position}</span>, solicita:
                </div>

                <div className="permit-type-section">
                    <label className="permit-label">Permiso de:</label>
                    <select
                        className="permit-select"
                        value={formData.permitType}
                        onChange={(e) => handleInputChange('permitType', e.target.value)}
                    >
                        <option>Ausencia</option>
                        <option>Salida</option>
                        <option>Tardía</option>
                        <option>Incapacidad</option>
                    </select>
                </div>

                <div className="details-grid">
                    <div className="field-group">
                        <label>Fecha</label>
                        <input type="date" value={formData.date} onChange={(e) => handleInputChange('date', e.target.value)} />
                    </div>
                    <div className="field-group time-field-group">
                        <label>Hora</label>
                        <div className="time-range">
                            <span>Desde las</span>
                            <input type="time" value={formData.timeFrom} onChange={(e) => handleInputChange('timeFrom', e.target.value)} />
                            <span>Hasta las</span>
                            <input type="time" value={formData.timeTo} onChange={(e) => handleInputChange('timeTo', e.target.value)} />
                        </div>
                    </div>
                    <div className="field-group">
                        <label>Tipo de jornada</label>
                        <select value={formData.journeyType} onChange={(e) => handleInputChange('journeyType', e.target.value)}>
                            <option>Jornada Laboral Completa</option>
                            <option>Media Jornada</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label>Cantidad de lecciones</label>
                        <input type="number" min="0" value={formData.lessons} onChange={(e) => handleInputChange('lessons', e.target.value)} />
                    </div>
                    <div className="field-group">
                        <label>Cantidad de horas</label>
                        <input type="number" min="0" value={formData.hours} onChange={(e) => handleInputChange('hours', e.target.value)} />
                    </div>
                    <div className="field-group">
                        <label>Hora de salida del centro educativo</label>
                        <input type="time" value={formData.exitTime} onChange={(e) => handleInputChange('exitTime', e.target.value)} />
                    </div>
                </div>

                <div className="reason-observations-grid">
                    <fieldset className="reason-fieldset">
                        <legend>Motivo</legend>
                        <div className="radio-option">
                            <input type="radio" name="reason" value="medical" checked={formData.reason === 'medical'} onChange={(e) => handleInputChange('reason', e.target.value)} />
                            <label>Cita médica personal</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" name="reason" value="family_medical" checked={formData.reason === 'family_medical'} onChange={(e) => handleInputChange('reason', e.target.value)} />
                            <label>Acompañar a cita médica a padre, madre, hijos menores de edad o discapacitados, esposo o cónyuge.</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" name="reason" value="convocatory" checked={formData.reason === 'convocatory'} onChange={(e) => handleInputChange('reason', e.target.value)} />
                            <label>Asistencia a Convocatoria:</label>
                            <select
                                value={formData.convocatoryType}
                                onChange={(e) => handleInputChange('convocatoryType', e.target.value)}
                                disabled={formData.reason !== 'convocatory'}
                            >
                                <option>Sindical</option>
                                <option>Otra</option>
                            </select>
                        </div>
                        <div className="radio-option">
                            <input type="radio" name="reason" value="personal" checked={formData.reason === 'personal'} onChange={(e) => handleInputChange('reason', e.target.value)} />
                            <label>Atención de asuntos personales:</label>
                            <input
                                type="text"
                                placeholder="Especifique"
                                value={formData.personalMatter}
                                onChange={(e) => handleInputChange('personalMatter', e.target.value)}
                                disabled={formData.reason !== 'personal'}
                            />
                        </div>
                    </fieldset>
                    <div className="observations-group">
                        <label>Observaciones:</label>
                        <textarea
                            rows="8"
                            value={formData.observations}
                            onChange={(e) => handleInputChange('observations', e.target.value)}
                        />
                    </div>
                </div>

                <div className="submission-section">
                    <span>
                        Presento la solicitud a las <span className="time-pill">{toTimeInput(nowCR)}</span> del mes
                        <span className="time-pill">{monthName(nowCR)}</span> del año {nowCR.getFullYear()} en Heredia, Mercedes Norte.
                    </span>
                    <button type="submit" className="submit-button">
                        Enviar solicitud
                    </button>
                </div>
            </form>
        </div>
    );
}
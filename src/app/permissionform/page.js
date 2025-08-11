"use client"
import React, { useEffect, useState } from "react";
import sheet from "../permissionform/permission.css";
import { supabase } from "../supabaseClient"; // Ajuste de ruta para resolver el módulo correctamente
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function PermissionForm() {
    const [userData, setUserData] = useState({
        name: "",
        id: "",
        position: "",
    });
    const [userError, setUserError] = useState("");

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Fecha/hora en vivo para Costa Rica
    const getNowCR = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Costa_Rica' }));
    const [nowCR, setNowCR] = useState(getNowCR());

    useEffect(() => {
        const timer = setInterval(() => setNowCR(getNowCR()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Helpers para inputs HTML y textos (mes en español con mayúscula inicial)
    const toDateInput = (d) => {
        const pad = (n) => String(n).padStart(2, "0");
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    };
    const toTimeInput = (d) => {
        const pad = (n) => String(n).padStart(2, "0");
        return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };
    const toTimeInputSeconds = (d) => {
        const pad = (n) => String(n).padStart(2, "0");
        return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };
    const monthName = (d) => {
        const s = new Intl.DateTimeFormat('es-CR', { month: 'long', timeZone: 'America/Costa_Rica' }).format(d);
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userIdStr = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
                if (!userIdStr) {
                    setUserError("No hay sesión activa. Por favor, inicie sesión para autocompletar sus datos.");
                    return;
                }
                // Usar el userId como string para máxima compatibilidad
                const { data, error } = await supabase
                    .from("users")
                    .select("user_fname, user_sname, user_flname, user_slname, user_id, user_position")
                    .eq("user_id", userIdStr)
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
                setUserError("Error al cargar los datos del usuario: " + (err.message || err));
            }
        };
        fetchUserData();
    }, []);

        return (
        <div className="permission-form-container">
            {userError && (
                <div style={{ background: '#ffeaea', color: '#a00', padding: 12, borderRadius: 6, marginBottom: 16, textAlign: 'center', fontWeight: 600 }}>
                    {userError}
                </div>
            )}
        <header className="permission-header">
        <button className="back-button" onClick={() => history.back()}><ChevronLeft size={18}/> Volver</button>
        <div className="logos">
            <Image src="/logo-mipp.png" alt="MIPP+" className="logo-mipp" width={120} height={40} />
            <Image src="/logo-mep.png" alt="MEP" className="logo-mep" width={160} height={40} />
        </div>
        </header>
        <h1 className="form-title">
        Formulario de Solicitud de Permiso de Salida, Ausencia, Tardía o Incapacidades
        </h1>
        <p className="form-important">
        <span>Importante:</span> Todo permiso de ausencia laboral está sujeto a cumplimiento de requisitos y copia adjunta de documento pertinente de cita, convocatoria o licencia, de ser posible con tres días de anticipación. Posterior a la ausencia y/o tardía, el funcionario debe de hacer entrega del comprobante pertinente de justificación de asistencia en el plazo no mayor de 48 (cuarenta y ocho) horas. Las licencias dependen de requisitos previos para su goce. De no presentar el comprobante se tramitará lo que corresponda.
        </p>
        <form className="permission-form">
        <div className="form-row">
            <span>
            Quien se suscribe <input type="text" value={userData.name} readOnly />
            con cédula de identidad <input type="text" value={userData.id} readOnly />
            quien labora en la institución educativa <input type="text" value="CTP Mercedes Norte" readOnly />
            en condición de <input type="text" value={userData.position} readOnly />
            solicita:
            </span>
        </div>
        <div className="form-row">
            <label className="permiso-label">
            Permiso de:
            <select className="permiso-select">
                <option>Ausencia</option>
                <option>Salida</option>
                <option>Tardía</option>
                <option>Incapacidad</option>
            </select>
            </label>
        </div>
        <div className="form-row" id="date-time-section">
            <label>
            Fecha
            <input type="date" value={toDateInput(nowCR)} readOnly />
            </label>
            <label>
            Hora
            <div className="time-range">
                <span className="time-label">Desde las</span>
                <input type="time" step="1" value={toTimeInputSeconds(nowCR)} readOnly />
                <span className="time-label">Hasta las</span>
                <input type="time" step="1" value={toTimeInputSeconds(nowCR)} readOnly />
            </div>
            </label>
            <label>
            Tipo de jornada
            <select>
                <option>Jornada Laboral Completa</option>
                <option>Media Jornada</option>
            </select>
            </label>
            <label>
            Cantidad de lecciones
            <input type="number" min="0" />
            </label>
            <label>
            Cantidad de horas
            <input type="number" min="0" />
            </label>
            <label>
            Hora de salida del centro educativo
            <input type="time" step="1" value={toTimeInputSeconds(nowCR)} readOnly />
            </label>
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
            <div className="form-row">
                <label>
                Observaciones:
                <textarea rows="5" />
                </label>
            </div>
        </div>
        <div className="form-section">
            <div className="form-row">
                <span>
                Presento la solicitud a las <input type="text" value={toTimeInputSeconds(nowCR)} readOnly /> del mes
                <input type="text" value={monthName(nowCR)} readOnly /> del año {nowCR.getFullYear()} en Heredia, Mercedes Norte.
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
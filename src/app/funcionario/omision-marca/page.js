"use client";
import React, { useEffect, useState } from "react";
import sheet from "../../permissionform/permission.css";
import { supabase } from "../../supabaseClient";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function OmisionMarcaForm() {
  const [userData, setUserData] = useState({
    name: "",
    id: "",
    position: "",
    instancia: "",
  });
  const [now, setNow] = useState(new Date());
  const getNowCR = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Costa_Rica' }));
  const [nowCR, setNowCR] = useState(getNowCR());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    const timerCR = setInterval(() => setNowCR(getNowCR()), 1000);
    return () => { clearInterval(timer); clearInterval(timerCR); };
  }, []);

  // Helpers para inputs y textos
  const toDateInput = (d) => {
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
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
        const userId = userIdStr ? Number(userIdStr) : null;
        if (!userId) {
          console.error("No hay userId en localStorage; no se puede cargar el usuario actual.");
          return;
        }
        const { data, error } = await supabase
          .from("users")
          .select("user_fname, user_sname, user_flname, user_slname, user_id, user_position, user_instance")
          .eq("user_id", userId)
          .single();
        if (error) throw error;
        if (data) {
          const fullName = [data.user_fname, data.user_sname, data.user_flname, data.user_slname].filter(Boolean).join(" ");
          setUserData({
            name: fullName,
            id: data.user_id || "",
            position: data.user_position || "",
            instancia: data.user_instance || "",
          });
        }
      } catch (err) {
        console.error("Error fetching user data:", err.message || err);
      }
    };
    fetchUserData();
  }, []);

  // Form state
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [justificacion, setJustificacion] = useState("");

  return (
    <div className="permission-form-container">
      <header className="permission-header">
        <button className="back-button" onClick={() => history.back()}><ChevronLeft size={18}/> Volver</button>
        <div className="logos">
          <Image src="/logo-mipp.png" alt="MIPP+" className="logo-mipp" width={120} height={40} />
          <Image src="/logo-mep.png" alt="MEP" className="logo-mep" width={160} height={40} />
        </div>
      </header>
      <h1 className="form-title">Justificación de Omisión de Marca</h1>
      <form className="permission-form">
        <div className="form-row">
          <span>
            Quien se suscribe <input type="text" value={userData.name} readOnly />
            , con cédula de identidad <input type="text" value={userData.id} readOnly />
            , quien labora en la institución educativa <input type="text" value="CTP Mercedes Norte" readOnly />
            , en el puesto de <input type="text" value={userData.position} readOnly />
            , en instancia de <input type="text" value={userData.instancia} readOnly />
            , justifica:
          </span>
        </div>
        <div className="form-row">
          <label className="permiso-label" style={{ color: '#8b1538' }}>
            Omisión de marca:
          </label>
          <span style={{ fontWeight: 700 }}>Fecha: 22/4/25</span>
        </div>
        <div className="form-row">
          <label>
            Fecha
            <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
          </label>
          <label style={{ marginLeft: 20 }}>
            Tipo
            <label style={{ marginLeft: 10 }}><input type="radio" name="tipo" value="Entrada" checked={tipo === "Entrada"} onChange={e => setTipo(e.target.value)} /> Entrada</label>
            <label style={{ marginLeft: 10 }}><input type="radio" name="tipo" value="Salida" checked={tipo === "Salida"} onChange={e => setTipo(e.target.value)} /> Salida</label>
            <label style={{ marginLeft: 10 }}><input type="radio" name="tipo" value="Todo el día" checked={tipo === "Todo el día"} onChange={e => setTipo(e.target.value)} /> Todo el día</label>
            <label style={{ marginLeft: 10 }}><input type="radio" name="tipo" value="Salida anticipada" checked={tipo === "Salida anticipada"} onChange={e => setTipo(e.target.value)} /> Salida anticipada</label>
          </label>
        </div>
        <div className="form-row">
          <label>
            Justificación:
            <textarea value={justificacion} onChange={e => setJustificacion(e.target.value)} />
          </label>
        </div>
        <div className="form-row">
          <span>
            Presento la justificación a las <input type="text" value={toTimeInputSeconds(nowCR)} readOnly style={{ width: 80 }} /> del mes <input type="text" value={monthName(nowCR)} readOnly style={{ width: 80 }} /> del año {nowCR.getFullYear()} en Heredia, Mercedes Norte.
          </span>
        </div>
        <div className="form-row" style={{ textAlign: "right" }}>
          <button type="submit" className="submit-button">Enviar solicitud</button>
        </div>
      </form>
    </div>
  );
}"use client";
import React, { useEffect, useState } from "react";
import sheet from "../../permissionform/permission.css";
import { supabase } from "../../supabaseClient";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function OmisionMarcaForm() {
  const [userData, setUserData] = useState({
    name: "",
    id: "",
    position: "",
  });
  const [now, setNow] = useState(new Date());
  const getNowCR = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Costa_Rica' }));
  const [nowCR, setNowCR] = useState(getNowCR());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    const timerCR = setInterval(() => setNowCR(getNowCR()), 1000);
    return () => { clearInterval(timer); clearInterval(timerCR); };
  }, []);

  // Helpers para inputs y textos
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
        const userId = userIdStr ? Number(userIdStr) : null;
        if (!userId) {
          console.error("No hay userId en localStorage; no se puede cargar el usuario actual.");
          return;
        }
        const { data, error } = await supabase
          .from("users")
          .select("user_fname, user_sname, user_flname, user_slname, user_id, user_position")
          .eq("user_id", userId)
          .single();
        if (error) throw error;
        if (data) {
          const fullName = [data.user_fname, data.user_sname, data.user_flname, data.user_slname].filter(Boolean).join(" ");
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

  // Form state
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [justificacion, setJustificacion] = useState("");

  return (
    <div className="permission-form-container">
      <header className="permission-header">
        <button className="back-button" onClick={() => history.back()}><ChevronLeft size={18}/> Volver</button>
        <div className="logos">
          <Image src="/logo-mipp.png" alt="MIPP+" className="logo-mipp" width={120} height={40} />
          <Image src="/logo-mep.png" alt="MEP" className="logo-mep" width={160} height={40} />
        </div>
      </header>
      <h1 className="form-title">Justificación de Omisión de Marca</h1>
      <form className="permission-form">
        <div className="form-row">
          <span>
            Quien se suscribe <input type="text" value={userData.name} readOnly />
            con cédula de identidad <input type="text" value={userData.id} readOnly />
            quien labora en la institución educativa <input type="text" value="CTP Mercedes Norte" readOnly />
            en condición de <input type="text" value={userData.position} readOnly />
            justifica:
          </span>
        </div>
        <div className="form-row">
          <label className="permiso-label" style={{ color: '#8b1538' }}>
            Omisión de marca:
          </label>
          <span style={{ fontWeight: 700 }}>Fecha: {toDateInput(nowCR)}</span>
        </div>
        <div className="form-row">
          <label>
            Fecha
            <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
          </label>
          <label style={{ marginLeft: 20 }}>
            Tipo
            <label style={{ marginLeft: 10 }}><input type="radio" name="tipo" value="Entrada" checked={tipo === "Entrada"} onChange={e => setTipo(e.target.value)} /> Entrada</label>
            <label style={{ marginLeft: 10 }}><input type="radio" name="tipo" value="Salida" checked={tipo === "Salida"} onChange={e => setTipo(e.target.value)} /> Salida</label>
            <label style={{ marginLeft: 10 }}><input type="radio" name="tipo" value="Todo el día" checked={tipo === "Todo el día"} onChange={e => setTipo(e.target.value)} /> Todo el día</label>
            <label style={{ marginLeft: 10 }}><input type="radio" name="tipo" value="Salida anticipada" checked={tipo === "Salida anticipada"} onChange={e => setTipo(e.target.value)} /> Salida anticipada</label>
          </label>
        </div>
        <div className="form-row">
          <label>
            Justificación:
            <textarea value={justificacion} onChange={e => setJustificacion(e.target.value)} />
          </label>
        </div>
        <div className="form-row">
          <span>
            Presento la justificación a las <input type="text" value={toTimeInputSeconds(nowCR)} readOnly style={{ width: 80 }} /> del mes <input type="text" value={monthName(nowCR)} readOnly style={{ width: 80 }} /> del año {nowCR.getFullYear()} en Heredia, Mercedes Norte.
          </span>
        </div>
        <div className="form-row" style={{ textAlign: "right" }}>
          <button type="submit" className="submit-button">Enviar solicitud</button>
        </div>
      </form>
    </div>
  );
}

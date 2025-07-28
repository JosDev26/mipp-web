"use client"

import { useState } from "react";
import { supabase } from "../supabaseClient";
import { toast, ToastContainer } from "react-toastify";
import bcrypt from "bcryptjs";
import "react-toastify/dist/ReactToastify.css";


export default function RegisterPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userFn, setUserFn] = useState("");
  const [userSn, setUserSn] = useState("");
  const [userFlname, setUserFlname] = useState("");
  const [userSlname, setUserSlname] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [userCondition, setUserCondition] = useState("");
  const [userInstance, setUserInstance] = useState("");
  const [userCategory, setUserCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!userId.trim() || !password.trim() || !userFn.trim() || !userSn.trim() || !userFlname.trim() || !userSlname.trim() || !userPosition.trim() || !userCondition.trim() || !userInstance.trim() || !userCategory.trim()) {
      toast.error("Por favor, complete todos los campos.");
      return;
    }
    setLoading(true);
    try {
      const passwordHash = await bcrypt.hash(password, 12);
      const { error } = await supabase
        .from("users")
        .insert([
          {
            user_id: userId.trim(),
            password: passwordHash,
            user_fname: userFn.trim(),
            user_sname: userSn.trim(),
            user_flname: userFlname.trim(),
            user_slname: userSlname.trim(),
            user_position: userPosition.trim(),
            user_condition: userCondition.trim(),
            user_instance: userInstance.trim(),
            user_category: userCategory.trim(),
            user_state: true
          }
        ]);
      if (error) {
        toast.error(error.message || "Error al registrar.");
      } else {
        toast.success("¡Registro exitoso!");
        setUserId("");
        setPassword("");
        setUserFn("");
        setUserSn("");
        setUserFlname("");
        setUserSlname("");
        setUserPosition("");
        setUserCondition("");
        setUserInstance("");
        setUserCategory("");
      }
    } catch (err) {
      toast.error("Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #39c5bb 0%, #00b4d8 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <form
        onSubmit={handleRegister}
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0, 180, 216, 0.15)",
          padding: "2.5rem 2rem",
          minWidth: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#39c5bb",
            marginBottom: "1.5rem",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Registro
        </h2>
        <input
          type="text"
          placeholder="ID de usuario"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Primer nombre"
          value={userFn}
          onChange={(e) => setUserFn(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Segundo nombre"
          value={userSn}
          onChange={(e) => setUserSn(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Primer apellido"
          value={userFlname}
          onChange={(e) => setUserFlname(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Segundo apellido"
          value={userSlname}
          onChange={(e) => setUserSlname(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Posicion"
          value={userPosition}
          onChange={(e) => setUserPosition(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Condicion"
          value={userCondition}
          onChange={(e) => setUserCondition(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Instancia"
          value={userInstance}
          onChange={(e) => setUserInstance(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={userCategory}
          onChange={(e) => setUserCategory(e.target.value)}
          style={{ marginBottom: "1.5rem", padding: "0.75rem", borderRadius: "8px", border: "1px solid #39c5bb", width: "100%", fontSize: "1rem", outline: "none" }}
          disabled={loading}
        />
        <button
          type="submit"
          style={{
            background: "#39c5bb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.2s",
            boxShadow: "0 2px 8px rgba(57,197,187,0.12)",
          }}
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
}
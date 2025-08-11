"use client";

import Header from "../../../components/components/Header";
import Welcome from "../../../components/components/Welcome";
import ActionCardsFuncionario from "../../../components/components/ActionCardsFuncionario";
import "../../../styles/admin.css";

export default function FuncionarioPage() {
  return (
    <div className="app-container funcionario">
      <div className="geometric-background">
        <div className="diagonal-left-funcionario"></div>
        <div className="diagonal-right-funcionario"></div>
      </div>
      <div className="content-wrapper">
        <Header activePage="funcionario" />
        <main className="main-content">
          <Welcome />
          <ActionCardsFuncionario />
        </main>
      </div>
    </div>
  );
}

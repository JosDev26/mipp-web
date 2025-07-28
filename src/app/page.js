import sheet from "../app/login.css"


export default function page() {
  return (
    
      <div className="login-container">
      {/* Sección izquierda - Fondo rojo con ilustraciones */}
      <div className="left-section">
        {/* Sol en la esquina superior izquierda */}
        <div className="sun-container">
          <img src="/images/Sol.png" alt="Sol" className="sun-image" />
        </div>

        {/* Título principal */}
        <div className="title-container">
          <div className="title-content">
            <h1 className="main-title">"Modulo Inteligente de Permisos de Personal +"</h1>
          </div>
        </div>

        {/* Ilustración de edificios en la parte inferior */}
        <div className="buildings-container">
          <img src="/images/edificios.png" alt="edificios" className="edificios-image" />
        </div>
      </div>

      {/* Sección derecha - Formulario de login */}
      <div className="right-section">
        {/* Header con logos */}
        <div className="header-logos">
          <div className="logo-tpmn">
            <img src="/images/logoCTPMN.png" alt="TPMN Logo" className="tpmn-logo" />
          </div>
          <div className="logo-mipp">
            <img src="/images/logoMIPP.png" alt="MIPP+ Logo" className="mipp-logo" />
          </div>
        </div>

        {/* Formulario de login centrado */}
        <div className="form-container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2 className="form-title">Inicio de Sesión</h2>
            </div>

            <form className="login-form">
              <div className="input-group">
                <label htmlFor="identification" className="input-label">
                  Identificación
                </label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <input id="identification" type="text" className="form-input" placeholder="" />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="password" className="input-label">
                  Contraseña
                </label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <circle cx="12" cy="16" r="1"></circle>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <input id="password" type="password" className="form-input" placeholder="" />
                </div>
              </div>

              <div className="forgot-password">
                <a href="#" className="forgot-link">
                  ¿Olvidó su contraseña?
                </a>
              </div>

              <button type="submit" className="submit-button">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

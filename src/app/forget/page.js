import Link from "next/link";


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
              <h2 className="form-title">Recuperar contraseña</h2>
            </div>

            <form className="login-form">
              <p className="form-description" style={{marginBottom: '1rem', color: '#6b0f1a', fontWeight: 500}}>
                Ingresa tu identificación o correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
              </p>
              <div className="input-group">
                <label htmlFor="user" className="input-label">
                  Identificación o correo
                </label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <input id="user" type="text" className="form-input" placeholder="Ej: usuario@correo.com" />
                </div>
              </div>

              <div className="forgot-password">
                <Link href="/" className="forgot-link" style={{color: '#b71c1c', fontSize: '0.95em'}}>
                  &lt;- Volver al inicio
                </Link>
              </div>


              <button type="submit" className="submit-button">
                Enviar instrucciones
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
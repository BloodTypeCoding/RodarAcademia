export default function InstructorPanel() {
  return (
    <>
      <style>{`
        .instructor-body {
          --bg-canvas: #f8f6f0;
          --bg-card: #fdfcf9;
          --primary-cyan: #00d2ff;
          --grid-line: #000000;
          --table-header: #cccccc;
          --btn-gray: #e0f2f1;
          --text-dark: #1a1a1a;
          --text-muted: #555555;
          --font-main: "Arial", sans-serif;
          font-family: var(--font-main);
          background-color: var(--bg-canvas);
          color: var(--text-dark);
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          min-height: 100vh;
        }
        .app-content {
          display: flex;
          width: 100%;
          max-width: 1000px;
          flex-direction: column;
          gap: 60px;
        }
        .panel-container {
          background-color: var(--bg-card);
          width: 100%;
          position: relative;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          padding: 30px;
          min-height: 700px;
        }
        .panel-title-tag {
          position: absolute;
          top: -25px;
          left: 10px;
          font-size: 14px;
          color: #888;
        }
        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }
        .logo-placeholder {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 2px solid #0a4f80;
          background: #fff url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="25" fill="none" stroke="%230a4f80" stroke-width="4"/><path d="M20,80 Q50,50 80,80" fill="none" stroke="%230a4f80" stroke-width="4"/></svg>') center/70% no-repeat;
        }
        .center-banner {
          background-color: var(--primary-cyan);
          color: white;
          padding: 8px 120px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 16px;
          text-align: center;
        }
        .profile-trigger {
          background-color: var(--primary-cyan);
          color: white;
          padding: 8px 25px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
          text-decoration: none;
          display: inline-block;
        }
        .nav-tabs {
          display: flex;
          justify-content: flex-start;
          border-bottom: 2px solid var(--grid-line);
          margin-bottom: 20px;
          padding-bottom: 5px;
          gap: 40px;
        }
        .nav-tabs span {
          font-size: 11px;
          font-weight: bold;
          cursor: pointer;
          text-transform: uppercase;
        }
        .nav-tabs span.active {
          background-color: #b2ebf2;
          padding: 2px 6px;
          border: 1px solid var(--text-dark);
        }
        .instructor-info {
          position: absolute;
          right: 30px;
          top: 110px;
          font-size: 12px;
          line-height: 1.5;
          text-align: left;
        }
        .instructor-info .name {
          font-weight: bold;
        }
        .schedule-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-top: 1px solid var(--grid-line);
          border-left: 1px solid var(--grid-line);
          margin-top: 10px;
          background-color: #ffffff;
        }
        .grid-header,
        .grid-cell {
          border-right: 1px solid var(--grid-line);
          border-bottom: 1px solid var(--grid-line);
          padding: 10px 5px;
          text-align: center;
          font-size: 12px;
          min-height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .grid-header {
          background-color: #ffffff;
          font-weight: bold;
        }
        .grid-cell.filled {
          background-color: #e0f7fa;
          font-weight: 500;
        }
        .action-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
        .btn {
          background-color: var(--btn-gray);
          border: 1px solid var(--text-dark);
          padding: 6px 25px;
          border-radius: 15px;
          font-size: 12px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s;
        }
        .btn:hover {
          background-color: #b2dfdb;
        }
        .ads-container {
          display: flex;
          gap: 20px;
          margin-top: 40px;
        }
        .ad-placeholder {
          height: 90px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 18px;
        }
        .ad-icecream {
          background: linear-gradient(45deg, #e6ceb7, #c19a6b);
          flex: 4;
          position: relative;
        }
        .ad-icecream::after {
          content: "ICE CREAM";
          font-family: "Impact", sans-serif;
          letter-spacing: 2px;
        }
        .ad-blackfriday {
          background: #000000;
          flex: 4;
          color: #fff;
        }
        .ad-blackfriday::after {
          content: "blackfriday";
          font-family: "Georgia", serif;
          font-style: italic;
        }
        .logout-link {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 11px;
          text-decoration: underline;
          color: var(--text-dark);
          cursor: pointer;
        }
        .students-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 30px;
          background-color: #ffffff;
        }
        .students-table th,
        .students-table td {
          border: 1px solid var(--grid-line);
          padding: 10px;
          font-size: 14px;
          text-align: left;
        }
        .students-table th {
          background-color: var(--table-header);
          font-weight: bold;
          text-align: center;
        }
        .students-table th:nth-child(1) {
          width: 5%;
        }
        .students-table th:nth-child(2) {
          width: 75%;
        }
        .students-table th:nth-child(3) {
          width: 20%;
        }
        .students-table td.center-text {
          text-align: center;
        }
        .report-footer-btn {
          background-color: #e0f7fa;
          border: none;
          border-radius: 0 15px 15px 0;
          padding: 8px 25px;
          font-size: 13px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: absolute;
          bottom: 30px;
          left: 30px;
          cursor: pointer;
        }
        .report-footer-btn::before {
          content: "\\1F4CA";
          font-size: 14px;
        }
        .panel-container-students {
          padding-bottom: 90px;
        }
      `}</style>

      <div className="instructor-body">
        <div className="app-content">
          <div className="panel-container">
            <span className="panel-title-tag">Panel-Instructor</span>

            <header className="panel-header">
              <div className="logo-placeholder" />
              <div className="center-banner">Instructores</div>
              <a href="#" className="profile-trigger">Mi perfil</a>
            </header>

            <nav className="nav-tabs">
              <span>Tipo Clase</span>
              <span>Alumnos</span>
              <span>Asistencia</span>
              <span>Reporte</span>
              <span>Ayuda</span>
            </nav>

            <aside className="instructor-info">
              <p className="name">Juan David Acevedo</p>
              <p>CC: 1121935674</p>
              <p>{'\uD83D\uDCDE'} 3133900115</p>
              <p>{'\u2709\uFE0F'} juandavid@gmail.com</p>
            </aside>

            <main style={{ width: '75%' }}>
              <div className="schedule-grid">
                <div className="grid-header">Lunes</div>
                <div className="grid-header">Martes</div>
                <div className="grid-header">Miércoles</div>
                <div className="grid-header">Jueves</div>
                <div className="grid-header">Viernes</div>
                <div className="grid-header">Sábado</div>

                <div className="grid-cell filled">6AM-8AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">6AM-8AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">6AM-8AM</div>
                <div className="grid-cell" />

                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>

                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>

                <div className="grid-cell filled">6AM-8AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">6AM-8AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>
                <div className="grid-cell" />

                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>

                <div className="grid-cell filled">6AM-8AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">6AM-8AM</div>
                <div className="grid-cell" />
                <div className="grid-cell filled">8AM-10AM</div>
                <div className="grid-cell" />
              </div>

              <div className="action-buttons" style={{ justifyContent: 'flex-start', paddingLeft: '110px' }}>
                <button className="btn">Editar</button>
                <button className="btn">Eliminar</button>
              </div>
            </main>

            <footer className="ads-container">
              <div className="ad-placeholder ad-icecream" />
              <div className="ad-placeholder ad-blackfriday" />
              <div className="logout-link">Sesión Activa</div>
            </footer>
          </div>

          <div className="panel-container panel-container-students">
            <span className="panel-title-tag">Panel-Instructor</span>

            <header className="panel-header" style={{ justifyContent: 'flex-start' }}>
              <div className="logo-placeholder" />
            </header>

            <nav className="nav-tabs" style={{ marginTop: '10px' }}>
              <span>Mi Clase</span>
              <span className="active">Alumnos</span>
              <span>Asistencia</span>
              <span>Reporte</span>
              <span>Ayuda</span>
            </nav>

            <table className="students-table">
              <thead>
                <tr>
                  <th />
                  <th>Alumnos</th>
                  <th>Asistencia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center-text">1</td>
                  <td>Ramos Maria de los angeles</td>
                  <td />
                </tr>
                <tr>
                  <td className="center-text">2</td>
                  <td>Villa Lina Maria</td>
                  <td />
                </tr>
                <tr>
                  <td className="center-text">3</td>
                  <td>Restrepo Juan manuel</td>
                  <td />
                </tr>
                <tr>
                  <td className="center-text">4</td>
                  <td>Arboleda Juan felipe</td>
                  <td />
                </tr>
                <tr>
                  <td className="center-text">5</td>
                  <td>Gallego Jheremy</td>
                  <td />
                </tr>
                <tr>
                  <td className="center-text">6</td>
                  <td>Moreno Samuel</td>
                  <td />
                </tr>
              </tbody>
            </table>

            <div className="action-buttons" style={{ justifyContent: 'flex-end', marginTop: '15px' }}>
              <button className="btn">Editar</button>
              <button className="btn">Eliminar</button>
            </div>

            <button className="report-footer-btn">Reporte</button>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from 'react';

const ICONS = { horarios: '\uD83D\uDCC5', pagos: '\uD83D\uDCB3', notificaciones: '\uD83D\uDD14' };

export default function StudentPortal() {
  const [view, setView] = useState('inicio');

  function navigate(viewId) {
    setView(viewId);
  }

  return (
    <>
      <style>{`
        .shell{width:100%;height:100vh;display:flex;flex-direction:column;background:#f4f7f9;font-family:'Segoe UI',Arial,sans-serif;font-size:14px;color:#222;}

        .topbar{
          display:flex;align-items:stretch;
          background:#fff;border-bottom:2px solid #e0e0e0;
          box-shadow:0 2px 8px rgba(0,0,0,.06);
          flex-shrink:0;z-index:10;
        }
        .logo-area{
          background:linear-gradient(160deg,#2ec6e0 0%,#1a9ab8 100%);
          width:190px;min-width:190px;
          display:flex;align-items:center;padding:10px 16px;gap:10px;
        }
        .logo-circle{
          width:52px;height:52px;border-radius:50%;
          background:rgba(255,255,255,.18);border:2.5px solid rgba(255,255,255,.7);
          display:flex;align-items:center;justify-content:center;flex-shrink:0;
          overflow:hidden;
        }
        .logo-text{color:#fff;font-size:24px;font-weight:800;letter-spacing:-.5px;text-shadow:0 1px 4px rgba(0,0,0,.15);}
        .tabs-area{display:flex;align-items:center;padding:0 20px;gap:2px;flex:1;}
        .tab{
          padding:12px 22px;font-size:13.5px;font-weight:500;cursor:pointer;
          border-radius:6px 6px 0 0;color:#555;
          border:1px solid transparent;border-bottom:none;background:transparent;
          white-space:nowrap;transition:background .18s,color .18s;
        }
        .tab:hover{background:#f0f4f6;color:#1a9ab8;}
        .tab.active{background:#e8f6fa;border-color:#c8e8f2;color:#1a9ab8;font-weight:700;}
        .tab-icon{padding:8px 16px;display:none;align-items:center;font-size:20px;color:#1a9ab8;}
        .tab-icon.visible{display:flex;}

        .body-area{display:flex;flex:1;overflow:hidden;height:0;}

        .sidebar{
          width:190px;min-width:190px;
          background:linear-gradient(180deg,#2ec6e0 0%,#1a9ab8 100%);
          padding:24px 0 16px;display:flex;flex-direction:column;
          box-shadow:2px 0 10px rgba(0,0,0,.08);
        }
        .sidebar-label{color:rgba(255,255,255,.6);font-size:10px;letter-spacing:.14em;text-transform:uppercase;padding:0 20px 10px;font-weight:700;}
        .sidebar a{
          display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;
          padding:12px 20px;font-size:14px;font-weight:500;cursor:pointer;
          border-left:3px solid transparent;transition:background .18s,border-color .18s;
        }
        .sidebar a:hover{background:rgba(255,255,255,.15);border-left-color:rgba(255,255,255,.7);}
        .sidebar a.active{background:rgba(255,255,255,.22);border-left-color:#fff;font-weight:700;}
        .sidebar-icon{font-size:16px;opacity:.85;}

        .content{flex:1;padding:28px 32px;background:#f4f7f9;overflow-y:auto;height:100%;}

        .view{display:none;}
        .view.active{display:block;}

        .section-title{
          font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#1a9ab8;margin-bottom:16px;padding-bottom:6px;border-bottom:2px solid #d4eef5;
        }

        .cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:24px;}
        .info-card{
          background:#fff;border:1px solid #e2edf2;border-radius:10px;overflow:hidden;
          box-shadow:0 2px 10px rgba(0,0,0,.05);transition:box-shadow .2s,transform .2s;
        }
        .info-card:hover{box-shadow:0 6px 20px rgba(26,154,184,.15);transform:translateY(-2px);}
        .info-card-header{
          background:linear-gradient(90deg,#2ec6e0,#1a9ab8);
          padding:10px 16px;font-size:12px;font-weight:700;color:#fff;
          letter-spacing:.05em;text-transform:uppercase;
        }
        .info-card-body{background:#f0fbfd;padding:16px;}
        .card-label{font-size:11px;color:#888;font-weight:600;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px;}
        .card-value{font-size:18px;font-weight:700;color:#1a9ab8;}
        .card-sub{font-size:12px;color:#666;margin-top:3px;}

        .ad-banner{
          width:100%;height:90px;
          background:linear-gradient(100deg,#0d0d0d 60%,#1a2a35 100%);
          border-radius:10px;overflow:hidden;display:flex;align-items:center;
          padding:0 24px;gap:16px;box-shadow:0 4px 16px rgba(0,0,0,.18);
        }
        .ad-text{color:#fff;font-size:15px;line-height:1.25;}
        .ad-text strong{font-size:18px;font-weight:800;}
        .ad-sub{color:#aaa;font-size:11px;margin-top:2px;}
        .ad-sub span{color:#2ec6e0;}
        .ad-player{
          margin-left:auto;width:60px;height:82px;
          background:url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lionel_Messi_in_2019.jpg/220px-Lionel_Messi_in_2019.jpg') center/cover no-repeat;
          border-radius:6px;opacity:.9;
        }
        .ad-btn{background:#2ec6e0;color:#fff;font-size:10px;font-weight:700;letter-spacing:.08em;padding:6px 12px;border-radius:5px;white-space:nowrap;cursor:pointer;text-transform:uppercase;}

        .sched-wrap{background:#fff;border-radius:10px;border:1px solid #e2edf2;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.05);margin-bottom:24px;}
        .sched-table{width:100%;border-collapse:collapse;}
        .sched-table thead tr{background:linear-gradient(90deg,#2ec6e0,#1a9ab8);}
        .sched-table th{color:#fff;font-weight:700;padding:12px 20px;text-align:left;font-size:12px;letter-spacing:.08em;text-transform:uppercase;}
        .sched-table td{padding:13px 20px;border-bottom:1px solid #eef4f7;font-size:14px;color:#333;}
        .sched-table tr:last-child td{border-bottom:none;}
        .sched-table tbody tr:hover td{background:#f0fbfd;}
        .sched-table tbody tr:nth-child(even) td{background:#f8fcfd;}
        .sched-table tbody tr:nth-child(even):hover td{background:#e8f6fa;}
        .entrenador-badge{display:inline-flex;align-items:center;gap:8px;}
        .entrenador-avatar{
          width:28px;height:28px;border-radius:50%;
          background:linear-gradient(135deg,#2ec6e0,#1a6a80);
          display:flex;align-items:center;justify-content:center;
          color:#fff;font-size:12px;font-weight:700;
        }

        .map-row{display:flex;gap:20px;align-items:stretch;}
        .map-col{flex-shrink:0;}
        .map-box{width:300px;border-radius:10px;overflow:hidden;border:1px solid #cdd;height:170px;}
        .map-placeholder{
          width:100%;height:100%;
          background:linear-gradient(135deg,#c8dae8,#9bbdd4);
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          color:#345;font-size:12px;gap:6px;
        }
        .map-link{display:inline-flex;align-items:center;gap:4px;color:#1a73e8;font-size:12px;margin-top:8px;text-decoration:none;}
        .map-link:hover{text-decoration:underline;}
        .sede-info{
          flex:1;background:#fff;border-radius:10px;border:1px solid #e2edf2;
          padding:20px 22px;box-shadow:0 2px 10px rgba(0,0,0,.05);
          display:flex;flex-direction:column;justify-content:space-between;
        }
        .sede-info h3{font-size:22px;font-weight:800;color:#1a9ab8;margin-bottom:4px;}
        .sede-link{color:#1a73e8;font-size:13px;cursor:pointer;text-decoration:underline;margin-bottom:14px;display:inline-block;}
        .sede-divider{border:none;border-top:1px solid #e2edf2;margin:10px 0;}
        .sede-meta{font-size:13px;color:#555;margin-bottom:6px;}
        .sede-meta strong{color:#222;}
        .btn-route{
          display:inline-flex;align-items:center;gap:8px;
          background:linear-gradient(90deg,#2ec6e0,#1a9ab8);
          color:#fff;border:none;padding:11px 22px;border-radius:8px;
          font-size:13px;font-weight:700;cursor:pointer;letter-spacing:.03em;
          box-shadow:0 3px 12px rgba(26,154,184,.35);
          transition:box-shadow .2s,transform .15s;text-decoration:none;
          margin-top:8px;align-self:flex-start;
        }
        .btn-route:hover{box-shadow:0 6px 20px rgba(26,154,184,.45);transform:translateY(-1px);}

        .pagos-row{display:flex;gap:28px;align-items:flex-start;}
        .pagos-left{flex:1;}
        .pagos-left h2{font-size:30px;font-weight:800;color:#222;margin-bottom:4px;display:flex;align-items:center;gap:10px;}
        .checkmark{color:#fff;background:#2ec6e0;width:36px;height:36px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
        .pagos-divider{border:none;border-top:2px solid #e0e0e0;margin:14px 0;}
        .pagos-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}
        .pagos-info-item{background:#fff;border-radius:8px;border:1px solid #e2edf2;padding:12px 16px;box-shadow:0 1px 6px rgba(0,0,0,.04);}
        .pi-label{font-size:10px;font-weight:700;color:#888;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px;}
        .pi-value{font-size:16px;font-weight:700;color:#222;}
        .pi-value.green{color:#2e7d32;}
        .otros-title{font-size:11px;font-weight:700;color:#888;letter-spacing:.12em;text-transform:uppercase;margin-bottom:12px;}
        .payment-logos{display:flex;flex-direction:column;gap:10px;}
        .payment-logo{
          display:flex;align-items:center;gap:12px;font-size:15px;font-weight:700;
          padding:10px 16px;border-radius:8px;background:#fff;border:1px solid #e2edf2;
          box-shadow:0 1px 4px rgba(0,0,0,.04);cursor:pointer;transition:box-shadow .18s,transform .15s;
        }
        .payment-logo:hover{box-shadow:0 4px 14px rgba(0,0,0,.1);transform:translateY(-1px);}

        .pagofacil{
          width:260px;min-width:260px;border:1px solid #dde8ec;border-radius:12px;
          overflow:hidden;background:#fff;box-shadow:0 4px 20px rgba(0,0,0,.1);flex-shrink:0;
        }
        .pagofacil-top{
          background:linear-gradient(90deg,#2ec6e0,#1a9ab8);
          padding:14px 18px;display:flex;align-items:center;gap:8px;
        }
        .pagofacil-top span{color:#fff;font-size:15px;font-weight:800;}
        .pagofacil-body{padding:16px 18px;}
        .pago-recibido{display:flex;align-items:center;gap:6px;font-size:12px;color:#2e7d32;font-weight:600;margin-bottom:8px;}
        .pago-monto{font-size:26px;font-weight:800;color:#222;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #eee;}
        .pago-detalles{font-size:10px;color:#999;margin-bottom:8px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;}
        .pago-row{display:flex;gap:8px;font-size:12px;color:#444;margin-bottom:7px;align-items:flex-start;}
        .pago-row strong{color:#222;}
        .pago-total-row{display:flex;justify-content:space-between;font-size:12px;margin-top:10px;border-top:1px solid #eee;padding-top:8px;color:#555;}
        .pago-gracias{text-align:center;font-size:11px;color:#888;margin-top:10px;font-style:italic;}
        .badge-ok{display:inline-flex;align-items:center;gap:3px;background:#e8f5e9;color:#2e7d32;font-size:10px;border-radius:999px;padding:2px 8px;font-weight:700;}

        .notif-list{display:flex;flex-direction:column;gap:14px;}
        .notif-card{background:#fff;border:1px solid #e2edf2;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.05);transition:box-shadow .2s,transform .2s;}
        .notif-card:hover{box-shadow:0 6px 18px rgba(26,154,184,.14);transform:translateY(-2px);}
        .notif-header{background:linear-gradient(90deg,#2ec6e0,#1a9ab8);padding:9px 16px;font-size:12px;font-weight:700;color:#fff;letter-spacing:.06em;text-transform:uppercase;display:flex;align-items:center;gap:7px;}
        .notif-body{background:#f0fbfd;padding:13px 16px 8px;}
        .notif-body p{font-size:13.5px;color:#333;line-height:1.5;}
        .notif-footer{display:flex;justify-content:flex-end;padding:6px 16px 10px;background:#f0fbfd;}
        .btn-more{font-size:12px;color:#1a9ab8;font-weight:600;cursor:pointer;background:none;border:none;padding:4px 0;letter-spacing:.02em;}
        .btn-more:hover{text-decoration:underline;}

        @media(max-width:900px){
          .cards-grid{grid-template-columns:1fr 1fr;}
          .pagos-row{flex-direction:column;}
          .pagofacil{width:100%;}
          .map-row{flex-direction:column;}
          .map-box{width:100%;}
          .pagos-info-grid{grid-template-columns:1fr;}
        }
      `}</style>

      <div className="shell">
        {/* TOP BAR */}
        <div className="topbar">
          <div className="logo-area">
            <div className="logo-circle">
              <img src="/src/assets/logo-rodar.png" alt="Logo Rodar" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <span className="logo-text">Alumno</span>
          </div>
          <div className="tabs-area">
            <div className={`tab${view === 'inicio' ? ' active' : ''}`} onClick={() => navigate('inicio')}>Inicio</div>
            <div className={`tab${view === 'horarios' ? ' active' : ''}`} onClick={() => navigate('horarios')}>Mis horarios</div>
            <div className={`tab${view === 'pagos' ? ' active' : ''}`} onClick={() => navigate('pagos')}>Pagos</div>
            <div className={`tab${view === 'notificaciones' ? ' active' : ''}`} onClick={() => navigate('notificaciones')}>Notificaciones</div>
            <div className={`tab-icon${ICONS[view] ? ' visible' : ''}`}>{ICONS[view]}</div>
          </div>
        </div>

        {/* BODY */}
        <div className="body-area">
          {/* SIDEBAR */}
          <div className="sidebar">
            <div className="sidebar-label">Menú</div>
            <a className={view === 'perfil' ? 'active' : ''} onClick={() => navigate('perfil')}>
              <span className="sidebar-icon">{'\uD83D\uDC64'}</span><span>Mi Perfil</span>
            </a>
            <a className={view === 'horarios' ? 'active' : ''} onClick={() => navigate('horarios')}>
              <span className="sidebar-icon">{'\uD83D\uDCC5'}</span><span>Mis Horarios</span>
            </a>
            <a className={view === 'pagos' ? 'active' : ''} onClick={() => navigate('pagos')}>
              <span className="sidebar-icon">{'\uD83D\uDCB3'}</span><span>Pagos</span>
            </a>
            <a className={view === 'notificaciones' ? 'active' : ''} onClick={() => navigate('notificaciones')}>
              <span className="sidebar-icon">{'\uD83D\uDD14'}</span><span>Notificaciones</span>
            </a>
          </div>

          {/* CONTENT */}
          <div className="content">
            {/* INICIO */}
            <div className={`view${view === 'inicio' ? ' active' : ''}`}>
              <div className="section-title">Resumen</div>
              <div className="cards-grid">
                <div className="info-card">
                  <div className="info-card-header">{'\uD83D\uDCC6'}&nbsp; Próximo Entrenamiento</div>
                  <div className="info-card-body">
                    <div className="card-label">Día y hora</div>
                    <div className="card-value">Martes</div>
                    <div className="card-sub">5:00 pm · Sede Santa Mónica</div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-header">{'\uD83D\uDCB0'}&nbsp; Estado de Pago</div>
                  <div className="info-card-body">
                    <div className="card-label">Estado actual</div>
                    <div className="card-value">Al día ✔</div>
                    <div className="card-sub">Próximo pago: 17/04/2026</div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-header">{'\uD83D\uDD14'}&nbsp; Notificaciones</div>
                  <div className="info-card-body">
                    <div className="card-label">Sin leer</div>
                    <div className="card-value">2 nuevas</div>
                    <div className="card-sub">Toca para ver detalles</div>
                  </div>
                </div>
              </div>
              <div className="ad-banner">
                <div style={{ fontSize: '13px', color: '#aaa', fontStyle: 'italic', fontWeight: 900, opacity: 0.7, flexShrink: 0 }}>adidas</div>
                <div className="ad-text">
                  <strong>every legend has a beginning...</strong>
                  <div className="ad-sub">messi miro<span>ar10</span></div>
                </div>
                <div className="ad-player" />
                <div className="ad-btn">Shop now ›</div>
              </div>
            </div>

            {/* HORARIOS */}
            <div className={`view${view === 'horarios' ? ' active' : ''}`}>
              <div className="section-title">Mi Horario Semanal</div>
              <div className="sched-wrap">
                <table className="sched-table">
                  <thead>
                    <tr><th>Día</th><th>Hora</th><th>Entrenador</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Lunes</strong></td><td>7:00 am</td><td><span className="entrenador-badge"><span className="entrenador-avatar">C</span>Carlos</span></td></tr>
                    <tr><td><strong>Miércoles</strong></td><td>3:00 pm</td><td><span className="entrenador-badge"><span className="entrenador-avatar">A</span>Andrea</span></td></tr>
                    <tr><td><strong>Jueves</strong></td><td>4:00 pm</td><td><span className="entrenador-badge"><span className="entrenador-avatar">M</span>María</span></td></tr>
                    <tr><td><strong>Sábado</strong></td><td>5:00 pm</td><td><span className="entrenador-badge"><span className="entrenador-avatar">J</span>Juan</span></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="section-title">Ubicación de la Sede</div>
              <div className="map-row">
                <div className="map-col">
                  <div className="map-box">
                    <div className="map-placeholder">
                      <svg width="38" height="38" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#345" /></svg>
                      <span style={{ fontWeight: 600 }}>Sede Santa Mónica</span>
                      <span style={{ fontSize: '11px', color: '#678' }}>Los Ángeles, CA</span>
                    </div>
                  </div>
                  <a className="map-link" href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#1a73e8"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z" /><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
                    https://www.google.com/maps
                  </a>
                </div>
                <div className="sede-info">
                  <div>
                    <h3>Sede Santa Monica</h3>
                    <a className="sede-link">Cambiar de sede</a>
                    <hr className="sede-divider" />
                    <p className="sede-meta">Mejor tiempo: <strong>35:34 minutos</strong></p>
                    <p className="sede-meta">Distancia estimada: <strong>28.4 km</strong></p>
                  </div>
                  <a className="btn-route" href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff"><path d="M21.71 11.29l-9-9a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42l9 9a1 1 0 001.42 0l9-9a1 1 0 000-1.42zM14 14.5V12h-4v3H8v-4a1 1 0 011-1h5V7.5l3.5 3.5-3.5 3.5z" /></svg>
                    Inicio del recorrido
                  </a>
                </div>
              </div>
            </div>

            {/* PAGOS */}
            <div className={`view${view === 'pagos' ? ' active' : ''}`}>
              <div className="section-title">Estado de Pagos</div>
              <div className="pagos-row">
                <div className="pagos-left">
                  <h2>Pago exitoso <span className="checkmark">✔</span></h2>
                  <hr className="pagos-divider" />
                  <div className="pagos-info-grid">
                    <div className="pagos-info-item">
                      <div className="pi-label">Monto a pagar</div>
                      <div className="pi-value green">$0</div>
                    </div>
                    <div className="pagos-info-item">
                      <div className="pi-label">Próximo pago</div>
                      <div className="pi-value">17/04/2026</div>
                    </div>
                    <div className="pagos-info-item">
                      <div className="pi-label">Pagos atrasados</div>
                      <div className="pi-value green">0</div>
                    </div>
                    <div className="pagos-info-item">
                      <div className="pi-label">Descuento aplicable</div>
                      <div className="pi-value">20% <span style={{ fontSize: '12px', color: '#888', fontWeight: 400 }}>(6 meses)</span></div>
                    </div>
                  </div>
                  <div className="otros-title">Otros medios de pago</div>
                  <div className="payment-logos">
                    <div className="payment-logo" style={{ color: '#6a1b9a' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#6a1b9a"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700" fontFamily="Arial">N</text></svg>
                      NEQUI
                    </div>
                    <div className="payment-logo">
                      <svg width="24" height="16" viewBox="0 0 40 18" fill="none"><rect width="40" height="18" rx="3" fill="#f5a623" /><text x="20" y="13" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Arial">BC</text></svg>
                      <span style={{ color: '#333' }}>Bancolombia</span>
                    </div>
                    <div className="payment-logo" style={{ color: '#c62828' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#c62828"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700" fontFamily="Arial">D</text></svg>
                      DaviPlata
                    </div>
                  </div>
                </div>

                <div className="pagofacil">
                  <div className="pagofacil-top">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,.9)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    <span>PagoFácil</span>
                  </div>
                  <div className="pagofacil-body">
                    <div className="pago-recibido">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#2e7d32"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                      ¡Pago recibido!
                    </div>
                    <div className="pago-monto">COP $120.000</div>
                    <div className="pago-detalles">Detalles del Pago</div>
                    <div className="pago-row">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#888"><path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4z" /></svg>
                      <span>Remitente &nbsp;<strong>Rodar Academia</strong></span>
                    </div>
                    <div className="pago-row">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#888"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" /></svg>
                      <span>Facturación &nbsp;<strong>23 Mar 2024</strong></span>
                    </div>
                    <div className="pago-row">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#888"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z" /></svg>
                      <span>Referencia &nbsp;<strong>#987654321</strong></span>
                    </div>
                    <div className="pago-row">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#2e7d32"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                      <span>Estado &nbsp;<span className="badge-ok">✓ Pago Exitoso</span></span>
                    </div>
                    <div className="pago-total-row">
                      <div>
                        <div>Descripción</div>
                        <div style={{ marginTop: '3px', fontWeight: 700, color: '#222' }}>Total Pagado</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div>Pago por servicios</div>
                        <div style={{ marginTop: '3px', fontWeight: 700, color: '#222' }}>COP $120.000</div>
                      </div>
                    </div>
                    <p className="pago-gracias">¡Gracias por tu pago!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* NOTIFICACIONES */}
            <div className={`view${view === 'notificaciones' ? ' active' : ''}`}>
              <div className="section-title">Centro de Notificaciones</div>
              <div className="notif-list">
                <div className="notif-card">
                  <div className="notif-header"><span>{'\uD83D\uDCB3'}</span> Pagos</div>
                  <div className="notif-body"><p>El último pago ha sido completado exitosamente.</p></div>
                  <div className="notif-footer"><button className="btn-more">Más información →</button></div>
                </div>
                <div className="notif-card">
                  <div className="notif-header"><span>{'\uD83D\uDEE1\uFE0F'}</span> Admin</div>
                  <div className="notif-body"><p>Docente Luis Hernández López: La clase del miércoles a las 4:00 pm ha sido cancelada.</p></div>
                  <div className="notif-footer"><button className="btn-more">Más información →</button></div>
                </div>
                <div className="notif-card">
                  <div className="notif-header"><span>{'\uD83D\uDEE1\uFE0F'}</span> Admin</div>
                  <div className="notif-body"><p>Solicitud de cambio de sede ha sido aceptada.</p></div>
                  <div className="notif-footer"><button className="btn-more">Más información →</button></div>
                </div>
                <div className="notif-card">
                  <div className="notif-header"><span>{'\u26A0\uFE0F'}</span> Admin</div>
                  <div className="notif-body"><p>Recordatorio de aviso de faltas injustificadas.</p></div>
                  <div className="notif-footer"><button className="btn-more">Más información →</button></div>
                </div>
              </div>
            </div>

            {/* PERFIL */}
            <div className={`view${view === 'perfil' ? ' active' : ''}`}>
              <div className="section-title">Mi Perfil</div>
              <div className="info-card" style={{ maxWidth: '400px' }}>
                <div className="info-card-header">{'\uD83D\uDC64'}&nbsp;Datos del Alumno</div>
                <div className="info-card-body">
                  <div className="card-label">Estado</div>
                  <div className="card-value" style={{ fontSize: '14px', color: '#555' }}>Información próximamente.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

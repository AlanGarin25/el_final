function ReportsSection() {
  try {
    const reports = [
      {
        title: 'Reporte de Usuarios',
        description: 'Análisis detallado de usuarios registrados y actividad',
        icon: 'users',
        color: 'bg-blue-500',
        date: '2025-11-28',
        status: 'Completado'
      },
      {
        title: 'Reporte de Sesiones',
        description: 'Estadísticas de sesiones y tiempo de uso',
        icon: 'activity',
        color: 'bg-green-500',
        date: '2025-11-27',
        status: 'Completado'
      },
      {
        title: 'Reporte Financiero',
        description: 'Resumen de transacciones y balance mensual',
        icon: 'dollar-sign',
        color: 'bg-purple-500',
        date: '2025-11-26',
        status: 'Completado'
      },
      {
        title: 'Reporte de Seguridad',
        description: 'Auditoría de accesos y eventos de seguridad',
        icon: 'shield',
        color: 'bg-red-500',
        date: '2025-11-25',
        status: 'Completado'
      },
      {
        title: 'Reporte de Rendimiento',
        description: 'Métricas de rendimiento del sistema',
        icon: 'zap',
        color: 'bg-yellow-500',
        date: '2025-11-24',
        status: 'Completado'
      },
      {
        title: 'Reporte de Errores',
        description: 'Log de errores y problemas detectados',
        icon: 'alert-circle',
        color: 'bg-orange-500',
        date: '2025-11-23',
        status: 'En proceso'
      }
    ];

    return (
      <div className="space-y-6" data-name="reports-section" data-file="components/ReportsSection.js">
        <div className="flex justify-between items-center">
          <p className="text-[var(--text-secondary)]">Genera y descarga reportes del sistema</p>
          <button className="btn-primary flex items-center gap-2">
            <div className="icon-plus text-lg"></div>
            Generar Reporte
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report, index) => (
            <div key={index} className="card hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${report.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <div className={`icon-${report.icon} text-xl text-white`}></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{report.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{report.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[var(--text-secondary)]">
                    <div className="icon-calendar inline text-sm mr-1"></div>
                    {report.date}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    report.status === 'Completado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <button className="flex items-center gap-2 text-sm text-[var(--primary-color)] hover:text-[var(--accent-color)] font-medium">
                  <div className="icon-download text-lg"></div>
                  Descargar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ReportsSection component error:', error);
    return null;
  }
}
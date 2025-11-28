function ConfigSection() {
  try {
    const configSections = [
      {
        title: 'Configuración General',
        icon: 'settings',
        description: 'Ajustes básicos del sistema',
        items: ['Nombre de la empresa', 'Zona horaria', 'Idioma', 'Formato de fecha']
      },
      {
        title: 'Seguridad',
        icon: 'shield',
        description: 'Configuración de seguridad y accesos',
        items: ['Políticas de contraseña', 'Autenticación 2FA', 'Sesiones activas', 'Registro de actividad']
      },
      {
        title: 'Notificaciones',
        icon: 'bell',
        description: 'Gestión de notificaciones del sistema',
        items: ['Email notifications', 'Notificaciones push', 'Alertas del sistema', 'Resumen diario']
      },
      {
        title: 'Integración',
        icon: 'link',
        description: 'Integraciones con servicios externos',
        items: ['API Keys', 'Webhooks', 'Conexiones externas', 'Sincronización']
      },
      {
        title: 'Respaldo y Recuperación',
        icon: 'database',
        description: 'Gestión de copias de seguridad',
        items: ['Respaldos automáticos', 'Restauración', 'Exportar datos', 'Historial de respaldos']
      }
    ];

    return (
      <div className="space-y-6" data-name="config-section" data-file="components/ConfigSection.js">
        {configSections.map((section, index) => (
          <div key={index} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                <div className={`icon-${section.icon} text-xl text-[var(--primary-color)]`}></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{section.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{section.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="icon-check text-green-600"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn-primary">
                Configurar
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('ConfigSection component error:', error);
    return null;
  }
}
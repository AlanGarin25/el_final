function DashboardStats() {
  try {
    const stats = [
      { label: 'Total Usuarios', value: '1,234', icon: 'users', color: 'bg-blue-500', change: '+12%' },
      { label: 'Sesiones Activas', value: '456', icon: 'activity', color: 'bg-green-500', change: '+8%' },
      { label: 'Reportes Generados', value: '89', icon: 'file-text', color: 'bg-purple-500', change: '+23%' },
      { label: 'Tareas Completadas', value: '342', icon: 'check-circle', color: 'bg-orange-500', change: '+15%' }
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-name="dashboard-stats" data-file="components/DashboardStats.js">
        {stats.map((stat, index) => (
          <div key={index} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <div className={`icon-${stat.icon} text-xl text-white`}></div>
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-1">{stat.value}</h3>
            <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('DashboardStats component error:', error);
    return null;
  }
}
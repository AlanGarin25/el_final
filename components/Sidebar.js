function Sidebar({ currentView, setCurrentView }) {
  try {
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { id: 'usuarios', label: 'Usuarios', icon: 'users' },
      { id: 'configuracion', label: 'Configuración', icon: 'settings' },
      { id: 'reportes', label: 'Reportes', icon: 'file-text' }
    ];

    return (
      <div className="w-64 bg-white border-r border-[var(--border-color)] flex flex-col" data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-6 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
              <div className="icon-shield text-xl text-[var(--primary-color)]"></div>
            </div>
            <div>
              <h2 className="font-bold text-lg text-[var(--text-primary)]">AdminSys</h2>
              <p className="text-xs text-[var(--text-secondary)]">v2.1.0</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === item.id
                      ? 'bg-[var(--secondary-color)] text-[var(--primary-color)]'
                      : 'text-[var(--text-secondary)] hover:bg-gray-50'
                  }`}
                >
                  <div className={`icon-${item.icon} text-xl`}></div>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-[var(--border-color)]">
          <p className="text-xs text-[var(--text-secondary)] text-center">
            © 2025 AdminSys
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}
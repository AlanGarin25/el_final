function Topbar({ user }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [showUserMenu, setShowUserMenu] = React.useState(false);

    return (
      <div className="h-16 bg-white border-b border-[var(--border-color)] flex items-center justify-end px-8 gap-4" data-name="topbar" data-file="components/Topbar.js">
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors relative"
          >
            <div className="icon-bell text-xl text-[var(--text-secondary)]"></div>
            <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--danger-color)] rounded-full"></span>
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border border-[var(--border-color)] p-4 z-50">
              <h3 className="font-semibold text-[var(--text-primary)] mb-3">Notificaciones</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-[var(--text-primary)] font-medium">Nueva actualización disponible</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Hace 2 horas</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-[var(--text-primary)] font-medium">Usuario nuevo registrado</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Hace 5 horas</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-9 h-9 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">{user.name.charAt(0)}</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-[var(--text-primary)]">{user.name}</p>
              <p className="text-xs text-[var(--text-secondary)] capitalize">{user.role}</p>
            </div>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 top-14 w-48 bg-white rounded-lg shadow-lg border border-[var(--border-color)] py-2 z-50">
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors">
                Perfil
              </button>
              <button
                onClick={logout}
                className="w-full px-4 py-2 text-left text-sm text-[var(--danger-color)] hover:bg-red-50 transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}
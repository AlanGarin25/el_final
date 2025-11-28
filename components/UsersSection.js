function UsersSection() {
  try {
    const [users] = React.useState([
      { id: 1, name: 'Carlos Rodríguez', email: 'carlos@empresa.com', role: 'Superusuario', status: 'Activo', lastLogin: '2025-11-27' },
      { id: 2, name: 'María González', email: 'maria@empresa.com', role: 'Superusuario', status: 'Activo', lastLogin: '2025-11-26' },
      { id: 3, name: 'Juan Pérez', email: 'juan@empresa.com', role: 'Administrador', status: 'Activo', lastLogin: '2025-11-28' },
      { id: 4, name: 'Ana Martínez', email: 'ana@empresa.com', role: 'Administrador', status: 'Activo', lastLogin: '2025-11-27' },
      { id: 5, name: 'Luis Torres', email: 'luis@empresa.com', role: 'Usuario', status: 'Activo', lastLogin: '2025-11-28' },
      { id: 6, name: 'Sofia Ramírez', email: 'sofia@empresa.com', role: 'Usuario', status: 'Inactivo', lastLogin: '2025-11-20' },
      { id: 7, name: 'Pedro Sánchez', email: 'pedro@empresa.com', role: 'Usuario', status: 'Activo', lastLogin: '2025-11-27' }
    ]);

    const getRoleColor = (role) => {
      if (role === 'Superusuario') return 'bg-purple-100 text-purple-700';
      if (role === 'Administrador') return 'bg-blue-100 text-blue-700';
      return 'bg-gray-100 text-gray-700';
    };

    return (
      <div className="card" data-name="users-section" data-file="components/UsersSection.js">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Lista de Usuarios</h2>
          <button className="btn-primary flex items-center gap-2">
            <div className="icon-user-plus text-lg"></div>
            Nuevo Usuario
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--text-secondary)]">Nombre</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--text-secondary)]">Email</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--text-secondary)]">Rol</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--text-secondary)]">Estado</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--text-secondary)]">Último Acceso</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--text-secondary)]">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b border-[var(--border-color)] hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{user.name.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-[var(--text-primary)]">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[var(--text-secondary)]">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[var(--text-secondary)]">{user.lastLogin}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <div className="icon-edit text-lg text-[var(--primary-color)]"></div>
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <div className="icon-trash-2 text-lg text-[var(--danger-color)]"></div>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UsersSection component error:', error);
    return null;
  }
}
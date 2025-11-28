function LoginForm() {
  try {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setError('');
      setLoading(true);

      setTimeout(() => {
        const user = authenticateUser(username, password);
        if (user) {
          window.location.href = 'dashboard.html';
        } else {
          setError('Usuario o contraseña incorrectos');
          setLoading(false);
        }
      }, 500);
    };

    return (
      <div className="w-full max-w-md" data-name="login-form" data-file="components/LoginForm.js">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[var(--secondary-color)] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <div className="icon-lock text-3xl text-[var(--primary-color)]"></div>
          </div>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Bienvenido</h2>
          <p className="text-[var(--text-secondary)]">Ingresa tus credenciales para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-[var(--text-secondary)] font-medium mb-2">Usuarios de prueba:</p>
          <p className="text-xs text-[var(--text-secondary)]">superadmin1/super123 • admin1/admin123 • user1/user123</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}
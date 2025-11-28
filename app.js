class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2" data-name="app" data-file="app.js">
        <div className="hidden lg:flex gradient-bg items-center justify-center p-12">
          <div className="text-white max-w-md">
            <h1 className="text-5xl font-bold mb-6">Sistema Administrativo</h1>
            <p className="text-xl mb-8 text-white/90">
              Gestión inteligente con control de roles y versiones
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="icon-shield-check text-2xl text-white"></div>
                </div>
                <span className="text-lg">Seguridad avanzada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="icon-users text-2xl text-white"></div>
                </div>
                <span className="text-lg">Control de roles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="icon-git-branch text-2xl text-white"></div>
                </div>
                <span className="text-lg">Control de versiones</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-8 bg-white">
          <LoginForm />
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
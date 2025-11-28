const ChartJS = window.Chart;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-8 text-center">Error al cargar la aplicación</div>;
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [currentView, setCurrentView] = React.useState('dashboard');
    const user = getCurrentUser();

    React.useEffect(() => {
      if (!user) {
        window.location.href = 'index.html';
      }
    }, []);

    if (!user) return null;

    return (
      <div className="flex min-h-screen" data-name="dashboard-app" data-file="dashboard-app.js">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        <div className="flex-1 flex flex-col">
          <Topbar user={user} />
          <main className="flex-1 p-8 overflow-auto">
            {currentView === 'dashboard' && (
              <div>
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Dashboard</h1>
                <DashboardStats />
                <DashboardCharts />
              </div>
            )}
            {currentView === 'usuarios' && (
              <div>
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Usuarios</h1>
                <UsersSection />
              </div>
            )}
            {currentView === 'configuracion' && (
              <div>
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Configuración</h1>
                <ConfigSection />
              </div>
            )}
            {currentView === 'reportes' && (
              <div>
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Reportes</h1>
                <ReportsSection />
              </div>
            )}
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);
function DashboardCharts() {
  try {
    const lineChartRef = React.useRef(null);
    const barChartRef = React.useRef(null);
    const doughnutChartRef = React.useRef(null);
    const areaChartRef = React.useRef(null);

    React.useEffect(() => {
      if (lineChartRef.current) {
        const ctx = lineChartRef.current.getContext('2d');
        new ChartJS(ctx, {
          type: 'line',
          data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
              label: 'Usuarios Activos',
              data: [65, 78, 90, 81, 96, 105],
              borderColor: '#6366f1',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              tension: 0.4,
              fill: true
            }]
          },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
      }

      if (barChartRef.current) {
        const ctx = barChartRef.current.getContext('2d');
        new ChartJS(ctx, {
          type: 'bar',
          data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
              label: 'Sesiones',
              data: [45, 52, 38, 65, 73, 48, 34],
              backgroundColor: '#10b981'
            }]
          },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
      }

      if (doughnutChartRef.current) {
        const ctx = doughnutChartRef.current.getContext('2d');
        new ChartJS(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Superusuario', 'Administrador', 'Usuario'],
            datasets: [{
              data: [15, 35, 50],
              backgroundColor: ['#6366f1', '#f59e0b', '#10b981']
            }]
          },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }

      if (areaChartRef.current) {
        const ctx = areaChartRef.current.getContext('2d');
        new ChartJS(ctx, {
          type: 'line',
          data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
            datasets: [{
              label: 'Reportes',
              data: [20, 35, 28, 42],
              borderColor: '#f59e0b',
              backgroundColor: 'rgba(245, 158, 11, 0.2)',
              fill: true
            }]
          },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
      }
    }, []);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-name="dashboard-charts" data-file="components/DashboardCharts.js">
        <div className="card">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Crecimiento de Usuarios</h3>
          <div style={{ height: '250px' }}>
            <canvas ref={lineChartRef}></canvas>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Sesiones por Día</h3>
          <div style={{ height: '250px' }}>
            <canvas ref={barChartRef}></canvas>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Distribución de Roles</h3>
          <div style={{ height: '250px' }}>
            <canvas ref={doughnutChartRef}></canvas>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Reportes Mensuales</h3>
          <div style={{ height: '250px' }}>
            <canvas ref={areaChartRef}></canvas>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardCharts component error:', error);
    return null;
  }
}

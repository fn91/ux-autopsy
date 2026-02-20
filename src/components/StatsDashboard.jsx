// src/components/StatsDashboard.jsx

function StatsDashboard({ total, average, top }) {
  return (
    <div className="stats-dashboard">
      <div className="stat-card">
        <span>Total Webs</span>
        <strong>{total}</strong>
      </div>
      <div className="stat-card">
        <span>Promedio UX</span>
        <strong>{average}%</strong>
      </div>
      <div className="stat-card">
        <span>Webs Excelentes</span>
        <strong>{top}</strong>
      </div>
    </div>
  );
}

export default StatsDashboard;
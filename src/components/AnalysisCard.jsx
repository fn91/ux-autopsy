
import ProgressBar from './ProgressBar';
function AnalysisCard({ site, onDelete }) {
  
  // 1. Lógica para el color dinámico (Cerebro del componente)
  const getScoreColor = (score) => {
    if (score >= 80) return "#2ecc71"; // Verde
    if (score < 50) return "#e74c3c";  // Rojo
    return "#f39c12";                  // Naranja
  };

  const statusColor = getScoreColor(site.uxScore);

  return (
    <div className="card" style={{ position: 'relative' }}>
      
      {/* 2. Botón de borrar con la función que viene del padre */}
      <button 
        className="delete-btn" 
        onClick={() => onDelete(site.id)}
        title="Eliminar análisis"
      >
        ×
      </button>

      <h2>{site.siteName}</h2>
      
      {/* 3. Estilo dinámico aplicado al score */}
      <p style={{ color: statusColor, fontWeight: 'bold', marginBottom: '4px' }}>
       Puntuación: {site.uxScore}/100
      </p>

      <ProgressBar score={site.uxScore} color={statusColor} />  

      {/* 4. Renderizado condicional del favorito */}
      {site.isFavorite && <span className="fav-tag">⭐ Favorito</span>}
      
    </div>
  );
}

export default AnalysisCard;
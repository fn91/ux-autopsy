
function ProgressBar({ score, color }) {
  // Limitamos el score entre 0 y 100 por seguridad (Defensive Programming)
  const validScore = Math.min(Math.max(score, 0), 100);

  const containerStyle = {
    height: '8px',
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    marginTop: '10px',
    overflow: 'hidden' // Para que la barra interna no se salga de las esquinas
  };

  const fillerStyle = {
    height: '100%',
    width: `${validScore}%`, // Aquí ocurre la magia
    backgroundColor: color,
    transition: 'width 0.5s ease-in-out', // Animación suave
    borderRadius: 'inherit'
  };

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}></div>
    </div>
  );
}

export default ProgressBar;
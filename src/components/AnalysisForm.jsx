import { useState } from 'react';

function AnalysisForm({ onAddAnalysis }) {
  // 1. Definimos los estados para cada campo del formulario
  const [name, setName] = useState("");
  const [score, setScore] = useState(50);
  const [isFav, setIsFav] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica: no permitir nombres vacíos
    if (name.trim() === "") return;

    // 2. Creamos el objeto con los datos capturados
    const newSite = {
      id: Date.now(),
      siteName: name,
      uxScore: Number(score), // Convertimos el string del input a número
      isFavorite: isFav
    };

    // 3. Enviamos el objeto al padre (App.jsx)
    onAddAnalysis(newSite);

    // 4. Limpiamos el formulario para la siguiente entrada
    setName("");
    setScore(50);
    setIsFav(false);
  };

  return (
    <form onSubmit={handleSubmit} className="analysis-form">
      {/* Input de Nombre */}
      <input 
        type="text" 
        placeholder="Nombre de la web..." 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Input de Puntuación */}
      <div className="input-group">
        <label>UX Score:</label>
        <input 
          type="number" 
          min="0" 
          max="100"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </div>

      {/* Checkbox de Favorito */}
      <label className="checkbox-label">
        <input 
          type="checkbox" 
          checked={isFav} 
          onChange={(e) => setIsFav(e.target.checked)} 
        />
        ¿Es favorito?
      </label>

      <button type="submit">Añadir Análisis</button>
    </form>
  );
}

export default AnalysisForm;
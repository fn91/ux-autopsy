// src/App.jsx
import { useState,useEffect } from 'react';
import { analysesData } from './data/analises';
import './App.css';
import AnalysisCard from './components/AnalysisCard';
import AnalysisForm from './components/AnalysisForm';
import StatsDashboard from './components/StatsDashboard';

function App() {
  // 1. Aquí declaras el estado y su función "set"
 const [list, setList] = useState(() => {
  const saved = localStorage.getItem('ux-autopsy-data');
  return saved ? JSON.parse(saved) : analysesData; 
});
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  useEffect(() => {
  // Cada vez que 'list' cambie, guardamos la lista en el "disco duro" del navegador
  localStorage.setItem('ux-autopsy-data', JSON.stringify(list));
}, [list]); //


  // 2. Aquí creas la función que usa ese "set"
  const addAnalysis = (newAnalysis) => {
    setList([...list, newAnalysis]); // Actualizamos la lista
  };
 
 

const deleteAnalysis = (idAEliminar) => {
  // Filtramos: "Mantén todos los sitios cuyo ID sea DIFERENTE al que recibo"
  const nuevaLista = list.filter(site => site.id !== idAEliminar);
  setList(nuevaLista);
};

 const filteredData = onlyFavorites 
  ? list.filter(item => item.isFavorite) // ✅ USAMOS 'list', que contiene los nuevos datos.
  : list;

    const totalAnalyses = list.length;
    const averageScore = totalAnalyses > 0 
  ? (list.reduce((acc, curr) => acc + curr.uxScore, 0) / totalAnalyses).toFixed(1)
  : 0;
  const topSites=list.filter(site => site.uxScore >= 80).length;
  return (
    
    <div className="dashboard-container">
      <h1>UX Autopsy Dashboard</h1>
    <StatsDashboard
      total={totalAnalyses} 
      average={averageScore} 
      top={topSites} 
    />

      {/* 3. Pasas la función al formulario */}
      <AnalysisForm onAddAnalysis={addAnalysis} />

      <button onClick={() => setOnlyFavorites(!onlyFavorites)}>
        {onlyFavorites ? "Mostrar todos" : "Ver solo favoritos"}
      </button>

      <div className="cards-grid">
  {/* Si la lista tiene elementos, los mostramos */}
  {filteredData.length > 0 ? (
    filteredData.map((item) => (
      <AnalysisCard 
        key={item.id} 
        site={item} 
        onDelete={deleteAnalysis} 
      />
    ))
  ) : (
    /* Si está vacía, mostramos un mensaje profesional */
    <div className="empty-state">
      <p>🕵️‍♂️ No se encontraron análisis.</p>
      <span>Prueba a añadir uno nuevo o cambiar el filtro.</span>
    </div>
  )}
</div>
    </div>
  );
}


export default App;
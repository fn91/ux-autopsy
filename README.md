# 🔍 UX Autopsy – Analizador de experiencias web


[🚀 Ver Demo en Vivo]([https://vercel.com/claudios-projects-f9f35c91/ux-autopsy/HPaZLHBFwh2d6Ge6df1DMgJdXDos)


**UX Autopsy** es una herramienta profesional para documentar y analizar la experiencia de usuario de sitios web. Permite evaluar interfaces mediante puntuaciones cuantitativas y gestionar un histórico de análisis con persistencia de datos.

## 🚀 Funcionalidades Principales

- **Dashboard de Estadísticas**: Cálculo automático del promedio de UX Score y conteo de webs de alta calidad.
- **Sistema de Análisis Dinámico**: Creación de registros con nombre, puntuación (0-100) y marcación de favoritos.
- **Visualización Semántica**: Barras de progreso con colores inteligentes (Rojo < 50, Naranja 50-79, Verde 80+).
- **Filtros de Interfaz**: Sistema de filtrado para destacar análisis favoritos.
- **Persistencia con LocalStorage**: Los datos se mantienen guardados de forma local en el navegador.

## 🛠️ Stack Tecnológico

- **React 18** (Vite)
- **Hooks**: `useState`, `useEffect`
- **Lógica de Datos**: `Array.map`, `Array.filter`, `Array.reduce`
- **Estilos**: CSS3 con variables dinámicas y Flexbox/Grid.

## 🧠 Desafíos Técnicos y Aprendizajes

1. **Estado Compartido (Lifting State Up)**: Centralización de la lógica en `App.jsx` para permitir la comunicación bidireccional entre el formulario de entrada y la lista de visualización.
2. **Ciclo de Vida**: Uso de `useEffect` para sincronizar el estado de la aplicación con el almacenamiento del navegador de forma eficiente.
3. **Inmutabilidad**: Actualización de estados mediante el operador spread (`...`) para garantizar un flujo de datos predecible y evitar errores de renderizado.

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en local
npm run dev

Futuras ideas ah añadir para escalar el proyecto:
Añadir Categorías: Filtrar webs por "E-commerce", "SaaS" o "Landing Page".

Subir Imágenes: Permitir que el usuario pegue una captura de pantalla de la web analizada.

Exportar a PDF: Generar un informe con los resultados del análisis.

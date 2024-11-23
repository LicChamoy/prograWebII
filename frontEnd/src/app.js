import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PostPage from './pages/PostPage';
import Dashboard from './pages/Dashboard';
import Etiqueta from './pages/CrearEtiq';
import PublicacionCrear from './pages/CrearPub';
import ReporteComentario from './pages/ReporteComentario';
import ResultadosBusqueda from './pages/ResultadosBusqueda';
import ComentariosReportados from './pages/ComentariosReportados';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/publicaciones/:id" element={<PostPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Etiqueta" element={<Etiqueta />} />
        <Route path="/PublicacionCrear" element={<PublicacionCrear />} />
        <Route path="/ReporteComentario" element={<ReporteComentario />} />
        <Route path="/resultados-busqueda" element={<ResultadosBusqueda />} />
        <Route path="/comentarios-reportados" component={ComentariosReportados} />
      </Routes>
    </Router>
  );
}

export default App;

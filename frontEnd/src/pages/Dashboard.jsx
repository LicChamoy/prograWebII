import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PostDashboard from '../components/PostDashboard';
import '../styles/menu.css';
import '../styles/dashboardEstilo.css';

function Dashboard() {
    return (
        <div>
            {/* Barra de navegación */}
            <Navbar />

            {/* Contenedor principal */}
            <div className="contenedor">
                {/* Barra lateral */}
                <Sidebar />

                {/* Dashboard de publicaciones */}
                <PostDashboard />
            </div>
        </div>
    );
}

export default Dashboard;

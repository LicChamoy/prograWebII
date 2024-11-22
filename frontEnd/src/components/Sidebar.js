import React from 'react';

const Sidebar = () => {
  return (
    <div className="izquierda">
      <div className="etiqueta" id="home">
        <i className="fa-solid fa-house" />
        Home
      </div>
      <div className="etiqueta" id="etiquetas">
        <i className="fa-solid fa-tag fa-flip-horizontal" />
        Etiquetas
      </div>
      <div className="etiqueta">Etiquetas populares</div>
      <div className="etiqueta" id="react">
        <i className="fa-solid fa-tag fa-flip-horizontal" />
        React
      </div>
      <div className="etiqueta" id="js">
        <i className="fa-solid fa-tag fa-flip-horizontal" />
        JavaScript
      </div>
    </div>
  );
};

export default Sidebar;

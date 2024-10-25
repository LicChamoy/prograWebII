import React from 'react';

const Sidebar = () => {
  return (
    <div className="izquierda">
      <label htmlFor="home">
        <div className="etiqueta" id="home">
          <i className="fa-solid fa-house" id="home" />
          Home
        </div>
      </label>
      <label htmlFor="etiquetas">
        <div className="etiqueta" id="etiquetas">
          <i className="fa-solid fa-tag fa-flip-horizontal" id="etiquetas" />
          Etiquetas
        </div>
      </label>
      <div className="etiqueta">Etiquetas populares</div>
      <label htmlFor="react">
        <div className="etiqueta" id="react">
          <i className="fa-solid fa-tag fa-flip-horizontal" id="react" />
          React
        </div>
      </label>
      <label htmlFor="js">
        <div className="etiqueta" id="js">
          <i className="fa-solid fa-tag fa-flip-horizontal" id="js" />
          JavaScript
        </div>
      </label>
    </div>
  );
};

export default Sidebar;

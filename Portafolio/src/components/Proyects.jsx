import React from "react";

const Proyects = () => {
  const listaProyectos = [
    { id: 1, nombre: "Portfolio en React", descripcion: "Mi primer proyecto con React y Vite" },
    { id: 2, nombre: "Página Web HTML/CSS", descripcion: "" }
  ];

  return (
    <section>
      <h2>Mis Proyectos</h2>
      <ul>
        {listaProyectos.map((proyecto) => (
          <li key={proyecto.id}>
            <strong>{proyecto.nombre}:</strong> {proyecto.descripcion}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Proyects;
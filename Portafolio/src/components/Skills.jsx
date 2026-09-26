import React from 'react';

const Skills = () => {
    const Habilidades = ["HTML", "CSS", "JAVASCRIPT", "REACT", "GIT"];

    return (
    <section>
        <h2>Mis habilidades</h2>
        <ul>
        {Habilidades.map((habilidad) => (
            <li key={habilidad}>{habilidad}</li>
        ))}
        </ul>
    </section>
    );
};

export default Skills;
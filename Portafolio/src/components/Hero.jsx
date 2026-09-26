import React, { useState } from 'react'

const Hero = () => {

    const [mostrar, setMostrar] = useState(false);

  return (
    <section>
        <h2>¡Hola! Bienvenido a mi portafolio</h2>
            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? 'Ocultar saludo' : 'Mostrar Saludo'}
            </button>
            {mostrar && <p>¡Gracias por visitar mi primera aplicación en React!</p>}
    </section>
  )
}

export default Hero
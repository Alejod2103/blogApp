import React from 'react'
import './video.css'
import ReactPlayer from 'react-player'

function Video({Video, Titulo, width, height}) {
    return (
        <>
        <div className='video'>
            <div className='videoContainer'>
              <h1 className='titulo_video'>{Titulo}</h1>
              <h1 className='descripcion_Video'>Descripcion</h1>
              
              <ReactPlayer className="Player" width={width} height={height} controls url={Video} />


            <div className='contenedor_del_div'>
              <p className='descripcion_del_video'>Implicación de los estudiantes para conseguir el desempeño académico y grado de compromiso con el proceso de aprendizaje.
            Se diferencian cuatro dimensiones: cognitiva, conductual, afectiva y agéntica.
            El Compromiso Educativo es una apuesta interinstitucional que tiene por objetivo apoyar a los y las adolescentes y jóvenes para que permanezcan y puedan potenciar sus trayectorias en el sistema educativo público, completando la Educación Media Superior.
            El programa se basa en tres componentes: Espacios de Referencia entre Pares, Acuerdo Educativo (entre estudiantes, familias y centro educativo) y Becas de Estudio</p></div>

            </div>
        </div>

        {/* <div className='descripcionVideoContainer'>
                <span><h1 className='descripcion_titulo'>Descripcion</h1></span>
                <span><p>Lorem</p></span>
                
            </div> */}

        </>
    )
}

export default Video

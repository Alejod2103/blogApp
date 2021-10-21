import React from 'react'
import Video from '../../components/Vid/Video'
import './videoP.css'

function VideoP() {
    return (
        <>
        <div className='video'>
            <div className='tituloContainerV'>
               <span className='tituloV'><h1>Más sobre el Compromiso</h1></span>
               <p>Conoce mas sobre la importancia del compromiso en los siguientes videos</p>
            </div>
        </div>

        <Video height="300px" width="600px" Video="https://youtu.be/3xqw4op5KtM" Titulo="Definicion de Compromiso" />

        

        

        </>
    )
}

export default VideoP

import React from 'react'
import './bitacora.css'
export default function Bitacora() {
    return (
        <div className='bitacora'>
            <div className='bitacoraContainer'>
                <br></br>
              <div className='tituloBitContainer'>
                  <h1 className='tituloBit'>BITACORA DE PARTICIPACION</h1>
              </div> 

              <div className='list1'>
                <ul className='bit'>
                  <li className='bitc'>Material Ilustrativo-Imagenes/edicion/: <p id='nombre'>Carlos Antonio Alas</p></li>
                  <li className='bitc'>Material Audiovisial-Videos y ejemplos de uso cotidiano del compromiso: <p id='nombre'>Daniela Sarai Sanchez</p></li>
                  <li className='bitc'>Definiciones y Ejemplos: <p id='nombre'>Amilcar Alejandro Hernandez</p></li>
                </ul>
              </div>

              <div className='list2'>
                <ul className='bitDos'>
                  <li className='bitc'>Cuento e Ilustracion: <p id='nombre'>Diego Alejandro Duran</p></li>
                  <li className='bitc'>Programacion y edicion del blog: <p id='nombre'>Alisson Gabriela Flores</p></li>
                </ul>
              </div>
            </div>
        </div>
    )
}

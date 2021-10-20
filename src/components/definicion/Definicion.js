import "./definicion.css";

export default function Definicion({img}) {
  return (
    <div className="definicion">

        <h1 className="tituloDef">¿Que es el Compromiso?</h1>
        <br></br>

        <div className="defInfoContainer"><p className="defInfo"><b>P</b>artimos de la definición de compromiso, y definimos compromiso como "la capacidad de los seres humanos para darse cuenta de la importancia de completar el desarrollo del trabajo en un tiempo determinado". A través del compromiso, maximizamos nuestra capacidad para completar las tareas encomendadas. <br></br><h1>Que ejemplos de Compromiso tenemos?</h1> <br></br><p>Ejemplos de aplicación del compromiso en nuestra vida cotidiana:</p> 
        <br></br> 
          <ul>
              <li>-Me comprometo a entregar todas mis tareas a tiempo por todo el año.</li>
              <li>-Me comprometo a dar mi mejor versión de mí mismo cada día.</li>
              <li>-Me comprometo a estudiar Biología en las tardes para mejorar mis notas.</li>
              <li>-Me comprometo a cumplir todas mis metas a futuro.</li>
              <li>-Me comprometo a obedecer a mis padres y maestros.</li>
              <li>-Me comprometo a serle fiel a mi espos@.</li>
              <li>-Me comprometo a mejorar mi estado físico.</li>
              <li>-Me comprometo a empatizar con todo aquel que necesite de mi ayuda.</li>
          </ul> </p>
         
        </div>

      <img
        className="defImg"
        src={img}
        alt=""
      />



    </div>
  );
}


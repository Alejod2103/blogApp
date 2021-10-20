import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
          
      </div>

      <span className="tituloContainer"><h1 className="titulo">INTEGRANTES</h1></span>

      <div className="teamPre">

        <div className="teamBox">
          <img className="fotoPre" src="https://i.postimg.cc/pLJMGBTC/3-B75-B20-D-27-AC-4400-AC6-D-F2-C846-CCEFCD.jpg" alt=""/>
            <h3 className="nombre">Alisson Gabriela Flores Chávez #24</h3>
        </div>
        
        <div className="teamBox">
          <img className="fotoPre" src="https://i.postimg.cc/VLyyzh04/985-B73-EC-FC5-C-4213-BA0-B-E4-B83-FE61052.jpg" alt=""/>
            <h3>Carlos Antonio Alas Bonilla #2</h3>
        </div>

        <div className="teamBox">
          <img className="fotoPre" src="https://i.postimg.cc/HsbqntQm/AD954-D76-1969-4-AE3-91-C7-B8266-BEDE079.jpg" alt=""/>
            <h3>Daniela Saraí Sánchez Perdomo #30</h3>
        </div>

        <div className="teamBox">
          <img className="fotoPre" src="https://i.postimg.cc/T1DZrVFr/BD3365-A5-3-DFA-41-FD-95-AA-70-B923096690.jpg" alt=""/>
            <h3>Amilcar Alejandro Hernández Ancheta #27</h3>
        </div>

        <div className="teamBox">
          <img className="fotoPre" src="https://i.postimg.cc/MZf22wHv/C638-EA31-F992-418-C-9-A17-E8-F330990-D78.jpg" alt=""/>
            <h3>Diego Alejandro Duran Portillo #19</h3>
        </div>
      </div>

      

    </>
  );
}

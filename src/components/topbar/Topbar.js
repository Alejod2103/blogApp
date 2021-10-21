import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {

  return (
    <div className="top">
      <div className="topLeft">
        
         <a href="https://colegioluzdeisrael.com">
        <img className="topImg" src=" https://i.postimg.cc/x1qvWVbs/LDI.png " alt="" />
         </a>

      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          
          {/* <li className="topListItem"><Link className="link" to="/presentacion">DEFINICIONES</Link></li> */}
          <li className="topListItem"><Link className="link" to="/video">VIDEO</Link></li>
          <li className="topListItem"><Link className="link" to="/cuento">CUENTO</Link></li>
        </ul>
      </div>
    </div>
  );
}

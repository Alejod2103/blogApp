import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Bienvenidos/as a Nuestro blog Sobre:</span>
        <span className="headerTitleLg">EL COMPROMISO</span>
      </div>
      <img
        className="headerImg"
        src="https://i.postimg.cc/zBSW2BM4/Compromiso.jpg"
        alt=""
      />
    </div>
  );
}
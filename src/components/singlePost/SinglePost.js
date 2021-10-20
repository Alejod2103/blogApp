import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://png.pngtree.com/thumb_back/fw800/background/20210906/pngtree-elegant-ink-landscape-fairy-grey-chinese-style-banner-image_804424.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Cuento del Hada y la Sombra
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Pedro Pablo Sacristan
              </Link>
            </b>
          </span>
        </div>
        <p className="singlePostDesc">
        Hace mucho, mucho tiempo, antes de que los hombres y sus ciudades llenaran la tierra, antes incluso de que muchas cosas tuvieran un nombre, existía un lugar misterioso custodiado por el hada del lago. Justa y generosa, todos sus vasallos siempre estaban dispuestos a servirle. Y cuando unos malvados seres amenazaron el lago y sus bosques, muchos se unieron al hada cuando les pidió que la acompañaran en un peligroso viaje a través de ríos, pantanos y desiertos en busca de la Piedra de Cristal, la única salvación posible para todos.

El hada advirtió de los peligros y dificultades, de lo difícil que sería aguantar todo el viaje, pero ninguno se asustó. Todos prometieron acompañarla hasta donde hiciera falta, y aquel mismo día, el hada y sus 50 más leales vasallos comenzaron el viaje. El camino fue aún más terrible y duro que lo había anunciado el hada. Se enfrentaron a bestias terribles, caminaron día y noche y vagaron perdidos por el desierto sufriendo el hambre y la sed. Ante tantas adversidades muchos se desanimaron y terminaron por abandonar el viaje a medio camino, hasta que sólo quedó uno, llamado Sombra. No era el más valiente, ni el mejor luchador, ni siquiera el más listo o divertido, pero continuó junto al hada hasta el final. Cuando ésta le preguntaba que por qué no abandonaba como los demás, Sombra respondía siempre lo mismo "Os dije que os acompañaría a pesar de las dificultades, y éso es lo que hago. No voy a dar media vuelta sólo porque haya sido verdad que iba a ser duro".
<br />
          <br />
Gracias a su leal Sombra pudo el hada por fin encontrar la Piedra de Cristal, pero el monstruoso Guardián de la piedra no estaba dispuesto a entregársela. Entonces Sombra, en un último gesto de lealtad, se ofreció a cambio de la piedra quedándose al servicio del Guardián por el resto de sus días...

La poderosa magia de la Piedra de Cristal permitió al hada regresar al lago y expulsar a los seres malvados, pero cada noche lloraba la ausencia de su fiel Sombra, pues de aquel firme y generoso compromiso surgió un amor más fuerte que ningún otro. Y en su recuerdo, queriendo mostrar a todos el valor de la lealtad y el compromiso, regaló a cada ser de la tierra su propia sombra durante el día; pero al llegar la noche, todas las sombras acuden el lago, donde consuelan y acompañan a su triste hada.
          
        </p>
      </div>
    </div>
  );
}

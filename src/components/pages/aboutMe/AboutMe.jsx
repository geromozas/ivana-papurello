import { Button } from "@mui/material";
import "./AboutMe.css";
//FDF8F8 F4D4CF
const AboutMe = () => {
  return (
    <div>
      <div className="boxTitleAboutMe">
        <h1 className="titleAboutMe">Sobre Mí</h1>
        <p className="textTitleAboutMe">
          Conoce mi historia, formación y filosofía de trabajo.
        </p>
      </div>
      <div className="boxAboutMe">
        <img
          className="imgAboutMe"
          src="https://firebasestorage.googleapis.com/v0/b/ivana-papurello.firebasestorage.app/o/placeholder.jpg?alt=media&token=7097dce0-42fb-4ceb-93f1-1f11ca1fb7ee"
          alt=""
        />
        <div className="boxTextAboutMe">
          <h2 className="titleMyPath">Mi camino</h2>
          <p className="textAboutMe">
            Soy una apasionada terapeuta y facilitadora con más de 10 años de
            experiencia en el campo de la sanación energética y la
            bideocodificación. Mi camino comenzó tras una profunda crisis
            personal que me llevó a buscar respuestas más allá de lo
            convencional.
          </p>
          <p className="textAboutMe">
            Tras años de formación con maestros de diversas disciplinas en
            España, India y Estados Unidos, desarrollé un enfoque único que
            integra la bideocodificación, la sanación energética, la liberación
            emocional y otras técnicas complementarias.
          </p>
          <p className="textAboutMe">
            Mi misión es ayudar a las personas a reconectar con su esencia y
            liberar los patrones limitantes que les impiden vivir plenamente.
            Creo firmemente que todos tenemos el poder de sanar y transformar
            nuestra vida desde dentro.
          </p>
        </div>
      </div>
      <div className="boxAboutMeLower">
        <h2 className="questionTransf">
          ¿Listo para Comenzar tu Camino de Transformación?
        </h2>
        <p className="textQuestion">
          Explora mis cursos y talleres o contáctame para una consulta
          personalizada.
        </p>
        <div
          style={{
            display: "flex",
            marginTop: 15,
          }}
        >
          <a href="https://wa.me/5493416041873?text=Hola%2C%20estoy%20interesado/a%20en%20tus%20servicios...">
            <Button>Contactar</Button>
          </a>
          <a href="/shop">
            <Button>Ver cursos</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

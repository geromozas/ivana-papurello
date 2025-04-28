import { Button } from "@mui/material";
import "./AboutMe.css";

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
          src="https://firebasestorage.googleapis.com/v0/b/ivana-papurello.firebasestorage.app/o/ivana-papurello-self.png?alt=media&token=66b0b3b1-cddd-4523-abe3-f1bf1fa9e3bc"
          alt=""
        />

        <div className="boxTextAboutMe">
          <h2 className="titleMyPath">Mi camino</h2>
          <p className="textAboutMe">
            Soy Ivana Papurello, mentora holística, chamana, mujer medicina y
            sanadora. Llevo más de 25 años recorriendo el camino de la sanación
            espiritual, el despertar de la conciencia y el retorno al corazón.
            Me formé como Licenciada en Biodesprogramación Biológica y
            Reprogramación Ancestral, y he dedicado mi vida a integrar la
            sabiduría ancestral con herramientas terapéuticas profundas y
            transformadoras.
          </p>
          <p className="textAboutMe">
            Acompaño a seres , buscadores espirituales que sienten el llamado a
            sanar, recordar quiénes son y reconectar con su poder interior. A
            través de mis cursos holísticos, comparto todo lo que he aprendido y
            vivido en este camino: técnicas de sanación energética, rituales
            chamánicos, reprogramación del linaje, conexión con la medicina de
            la Tierra y prácticas sagradas que despiertan el alma.
          </p>
          <p className="textAboutMe">
            Cada formación es un espacio seguro y amoroso donde podés aprender a
            tu ritmo, en comunidad o de forma individual, y aplicar estos
            saberes tanto en tu vida personal como en tu camino como terapeuta o
            guía espiritual. No solo comparto conocimientos, sino también una
            experiencia profunda de transformación desde el cuerpo, el alma y el
            linaje.
          </p>
          <p className="textAboutMe">
            Este es un llamado a todas aquellas personas que desean sanar,
            crecer y expandirse desde lo más auténtico de su ser. Mis cursos son
            puertas hacia una nueva vida, una vida en coherencia, con propósito
            y en sintonía con tu verdadera esencia.
          </p>
          <p className="textAboutMe">
            Si sentís que es tu momento, te invito a comenzar hoy tu viaje de
            transformación.
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

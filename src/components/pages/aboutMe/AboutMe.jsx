import { Button } from "@mui/material";
//FDF8F8 F4D4CF
const AboutMe = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
          marginBottom: 40,
          backgroundColor: "#F4D4CF",
          padding: 20,
        }}
      >
        <h1>Sobre Mí</h1>
        <p>Conoce mi historia, formación y filosofía de trabajo.</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: 500, marginRight: 60 }}
          src="https://firebasestorage.googleapis.com/v0/b/ivana-papurello.firebasestorage.app/o/placeholder.jpg?alt=media&token=7097dce0-42fb-4ceb-93f1-1f11ca1fb7ee"
          alt=""
        />
        <div style={{ marginTop: 20, marginLeft: 60 }}>
          <h2 style={{ marginBottom: 20 }}>Mi camino</h2>
          <p style={{ width: 500, marginBottom: 15 }}>
            Soy una apasionada terapeuta y facilitadora con más de 10 años de
            experiencia en el campo de la sanación energética y la
            bideocodificación. Mi camino comenzó tras una profunda crisis
            personal que me llevó a buscar respuestas más allá de lo
            convencional.
          </p>
          <p style={{ width: 500, marginBottom: 15 }}>
            Tras años de formación con maestros de diversas disciplinas en
            España, India y Estados Unidos, desarrollé un enfoque único que
            integra la bideocodificación, la sanación energética, la liberación
            emocional y otras técnicas complementarias.
          </p>
          <p style={{ width: 500, marginBottom: 15 }}>
            Mi misión es ayudar a las personas a reconectar con su esencia y
            liberar los patrones limitantes que les impiden vivir plenamente.
            Creo firmemente que todos tenemos el poder de sanar y transformar
            nuestra vida desde dentro.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
          marginBottom: 40,
          backgroundColor: "#FDF8F8",
          opacity: 0.8,
          padding: 20,
        }}
      >
        <h2>¿Listo para Comenzar tu Camino de Transformación?</h2>
        <p>
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
          <a href="">
            <Button>Ver cursos</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

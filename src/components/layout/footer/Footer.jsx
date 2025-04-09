import "./Footer.css";

const Footer = () => {
  return (
    <div id="boxFooter">
      <div className="boxFooterUno">
        <div className="subBoxFooter">
          <img
            className="imgFooter"
            src="https://firebasestorage.googleapis.com/v0/b/ivana-papurello.firebasestorage.app/o/ivana-papurello-logo.jpeg?alt=media&token=b3d2e5fd-2c34-4507-a008-b11927a126c3"
            alt=""
          />
          <p className="textFooter">
            Transformando vidas a través de la sanación, liberación y bienestar
            integral.
          </p>
        </div>
        <div className="subBoxFooter">
          <h4 style={{ color: "#d1a4ac" }}>Enlaces Rápidos</h4>
          <ul style={{ listStyleType: "none" }}>
            <a href="/" style={{ color: "white" }}>
              <li>Inicio</li>
            </a>
            <a href="/about-me" style={{ color: "white" }}>
              <li>Sobre Mí</li>
            </a>
            <a href="/shop" style={{ color: "white" }}>
              <li>Tienda</li>
            </a>
            <a href="/cart" style={{ color: "white" }}>
              <li>Carrito</li>
            </a>
            <a href="" style={{ color: "white" }}>
              <li>Mis compras</li>
            </a>
          </ul>
        </div>
        <div style={{ color: "white" }} className="subBoxFooter">
          <h4 style={{ color: "#d1a4ac" }}>Contacto</h4>
          <p>ivana_paurello@gmail.com</p>
          <p>+34 123 456 789</p>
        </div>
      </div>
      <hr style={{ marginTop: 20, marginBottom: 20 }} />
      <div className="boxCopyright">
        <p style={{ color: "white", opacity: "0.5" }}>
          © 2025 Ivana Papurello. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;

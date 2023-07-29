
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h3>Importalo</h3>
        <p>Tel: 3356-4556</p>
        <p>Dirección: Av. Mitre 1518, Buenos Aires</p>
      </div>
      <div className="footer-buttons">
       
        <a href="https://www.facebook.com/importalo" target="_blank" rel="noopener noreferrer">
          <button className="facebook-button">Facebook</button>
        </a>
        <a href="https://www.instagram.com/importalo" target="_blank" rel="noopener noreferrer">
          <button className="instagram-button">Instagram</button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

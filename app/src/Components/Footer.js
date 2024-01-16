import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <h3 className="footer-heading">Social Media</h3>
        <table className="social-media">
          <tbody>
            <tr>
              <td>
                <a href="https://www.facebook.com/wuerstlich/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faInstagram} />
              </td>
            </tr>
            {/* Add more social links here */}
          </tbody>
        </table>
      </div>
      <div className="general-links">
        <h3 className="footer-heading">Allgemein</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <a href="impressum-link">Impressum</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="datenschutz-link">Datenschutz</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="kontakt-link">Kontakt</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="kontakt-info">
        <h3 className="footer-heading">Kontakt</h3>
        <table>
          <tbody>
            <tr>
              <td style={{ fontSize: '24px' }}>📱</td>
              <td>+49 (0) 173 2398011</td>
            </tr>
            <tr>
              <td style={{ fontSize: '24px' }}>📫</td>
              <td>
                <a href="mailto:info@wuerstlich.de">info@wuerstlich.de</a>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '24px' }}>🏠</td>
              <td>Berliner Chaussee 48-50</td>
            </tr>
            <tr>
              <td />
            </tr>
            <tr>
              <td />
              <td> 39114 Magdeburg</td>
            </tr>
            <tr>
              <td />
              <td> Germany</td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
}

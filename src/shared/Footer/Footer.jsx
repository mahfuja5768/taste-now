import logo from "../../assets/images/logo1.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
const Footer = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={youtube} alt="youtube" />
          </li>
        </ul>
      </div>
      <div>
        <div>
          <ul>
            <li>Seslendirme ve Alt Jazz</li>
            <li>Media Market</li>
            <li>Gillie</li>
            <li>Size Last</li>
          </ul>
          <ul>
            <li>Self Betimes</li>
            <li>Yatırımcı İlişkileri</li>
            <li>Basal Himmler</li>
          </ul>
          <ul>
            <li>Yard Market</li>
            <li>Is İmkanları</li>
            <li>Car Tercihleri</li>
          </ul>
          <ul>
            <li>Hedge Karla</li>
            <li>Mullein Koşulları</li>
            <li>Autumnal Bulgier</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

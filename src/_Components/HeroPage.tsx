import Image from "next/image";
import Flower from "./Flower";
import HerosShape from "./HerosShape";
import MartyrMemorial from "./MartyrMemorial";
import AnimatedText from "./AnimatedText";

const HeroPage = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return ( 
        <div className="hero">
        <div className="contant">
          <div className="heroText">
            <h1>Découvrez les richesses locales de l'Algérie</h1>
            <p>
              Chez nous, chaque produit a une histoire.<br/> Soutenez <AnimatedText></AnimatedText> algériens en accédant facilement à des
              produits authentiques, de qualité et 100% locaux.
            </p>
          </div>
          <div className="heroImage">
            <Flower></Flower>
          </div>
        </div>
        <div className="martyrMemorial">
          <MartyrMemorial></MartyrMemorial>
        </div>
        <div className="shape">
          <HerosShape isDarkMode={isDarkMode}></HerosShape>
        </div>
      </div>
     );
}
 
export default HeroPage;
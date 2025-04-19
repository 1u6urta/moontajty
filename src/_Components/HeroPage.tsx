import { useTranslations } from "next-intl";
import Flower from "./Flower";
import HerosShape from "./HerosShape";
import MartyrMemorial from "./MartyrMemorial";
import AnimatedText from "./AnimatedText";

const HeroPage = () => {
    const t = useTranslations('HeroPage');
    return ( 
        <div className="hero">
        <div className="contant">
          <div className="heroText">
            <h1>{t('H1text')}</h1>
            <p>
            {t('p1')}<br/> {t('p2')} 
            <AnimatedText></AnimatedText>
             {t('p3')}
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
          <HerosShape></HerosShape>
        </div>
      </div>
     );
}
 
export default HeroPage;
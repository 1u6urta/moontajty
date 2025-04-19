import { useTranslations } from "next-intl";
import Banner from "./Banner";
import PropertyCard from "./PropertyCard";

const FamousProducts = () => {
  const t = useTranslations("FamousProducts");

  return (
    <>
      <div id="ProduitsArtisanaux" className="SectionPrduits">
        <Banner titleBanner={t("Artisan")} />
        <div className="Cards">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>

      <div id="ProduitsAlimentaires" className="SectionPrduits">
        <Banner titleBanner={t("Alimentaire")} />
        <div className="Cards">
          <p className="textCards">{t("noProducts")}</p>
        </div>
      </div>

      <div id="ProduitsCosmetiques" className="SectionPrduits">
        <Banner titleBanner={t("Cosmetique")} />
        <div className="Cards">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>

      <div id="ProduitsAgricoles" className="SectionPrduits">
        <Banner titleBanner={t("Agricole")} />
        <div className="Cards">
          <p className="textCards">{t("noProducts")}</p>
        </div>
      </div>
    </>
  );
};

export default FamousProducts;

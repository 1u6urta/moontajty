import { useTranslations } from "next-intl";
import Banner from "./Banner";
import PropertyCard from "./PropertyCard";

const FamousProducts = () => {
  const t = useTranslations("Products");

  interface Property {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    // rating: number;
    location: string;
    favorites: number;
    promo : number;
  }
    
  // Sample property data for demo
  const sampleProperties: Property[] = [
    {
      id: 1,
      title: "Handcrafted Ceramic Vase",
      image: "/image 4.jpg",
      price: 2500,
      category: "Décoration",
      // rating: 4.8,
      location: "Alger",
      favorites: 42,
      promo: 0,
    },
    {
      id: 2,
      title: "Traditional Berber Rug",
      image: "/image 1.jpg",
      price: 8500,
      category: "Décoration",
      // rating: 4.9,
      location: "Constantine",
      favorites: 67,
      promo: 50,
    },
    {
      id: 3,
      title: "Handwoven Basket Set",
      image: "/image 3.jpg",
      price: 3200,
      category: "Cuisine",
      // rating: 4.7,
      location: "Oran",
      favorites: 28,
      promo: 0,
    },
    {
      id: 4,
      title: "Embroidered Textile Wall Art",
      image: "/image 2.jpg",
      price: 4700,
      category: "Décoration",
      // rating: 4.5,
      location: "Tlemcen",
      favorites: 35,
      promo: 90,
    },
    {
      id: 5,
      title: "Handmade Leather Pouf",
      image: "/image 2.jpg",
      price: 6200,
      category: "Décoration",
      // rating: 4.6,
      location: "Alger",
      favorites: 51,
      promo: 0.9,
    },
    {
      id: 6,
      title: "Traditional Clay Tagine",
      image:"/image 2.jpg",
      price: 3800,
      category: "Cuisine",
      // rating: 4.9,
      location: "Sétif",
      favorites: 73,
      promo: 0,
    },
  ];
  return (
    <>
      <div id="ProduitsArtisanaux" className="SectionPrduits">
        <Banner titleBanner={t("Artisan")} />
        <div className="Cards">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property}></PropertyCard>
          ))}
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
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property}></PropertyCard>
          ))}
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

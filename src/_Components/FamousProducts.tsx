import Banner from "./Banner";
import PropertyCard from "./PropertyCard";

const FamousProducts = () => {
  return (
    <>
      <div id="PrduitsArtisanaux" className="SectionPrduits">
        <Banner titleBanner={"Produits Artisanaux"}></Banner>
        <div className="Cards">
          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
        </div>
      </div>
      <Banner titleBanner={"Produits Alimentaires"}></Banner>
      <div className="Cards">
        <p className="textCards">Il n&apos;y a aucun produit disponible actuellement.</p>
      </div>
      <Banner titleBanner={"Produits cosmétiques naturels et bio "}></Banner>
      <div className="Cards">
        <PropertyCard></PropertyCard>
        <PropertyCard></PropertyCard>
        <PropertyCard></PropertyCard>
      </div>
      <Banner titleBanner={"Produits agricoles"}></Banner>
      <div className="Cards">
        <p className="textCards">Il n&apos;y a aucun produit disponible actuellement.</p>
      </div>
    </>
  );
};

export default FamousProducts;

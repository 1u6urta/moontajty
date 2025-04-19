import FamousProducts from "./FamousProducts";
import HeroPage from "./HeroPage";

const Home = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <>
      <HeroPage isDarkMode={isDarkMode}></HeroPage>
      <FamousProducts></FamousProducts>
    </>
  );
};

export default Home;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";
import About from "@/components/About";
import Causes from "@/components/Causes";
import Treatment from "@/components/Treatment";
import VitaminDKit from "@/components/VitaminDKit";
import Activities from "@/components/Activities";
import Resources from "@/components/Resources";

const Home = () => {
  return (
    <div className="flex min-h-[590vh] w-full flex-col items-center justify-center space-y-16">
      <Header />
      <Footer />
      <Welcome />
      <About />
      <Causes />
      <Treatment />
      <VitaminDKit />
      <Activities />
      <Resources />
    </div>
  );
};

export default Home;

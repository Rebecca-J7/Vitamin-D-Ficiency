import Header from "@/components/Header";
import MusicButton from "@/components/MusicButton";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex min-h-[630vh] w-full flex-col items-center justify-center space-y-16">
      <Header />
      <MusicButton />
      <Footer />
    </div>
  );
};

export default Home;

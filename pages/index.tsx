import { NextPage } from "next";
import Header from "pages/components/Header";
import Hero from "pages/components/Hero";

const Home: NextPage = () => {
  return (
    <main className="bg-[#E1E1E1]  h-full">
      <Header />
      <Hero />
    </main>
  );
};

export default Home;

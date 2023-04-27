import { NextPage } from "next";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <main className="bg-[#E1E1E1]  h-full">
      <Header />
      <Hero />
    </main>
  );
};

export default Home;

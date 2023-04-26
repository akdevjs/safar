import { NextPage } from "next";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";

const Home: NextPage = () => {
  return (
    <main className="bg-[#E1E1E1]  h-full">
      <Header />
      <Hero />
    </main>
  );
};

export default Home;

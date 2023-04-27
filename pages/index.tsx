import { NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <main className="bg-[#E1E1E1]  h-full">
      <Header />
      <Hero />
    </main>
  );
};

export default Home;

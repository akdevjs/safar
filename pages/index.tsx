import { NextPage } from "next";
// import Hero from "pages/components/Hero";
import Header from "pages/components/Header";

const Home: NextPage = () => {
  return (
    <main className="bg-[#E1E1E1]  h-full">
      <Header />
      {/*<Hero /> */}
    </main>
  );
};

export default Home;

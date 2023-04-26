import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="w-full">
      {/* Top Images  */}
      <div className="relative w-full flex h-[30rem] md:justify-between justify-center">
        <img
          src="assets/handmade_wave.svg"
          alt="Image 6"
          className="absolute w-full bottom-0 z-60"
        />
        <div className="relative w-52 md:block hidden ">
          <img
            src="assets/camera.svg"
            alt="Image 2"
            className="absolute bottom-8 w-40 -left-5 h-auto -right-6  z-20"
          />
        </div>
        <div className="relative bottom-2 md:bottom-10 w-96 flex justify-center items-center mt-24 h-96">
          <img
            src="assets/blue_mountain.svg"
            alt="Image 2"
            className="absolute bottom-8 w-96 h-auto -right-6  z-20"
          />
          <img
            src="assets/yellow_circle.svg"
            alt="Image 3"
            className="absolute w-72 h-auto -left-10 z-30"
          />
          <img
            src="assets/main_tourist.svg"
            alt="Image 4"
            className="absolute w-64 h-auto  z-40"
          />
          <img
            src="assets/double_clouds.svg"
            alt="Image 5"
            className="absolute w-96 h-auto scale-125 bottom-0 z-50"
          />
        </div>
        <div className="relative h-56 mt-10 w-52 md:block hidden">
          <img
            src="assets/pink_circle.svg"
            alt="Image 2"
            className="absolute  w-40 h-auto left-5 bottom-14  z-20"
          />
          <img
            src="assets/hand_made_clock.svg"
            alt="Image 3"
            className="absolute w-32 h-auto left-8 bottom-24  z-30"
          />
          <img
            src="assets/single_cloud.svg"
            alt="Image 4"
            className="absolute w-52 bottom-0 h-auto  z-40"
          />
        </div>
      </div>
      {/* Title and subTitle */}
      <div>
        {/* Border */}
        <div className="h-[2px] mt-12 bg-black w-full"></div>
        {/* Title one */}
        <h1 className="text-9xl px-7 text-[#000B69]">Lorem ipsum</h1>
        {/* Border */}
        <div className="h-[2px] bg-black w-full"></div>
        <div className="flex items-end justify-between px-7">
          <h1 className="text-9xl  mt-10 text-[#000B69]">Lorem ipsum</h1>
          <span className="py-2 text-xl uppercase text-[#000B69]">Scroll</span>
        </div>
        {/* Border */}
        <div className="h-[2px]  bg-black w-full"></div>
      </div>
    </section>
  );
};

export default Hero;

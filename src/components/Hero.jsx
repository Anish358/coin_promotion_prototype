import welcome_video from "../assets/welcome_video.mp4";

const Hero = () => {
  return (
    <section className="mx-auto bg-[#1F0735] text-white lg:py-10">
      <div className="flex justify-center h-full items-center flex-wrap gap-16">
        {/* Video Section */}
        <div className="flex justify-center items-center">
          <div className="w-[600px] h-[400px]">
            <video
              className="w-full h-full object-cover rounded-lg"
              src={welcome_video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-wrap items-center justify-center text-center px-6 space-y-6 lg:items-start lg:max-w-[500px] lg:text-start ">
          <h1 className="text-2xl md:text-4xl">
            <span>
              Spend <span className="text-purple-400">ixfi points</span>
            </span>
            <span>Claim your crypto bags</span>
          </h1>
          <p className="text-white md:text-base text-md">
            The ixfi points you have collected can be spent here. Claim your
            favorite crypto bags and build an unstoppable portfolio.
            <a href="#" className="no-underline">
              Visit our Task Center to find out how to earn ixfi points.
            </a>
          </p>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-400 to-orange-500 text-white hover:shadow-lg z-10 rounded-md">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

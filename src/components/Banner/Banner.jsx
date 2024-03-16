function Banner() {
  return (
    <div className="bg-[url('https://i.ibb.co/dGpcJsF/banner.png')] rounded-[40px] bg-no-repeat bg-cover">
      <div className="py-[180px] max-w-[950px] mx-auto text-center">
        <h1 className="font-bold text-5xl text-white leading-[76px]">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="mt-6 mb-10 text-white text-[18px]">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ <br /> coding problems to become an
          exceptionally well world-class Programmer.
        </p>
        <button className="text-xl text-[#150B2B] bg-[#0BE58A] px-8 py-5 rounded-full">
          Explore Now
        </button>
        <button className="text-xl text-white bg-transparent px-8 py-5 ml-6 rounded-full border border-white">
          Our Feedback
        </button>
      </div>
    </div>
  );
}

export default Banner;

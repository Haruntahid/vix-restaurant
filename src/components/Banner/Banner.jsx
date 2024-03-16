function Banner() {
  return (
    <div className="bg-[url('https://i.ibb.co/dGpcJsF/banner.png')] rounded-3xl lg:rounded-[40px] bg-no-repeat bg-cover bg-center">
      <div className="py-9 lg:py-[180px] w-full lg:max-w-[950px] mx-auto text-center px-4">
        <h1 className="font-bold text-3xl lg:text-5xl text-white lg:leading-[76px]">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="mt-6 mb-10 text-white text-[16px] lg:text-[18px]">
          Explore tailored cooking classes designed to elevate your skills. From
          beginner basics to advanced techniques, discover the joy of cooking
          with personalized guidance from our expert instructors.
        </p>
        <button className="text-[16px] lg:text-xl text-[#150B2B] bg-[#0BE58A] px-8 py-2 lg:py-5 rounded-full">
          Explore Now
        </button>
        <button className="text-[16px] lg:text-xl text-white bg-transparent mt-4 lg:mt-0  px-8 py-2 lg:py-5 lg:ml-6 rounded-full border border-white">
          Our Feedback
        </button>
      </div>
    </div>
  );
}

export default Banner;

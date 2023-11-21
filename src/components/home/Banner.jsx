import mainbanner from "../../assets/mainbanner.jpg";
import mainbanner2 from "../../assets/mainbanner2.jpg";
import bannerIcon from "../../assets/banner-icon.png";

export const Banner = () => {
  return (
    <div
      className="mt-4 w-full rounded-2xl rounded-b-banner sm:h-500 flex lg:flex-row flex-col  overflow-hidden"
      style={{ backgroundImage: `url(${mainbanner2})` }}
    >
      {/* Left side */}
      <div className="lg:w-1/2 w-full md:px-[4.5rem] px-4 sm:py-12 py-6 h-full">
        <div className="space-y-10 text-white lg:w-[40rem] w-full text-center lg:text-left h-full flex flex-col items-center lg:items-baseline justify-between lg:justify-normal">
          <h1 className="text-7xl font-medium">
            We bring the store to your door
          </h1>
          <p className="font-light text-3xl lg:text-2xl">
            Get your order from the most optimal store to save the most for your
            wallet!
          </p>
          <button className="text-primary rounded-xl p-4 bg-cta text-xl font-bold lg:w-2/6 w-1/2">
            Shop now
          </button>
        </div>
      </div>
      {/* Image side */}
      <div className="m-0 m-auto lg:block hidden">
        <img src={bannerIcon} alt="Banner Icon" />
      </div>
    </div>
  );
};

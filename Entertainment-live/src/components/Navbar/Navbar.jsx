import Mininav from "./Mininav";
import SecondMininav from "./SecondMininav";
import redbtn from "/src/assets/images/Layer 4 copy 4.png";

const Navbar = () => {
  return (
    <div className="navbarbg">
      <Mininav />
      <div className="flex flex-row justify-between w-[55%] mx-auto mt-4 mb-1 items-center">
        <h1 className="text-4xl text-title text-white headingtext font-extrabold">Entertainment Live</h1>
        <div className="flex flex-col w-[35%] px-3 py-2 navmidcomp rounded-lg">
          <input
            className="rounded-lg bg-polltext text-black outline:none focus:outline-none border-gray-300 text-sm mb-3"
            type="text"
            placeholder="Search Keyword"
          ></input>
          <div className="flex flex-row gap-1 mb-2">
            <span className="flex gap-1">
              <img className="size-3" src={redbtn} alt="" />
              <p className=" text-xs font-sans text-center text-polltext">
                Entertainment
              </p>
            </span>
            <span className="flex gap-1">
              <img className="size-3" src={redbtn} alt="" />
              <p className=" text-xs font-sans text-center text-polltext">
                Video
              </p>
            </span>
            <span className="flex gap-1">
              <img className="size-3" src={redbtn} alt="" />
              <p className=" text-xs font-sans text-center text-polltext">
                Images
              </p>
            </span>
          </div>
        </div>
      </div>
      <SecondMininav />
    </div>
  );
};

export default Navbar;

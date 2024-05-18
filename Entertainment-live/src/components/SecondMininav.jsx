import redbtn from "../assets/images/Layer 4 copy 4.png";

const SecondMininav = () => {
  return (
    <>
      <ul className="flex justify-between items-center lg:w-[55%] lg:mx-auto lg:gap-0.5 bg-navbackground py-3 px-2 rounded-b-lg overflow-hidden">
        <li>
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold text-white">
              Movies
            </p>
          </span>
        </li>
        <li>
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Music
            </p>
          </span>
        </li>
        <li>
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Download
            </p>
          </span>
        </li>
        <li>
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              On-Demand
            </p>
          </span>
        </li>
        <li>
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Expert Advice
            </p>
          </span>
        </li>
        <li>
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Community
            </p>
          </span>
        </li>
        <li>
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              StarSpeak
            </p>
          </span>
        </li>
        <li>
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Offers & Promos
            </p>
          </span>
        </li>
        <li>
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Take a break
            </p>
          </span>
        </li>
      </ul>
    </>
  );
};

export default SecondMininav;

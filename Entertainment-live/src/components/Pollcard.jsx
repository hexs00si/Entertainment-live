import redbtn from "../assets/images/Layer 4 copy 4.png";

const Pollcard = () => {
  return (
    <div className="pollCardBg p-3 w-[22%] rounded-xl">
      <div className="text-lg font-title text-polltext font-bold pollCard rounded-lg pl-3 mb-1">
        Latest Poll
      </div>
      <h3 className="text-white font-sans font-light text-xs">
        What is your favourite genre of Music?
      </h3>
      <ul className="mb-2">
        <li>
          <span className="flex items-center gap-1 rounded-md bg-pollrow mt-1">
            <img className=" size-3" src={redbtn} alt="btn" />
            <p className="text-xs font-sans text-center font-light text-white">
              Pop
            </p>
          </span>
        </li>
        <li>
          <span className="flex items-center gap-1 rounded-md bg-pollrow mt-1">
            <img className=" size-3" src={redbtn} alt="btn" />
            <p className="text-xs font-sans text-center font-light text-white">
              R&B
            </p>
          </span>
        </li>{" "}
        <li>
          <span className="flex items-center gap-1 rounded-md bg-pollrow mt-1">
            <img className=" size-3" src={redbtn} alt="btn" />
            <p className="text-xs font-sans text-center font-light text-white">
              Rock
            </p>
          </span>
        </li>{" "}
        <li>
          <span className="flex items-center gap-1 rounded-md bg-pollrow mt-1">
            <img className=" size-3" src={redbtn} alt="btn" />
            <p className="text-xs font-sans text-center font-light text-white">
              Classical
            </p>
          </span>
        </li>{" "}
        <li>
          <span className="flex items-center gap-1 rounded-md bg-pollrow mt-1">
            <img className=" size-3" src={redbtn} alt="btn" />
            <p className="text-xs font-sans text-center font-light text-white">
              Other
            </p>
          </span>
        </li>
      </ul>
      <div className="flex gap-4 items-center px-3">
      <button className="btn font-sans font-semibold text-white text-xs">Vote</button>
      <button className="btn font-sans font-semibold text-white text-xs">Result</button>
      </div>
    </div>
  );
};

export default Pollcard;

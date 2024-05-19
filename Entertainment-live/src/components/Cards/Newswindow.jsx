import redbtn from "../assets/images/Layer 4 copy 4.png";
import newsimage from "../assets/images/Layer 14.png";

const Newswindow = () => {
  return (
    <div className="newsWindow rounded-xl flex w-[55%] mx-auto justify-around items-center gap-x-0 gapy-y-0">
      <div className="relative px-2 mx-2 py-4 w-[55%] h-2/3 object-cover group">
        <img
          className="w-full h-full object-contain rounded-lg shadow-lg border-solid transition duration-300 ease-in-out transform hover:scale-105"
          src={newsimage}
          alt="news"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-newscap bg-opacity-75 px-3 py-1 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto rounded-lg flex flex-col justify-between">
          <p className="text-sm text-white font-sans overflow-scroll text-ellipsis whitespace-normal">
            Lorem ipsum, dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn font-sans font-semibold text-white text-xs mt-2 items-end">
            Read More
          </button>
        </div>
      </div>
      <div className="w-[40%]">
        <h2 className="text-lg font-title text-black text-start font-bold">
          Latest <span className="text-navbackground">Articles</span>
        </h2>
        <ul className="newsWindowul rounded-xl flex flex-col gap-2 w-full">
          <li className="rounded-xl">
            <span className="flex gap-2">
              <img className="size-3 ml-2" src={redbtn} alt="" />
              <p className="font-sans text-xs font-light">
                News headline dummy text shut yo bum ahh up bummy head ahh 
              </p>
            </span>
          </li>
          <li className="rounded-xl">
            <span className="flex gap-2">
              <img className="size-3 ml-2" src={redbtn} alt="" />
              <p className="font-sans text-xs font-light">
                News headline dummy text
              </p>
            </span>
          </li> <li className="rounded-xl">
            <span className="flex gap-2">
              <img className="size-3 ml-2" src={redbtn} alt="" />
              <p className="font-sans text-xs font-light">
                News headline dummy text
              </p>
            </span>
          </li> <li className="rounded-xl">
            <span className="flex gap-2">
              <img className="size-3 ml-2" src={redbtn} alt="" />
              <p className="font-sans text-xs font-light">
                News headline dummy text
              </p>
            </span>
          </li> <li className="rounded-xl">
            <span className="flex gap-2">
              <img className="size-3 ml-2" src={redbtn} alt="" />
              <p className="font-sans text-xs font-light">
                News headline dummy text
              </p>
            </span>
          </li> <li className="rounded-xl">
            <span className="flex gap-2">
              <img className="size-3 ml-2" src={redbtn} alt="" />
              <p className="font-sans text-xs font-light">
                News headline dummy text
              </p>
            </span>
          </li> <li className="rounded-xl">
            <span className="flex gap-2">
              <img className="size-3 ml-2" src={redbtn} alt="" />
              <p className="font-sans text-xs font-light">
                News headline dummy text
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Newswindow;


// Use newsapi to fetch and populate the news' main screen and also the list items
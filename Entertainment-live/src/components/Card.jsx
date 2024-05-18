const Card = () => {
  return (
    <div className="card rounded-md p-3">
    <img
      src="../src/assets/images/Layer 12.png"
      alt="ringtone"
      className="h-[45%] w-full rounded-t-md "
    />
    
      <h1 className="text-base font-bold font-title text-mininav cardheading rounded-b-lg w-full py-1 px-4">RINGTONE</h1>
      <div className="mt-2" >
      <p className="font-sans font-light text-black text-xs text-wrap mb-6">
        We bring you the latest in entertainment & information services , right on your phone . From the latest of Bollywood to the futurisitic applications , get it all here !
      </p>
      <div className="flex justify-end">
      <button
        type="button"
        className="btn font-sans font-semibold text-white text-xs"
      >
        View All
      </button>
      </div>
    </div>
  </div>
  );
};

export default Card;


// adding hover class to the button present inside the card

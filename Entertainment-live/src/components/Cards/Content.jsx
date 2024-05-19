import Card from "./Card"
import Latestvideos from "./Latestvideos"
import Newswindow from "./Newswindow"
import Pollcard from "./Pollcard"


const Content = () => {
  return (
    <div className="flex flex-col justify-between gap-2.5 contentbackg">
        <div className="mt-3.5"><Newswindow /></div>
        <h2 className="w-[55%] mx-auto mt-1.5 mb-1.5 text-xl font-title text-black font-extrabold ">Latest <span className="text-navbackground">Videos</span></h2>
        <div className="flex flex-row w-[55%] mx-auto justify-between">
            <Latestvideos />
            <Pollcard />
        </div>
        <div className="w-[55%] mx-auto flex justify-between my-2.5">
            <Card heading="Ringtone" img="../src/assets/images/Layer 13.png" alt="Ringtone"/>
            <Card heading="Wallpaper" img="../src/assets/images/Layer 12.png" alt="Wallpaper"/>
            <Card heading="Games" img="../src/assets/images/Layer 10.png" alt="Games"/>
        </div>

    </div>
  )
}

export default Content
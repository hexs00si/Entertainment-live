import Basefooter from "./Basefooter"
import Buttonfooter from "./Buttonfooter"


const Footer = () => {
  return (
    <footer className="footer flex flex-col gap-8">
        <Buttonfooter />
        <Basefooter />
    </footer>
  )
}

export default Footer
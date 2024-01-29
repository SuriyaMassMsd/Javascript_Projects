import { Carousel } from "flowbite-react";
import Caro1 from "../../public/images/caro/caro 1.jpg";
import Caro2 from "../../public/images/caro/caro 2.jpg";
import Caro3 from "../../public/images/caro/caro 3.jpg";
import Caro4 from "../../public/images/caro/caro 4.jpg";
import Caro5 from "../../public/images/caro/caro 5.jpg";

function Caro() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={Caro1} alt="..." />
        <img src={Caro2} alt="..." />
        <img src={Caro3} alt="..." />
        <img src={Caro4} alt="..." />
        <img src={Caro5} alt="..." />
      </Carousel>
    </div>
  );
}

export default Caro;

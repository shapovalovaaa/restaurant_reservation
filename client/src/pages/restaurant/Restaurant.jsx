import "./restaurant.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { AuthContext } from "../../context/authContext"
import Reserve from "../../components/reserve/Reserve.jsx"
import { SearchContext } from "../../context/searchContext"

const Restaurant = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`http://localhost:8800/api/restaurants/find/${id}`)

  const { dates, options } = useContext(SearchContext);
  
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login")
    }
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? "loading" :
        (<div className="restaurantContainer">
          {
            open && <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
              <div className="sliderWrapper">
                <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
            </div>
          }
          <div className="restaurantWrapper">
            <button className="bookNow" onClick={handleClick}>Reserve Now!</button>
            <h1 className="restaurantTitle">{data.name}</h1>
            <div className="restaurantAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="restaurantDistance">Excellent location - {data.distance}m from center</span>
            <span className="restPriceHighlight">Book a table at this property and get a free coctail!</span>
            <div className="restaurantImages">
              {data.photos?.map((photo, i) => (
                <div className="restaurantImgWrapper">
                  <img onClick={() => handleOpen(i)} src={photo} alt="" className="restaurantImg" />
                </div>
              ))}
            </div>
            <div className="restaurantDetails">
              <div className="restaurantDetailsTexts">
                <h1 className="restaurantTitle">{data.title}</h1>
                <p className="restaurantDesc">
                  {data.desc}
                </p>
              </div>
              <div className="restaurantDetailsPrice">
                <h1>Perfect for an evening stay!</h1>
                <span className="spantext">
                  Located in th real heart of Minsk, this property has an excellent location score!
                </span>
                <h2>
                  Awesome <b>coctail</b> for free
                </h2>
                <button onClick={handleClick}>Reserve Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>)}
      {openModal && <Reserve setOpen={setOpenModal} restaurantId={id}/>}
    </div>
  );
};

export default Restaurant
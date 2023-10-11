import "./restaurant.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Restaurant = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "../img//ember1.jpg"
    },
    {
      src: "../img//ember2.jpg"
    },
    {
      src: "../img//ember3.jpg"
    },
    {
      src: "../img//ember4.jpg"
    },
    {
      src: "../img//ember5.jpg"
    },
    {
      src: "../img//ember6.jpg"
    },
  ];

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

  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="restaurantContainer">
        {
          open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>
        }
        <div className="restaurantWrapper">
          <button className="bookNow">Reserve Now!</button>
          <h1 className="restaurantTitle">Ember Restaurant</h1>
          <div className="restaurantAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Pobediteley 9, Minsk</span>
          </div>
          <span className="restaurantDistance">Excellent location - in the centre of the city</span>
          <span className="restPriceHighlight">book a table at this property and get a free coctail!</span>
          <div className="restaurantImages">
            {photos.map((photo, i) => (
              <div className="restaurantImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="restaurantImg" />
              </div>
            ))}
          </div>
          <div className="restaurantDetails">
            <div className="restaurantDetailsTexts">
              <h1 className="restaurantTitle">Stay in the heart of Minsk</h1>
              <p className="restaurantDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae possimus adipisci facilis odio laborum maiores eius eos in esse nihil harum, dolore corrupti? Ad eos dolores fugit consequatur fugiat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam expedita architecto dolores non voluptas eligendi culpa, suscipit mollitia doloribus! Quae quia similique tempore, cumque libero asperiores nobis iusto sed saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam a assumenda debitis quis deserunt. Nulla unde aliquid vero assumenda magnam est neque, eveniet iste minima odit quibusdam culpa rerum et!
              </p>
            </div>
            <div className="restaurantDetailsPrice">
              <h1>Perfect for an evening stay!</h1>
              <span>
                Located in th real heart of Minsk, this property has an excellent location score of 9.0!
              </span>
              <h2>
                Awesome <b>coctail</b> for free
              </h2>
              <button>Reserve Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer/>
      </div>
    </div>
  )
}

export default Restaurant
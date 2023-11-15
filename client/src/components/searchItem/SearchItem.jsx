import { Link } from "react-router-dom"
import "./searchItem.css"

const SearchItem = ({item}) => {
  return (
      <div className="searchItem">
          <img src={item.photos[0]} alt="" className="siImg" />
          <div className="siDetails">
              <div className="siDesc">
                  <h1 className="siTitle">{item.name}</h1>
                  <span className="siDistance">{item.distance}m from center</span>
                  <span className="siTerrace">Terrace</span>
                  <span className="siCuisine"></span>
                  <span className="siFeatures">{item.desc}</span>
                  <span className="siCancelOp">Free cancellation</span>
                  <span className="siCancelOpSubtitle"></span>
              </div>
          </div>
          <div className="siDetails">
              {item.rating && <div className="siRating">
                  <span>Rating</span>
                  <button>{item.rating}</button>
              </div>}
              <div className="siDetailsTexts">
                  <span className="siPrice">{item.cheapestPrice}</span>
                  <span className="siTerraceOp"></span>
                  <Link to={`/restaurants/${item._id}`}>
                      <button className="siCheckButton">See availability</button>
                  </Link>
              </div>
          </div>
      </div>    
  )
}

export default SearchItem
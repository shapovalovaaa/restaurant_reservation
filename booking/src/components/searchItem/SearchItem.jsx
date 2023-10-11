import "./searchItem.css"

const SearchItem = () => {
  return (
      <div className="searchItem">
          <img src="img\ember.jpg" alt="" className="siImg" />
          <div className="siDetails">
              <div className="siDesc">
                  <h1 className="siTitle">Elegant restaurant Ember</h1>
                  <span className="siDistance">DoubleTree</span>
                  <span className="siTerrace">Terrace</span>
                  <span className="siCuisine">South-eastern mediterranean cuisine</span>
                  <span className="siFeatures">Dry-aged marbled steaks, fish corner with fresh seafood and one of the richest wine stores in Minsk</span>
                  <span className="siCancelOp">Free cancellation</span>
                  <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</span>
              </div>
          </div>
          <div className="siDetails">
              <div className="siRating">
                  <span>Excellent</span>
                  <button>9.0</button>
              </div>
              <div className="siDetailsTexts">
                  <span className="siPrice">$$$$</span>
                  <span className="siTerraceOp">Includes terrace</span>
                  <button className="siCheckButton">See availability</button>
              </div>
          </div>
      </div>    
  )
}

export default SearchItem
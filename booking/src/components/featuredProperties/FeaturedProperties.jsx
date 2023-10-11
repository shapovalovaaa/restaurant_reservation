import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
      <div className="fp">
          <div className="fpItem">
              <img src="img\ember.jpg" alt="ember" className="fpImg" />
              <span className="fpName">Restaurant Ember</span>
              <span className="fpCity">Minsk</span>
              <span className="fpPrice">$$$$</span>
              <div className="fpRating">
                  <button>9.0</button>
                  <span>Excellent</span>
              </div>
          </div>
          <div className="fpItem">
              <img src="img\view.jpg" alt="view" className="fpImg" />
              <span className="fpName">Restaurant The View</span>
              <span className="fpCity">Minsk</span>
              <span className="fpPrice">$$$$</span>
              <div className="fpRating">
                  <button>9.2</button>
                  <span>Excellent</span>
              </div>
          </div>
          <div className="fpItem">
              <img src="img\kuhmistr.jpg" alt="kukh" className="fpImg" />
              <span className="fpName">Restaurant Kukhmistr</span>
              <span className="fpCity">Minsk</span>
              <span className="fpPrice">$$$$</span>
              <div className="fpRating">
                  <button>9.4</button>
                  <span>Excellent</span>
              </div>
          </div>
          <div className="fpItem">
              <img src="img\belvedere.jpg" alt="belv" className="fpImg" />
              <span className="fpName">Restaurant Belvedere</span>
              <span className="fpCity">Minsk</span>
              <span className="fpPrice">$$$$</span>
              <div className="fpRating">
                  <button>8.9</button>
                  <span>Excellent</span>
              </div>
          </div>
      </div>
  )
}

export default FeaturedProperties
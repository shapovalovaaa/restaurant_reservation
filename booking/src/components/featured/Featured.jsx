import "./featured.css"

const Featured = () => {
  return (
      <div className="featured">
          <div className="featuredItem">
              <img src="img\minsk.avif" alt="" className="featuredImg minsk" />
              <div className="featuredTitles">
                  <h1>Minsk</h1>
                  <h2>25 properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="img\gomel.avif" alt="" className="featuredImg gomel" />
              <div className="featuredTitles">
                  <h1>Gomel</h1>
                  <h2>10 properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="img\grodno.avif" alt="" className="featuredImg grodno" />
              <div className="featuredTitles">
                  <h1>Grodno</h1>
                  <h2>15 properties</h2>
              </div>
          </div>
    </div>
  )
}

export default Featured
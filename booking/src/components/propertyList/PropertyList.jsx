import "./propertyList.css"

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="img\restaurant.avif" alt="restaurant" className="pListImg" />
                <div className="pListTitles">
                    <h1>Restaurants</h1>
                    <h2>100 restaurants</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="img\cafe.avif" alt="cafe" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cafes</h1>
                    <h2>50 cafes</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="img\bar.avif" alt="bar" className="pListImg" />
                <div className="pListTitles">
                    <h1>Bars</h1>
                    <h2>20 bars</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="img\pizzeria.avif" alt="pizzeria" className="pListImg" />
                <div className="pListTitles">
                    <h1>Pizzerias</h1>
                    <h2>17 pizzerias</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="img\burger point.avif" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Burger-point</h1>
                    <h2>30 burger-points</h2>
                </div>
            </div>

        </div>
  )
}

export default PropertyList
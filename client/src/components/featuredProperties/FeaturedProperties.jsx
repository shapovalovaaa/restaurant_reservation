import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js"
import "./featuredProperties.css"

const FeaturedProperties = (destination) => {
    const { data, loading, error } = useFetch(`http://localhost:8800/api/restaurants?city=${destination}`
    );

    //const { data: place, loading: load, error: err } = useFetch(`http://localhost:8800/api/restaurants/find/${}`)
    
    const navigate = useNavigate()

    const handleSearch = (id) => {
        navigate(`/restaurants/${id}`, { state: { id } });
    }

    //console.log(data[0]._id)
    return (
        <div className="fp">
            {loading ? "Loading" : <>
                {data.map((item) => (
                    <div className="fpItem" key={item._id} onClick={() => handleSearch(item._id)}>
                        <img src={item.photos[0]} alt="" className="fpImg" />
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">Price {item.cheapestPrice}</span>
                        {item.rating &&<div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>}
                    </div>
                ))
                }
            </>}
      </div>
  )
}

export default FeaturedProperties
import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch.js"
import "./featured.css"
import { useNavigate } from "react-router-dom"
import { SearchContext } from "../../context/searchContext.jsx"
import { useContext } from "react"

const Featured = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/restaurants/countByCity?cities=Minsk,Gomel,Grodno")

    const navigate = useNavigate()
    const { dispatch } = useContext(SearchContext);

    const handleSearchMinsk = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination:"Minsk", dates:[
            new Date(),
            new Date()]
        , options: 2 } });
        navigate("/restaurants", { state: { destination: "Minsk", dates:{
            startDate: new Date(),
            endDate: new Date()
        }, options: 2 } });
    }
    const handleSearchGomel = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination:"Gomel", dates:[
            new Date(),
            new Date()]
        , options: 2 } });
        navigate("/restaurants", { state: { destination: "Gomel", dates:{
            startDate: new Date(),
            endDate: new Date()
        }, options: 2
        }
        });
    }
    const handleSearchGrodno = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination:"Grodno", dates:[
            new Date(),
            new Date()]
        , options: 2 } });
        navigate("/restaurants", { state: { destination: "Grodno", dates:{
            startDate: new Date(),
            endDate: new Date()
        }, options: 2 } });
    }
    
    return (
      <div className="featured">
            {loading ? "Loading please wait" :
                <><div className="featuredItem">
                    <img src="img\minsk.avif" alt="" className="featuredImg minsk" />
                    <div className="featuredTitles">
                        <h1 onClick={handleSearchMinsk}>Minsk</h1>
                        <h2>{data[0]} properties</h2>
                        
                    </div>
                </div>
                    <div className="featuredItem">
                        <img src="img\gomel.avif" alt="" className="featuredImg gomel" />
                        <div className="featuredTitles">
                            <h1 onClick={handleSearchGomel}>Gomel</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="img\grodno.avif" alt="" className="featuredImg grodno" />
                        <div className="featuredTitles">
                            <h1 onClick={handleSearchGrodno}>Grodno</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div></>
            }
    </div>
  )
}

export default Featured
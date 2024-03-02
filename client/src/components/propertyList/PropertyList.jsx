import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import "./propertyList.css"
import { useContext } from "react";
import { SearchByType } from "../../context/searchType.jsx";

const PropertyList = () => {
    
   
    const images = [
        "../img//restaurant.avif",
        "../img//cafe.avif",
        "../img//bar.avif",
        "../img//pizzeria.avif",
        "../img//burger point.avif",
    ];
    
    const { data: places, loading: load, error: err } = useFetch(`http://localhost:8800/api/restaurants/getAllOfTheType?type=cafe`)
    
    const navigate = useNavigate()
    const { dispatch } = useContext(SearchByType);

    const handleSearch = (type) => {
        dispatch({ type: "NEW_SEARCH", payload: { type } });
        navigate("/restaurants/type", { state: { type } });
    }

    const { data, loading, error } = useFetch ("http://localhost:8800/api/restaurants/countByType");
    return (
        <div className="pList">
            {loading ? "Loading, please wait" :
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img src={img} alt="" className="pListImg" />
                                <div className="pListTitles">
                                    <h1 onClick={() => handleSearch(data[i]?.type)}>{data[i]?.type}</h1>
                                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                                </div>
                            </div>
                        ))}
                </>
            }
        </div>
    );
};

export default PropertyList;
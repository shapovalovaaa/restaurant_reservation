import useFetch from "../../hooks/useFetch.js";
import "./propertyList.css"

const PropertyList = () => {
     const { data, loading, error } = useFetch ("http://localhost:8800/api/restaurants/countByType"
     );

    const images = [
        "../img//restaurant.avif",
        "../img//cafe.avif",
        "../img//bar.avif",
        "../img//pizzeria.avif",
        "../img//burger point.avif",
    ];
    
    return (
        <div className="pList">
            {loading ? "Loading, please wait" :
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img src={img} alt="" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>{data[i]?.type}</h1>
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
import "./list.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const ListType = () => {

  const location = useLocation();
  const [type, setType] = useState(location.state.type);;

  
  const { data, loading, error, reFetch } = useFetch(`http://localhost:8800/api/restaurants/getAllOfTheType?type=${type}`);
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {loading ? "loading" : <>
              {data.map(item => (
                <SearchItem item={item} key={item._id} />
              ))}
              </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListType;
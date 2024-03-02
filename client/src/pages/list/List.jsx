import "./list.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  
  const { data, loading, error, reFetch } = useFetch(`http://localhost:8800/api/restaurants/get?city=${destination}`);
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          {/* <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={ destination} type="text" />
            </div>
            {/* <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")}`}</span>
              { openDate && (
                <DateRange minDate={new Date()}editableDateInputs={true} onChange={item=>setDates([item.selection])} moveRangeOnFirstSelection={false} ranges={dates} className="date"/>)}
            </div> }
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min rating</span>
                  <input type="number" min={1.0} max={10.0} onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max rating</span>
                  <input type="number" min={1.0} max={10.0} onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">People</span>
                  <input type="number" min={1.0}className="lsOptionInput" placeholder={ options.people} />
                </div>
              </div>
            </div>
            <button onClick={{handleClick}}>Search</button>
          </div> */}
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

export default List;
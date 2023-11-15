import "./header.css"
import { useContext, useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { AuthContext } from "../../context/authContext";
import { SearchContext } from "../../context/searchContext";

const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false);

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)

    const [options, setOptions] = useState({
        people: 2
    });

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
        navigate("/restaurants", { state: { destination, dates, options } });
    }

    return (
        <div className="header">
            <div className={type=== "list" ? "headerContainer listMode" : "headerContainer"}>
                {/* иконки хедера и названия поменять */}
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faUtensils} />
                        <span>Restaurants</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div> 
                
                { type !== "list" &&
                    <>
                        <h1 className="headerTitle">Table Wave is a versatile and multifunctional themed template for booking venues.</h1>
                        <p className="headerDesc"> Suitable for the restaurant business, this template offers guests an impeccable booking experience and restaurant owners plenty of customisation options. Thanks to its intuitive design and functionality, Table Wave provides a comfortable and carefree experience for both guests and owners.</p>
                        {/* {!user && <button className="headerBtn">Sign in / Register</button>} */}
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                            <FontAwesomeIcon icon={ faUtensils} className="headerIcon" />
                                <input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
                            </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">date</span>
                            {openDate &&
                                <DateRange minDate={new Date()}editableDateInputs={true} onChange={item=>setDates([item.selection])} moveRangeOnFirstSelection={false} ranges={dates} className="date"/>
                                // <DatePicker minDate={new Date()} selected={dates.newDate} onChange={(dates) => setDates(dates)} />
                            }
                            </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.people} person`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Person</span>
                                        <div className="optionCounter">
                                            <button disabled={options.people <= 1} className="optionCounterButton" onClick={() => handleOption("people", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.people}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("people", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                            <div className="headerSearchItem">
                            <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header
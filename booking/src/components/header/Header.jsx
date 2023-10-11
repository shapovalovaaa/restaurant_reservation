import "./header.css"
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi, faUtensils } from "@fortawesome/free-solid-svg-icons";

const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false);

    const [startDate, setStartDate] = useState({
        newDate: new Date()
    });

    const [openOptions, setOpenOptions] = useState(false)

    const [options, setOptions] = useState({
        people: 2
    });

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/restaurants", { state: { destination, startDate, options } });
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
                        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                        <p className="headerDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quasi est temporibus harum reprehenderit placeat a culpa accusantium labore.</p>
                        <button className="headerBtn">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                            <FontAwesomeIcon icon={ faUtensils} className="headerIcon" />
                                <input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
                            </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">date</span>
                        
                                {openDate && <DatePicker minDate={new Date()} selected={startDate.newDate} onChange={(date) => setStartDate(date)} />}
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
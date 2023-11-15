import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import "./reserve.css"
import { useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch.js"
import { useContext, useState } from "react"
import { SearchContext } from "../../context/searchContext.jsx"
import axios from "axios"
import { AuthContext } from "../../context/authContext.jsx"

const Reserve = ({ setOpen, restaurantId }) => {
    const [selectedTables, setSelectedTables] = useState([])
    const { data, loading, error } = useFetch(`http://localhost:8800/api/restaurants/table/${restaurantId}`)
    const user = useContext(AuthContext);
    const userId = user.user._id;
    const userName = user.user.username;
    const userEmail = user.user.email;

    const { dates } = useContext(SearchContext);
    
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime());
        let dates = []
        while (date <= end) {
            dates.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }
        return dates
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate)
    
    const isAvailable = (tableNumber) => {
        const isFound = tableNumber.unavailableDates.some(date => alldates.includes(new Date(date).getTime())
        );

        return !isFound
    };

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectedTables(
            checked
                ? [...selectedTables, value]
                : selectedTables.filter(item => item !== value)
        );
    };
    const navigate = useNavigate()    

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedTables.map((tableId) => {
                    const creds = { userId, userName, userEmail, restaurantId, tableId }
                    axios.post("http://localhost:8800/api/reservation", creds)
                    const res = axios.put(`http://localhost:8800/api/tables/availability/${tableId}`, {
                        dates: alldates,
                    });
                    return res.data;
                })
            );
            setOpen(false)
            navigate("/")
        } catch (err) { 
            console.log(err)
        }
    };
    

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
                <span>Select your table:</span>
                {data.map(item => (
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc"></div>
                            <div className="rMax">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="rPrice">{item.price}</div>
                        </div>
                        <div className="rSelectTables">
                            {item.tableNumbers.map((tableNumber) => (
                                <div className="table">
                                    <label>{tableNumber.number}</label>
                                    <input type="checkbox" value={tableNumber._id} onChange={handleSelect} disabled={!isAvailable(tableNumber)} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="rButton">Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve
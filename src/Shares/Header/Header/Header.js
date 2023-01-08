import React, { useState } from 'react';
import './Header.css';
import { MdHotel} from 'react-icons/md';
import { FaPlane} from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { MdAttractions } from 'react-icons/md';
import { FaTaxi } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { GiPerson } from 'react-icons/gi';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = ({type}) => {
  const [destination,setDestination] = useState("")
  const [openDate,setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions,setOpenOptions] = useState(false);
    const [options,setOptions] = useState({
      adult:1,
      children:0,
      room:1,
    });
    
      const navigate = useNavigate()

    const handleOption = (name, operation) =>{
      setOptions((prev) =>{
        return{
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
    
    const handleSearch = () =>{
      navigate("/hotels", {state:{destination,date,options}})
    }
    return (
        <div className='header'>
           <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className='headerList'>
                   <div className='headerListItem active'>
                      <MdHotel></MdHotel> 
                      <span>Stays</span>
                    </div>
               <div className='headerListItem'>
                 <FaPlane></FaPlane> 
                   <span>Flights</span>
               </div>
               <div className='headerListItem'>
                 <AiFillCar></AiFillCar> 
                   <span>Car rentals</span>
               </div>
               <div className='headerListItem'>
                 <MdAttractions></MdAttractions> 
                   <span>Attractions</span>
               </div>
               <div className='headerListItem'>
                 <FaTaxi></FaTaxi> 
                   <span>Airport taxis</span>
               </div>
            </div>

           {
            type !== "list" &&
            <>
             <h1 className='headerTitle'>A lifetime od discount? it's Genius.</h1>
            <p className='headerDesc'>Get rewarded for your travels-unlock instant savings of 10% or more with a free Lamabooking account</p>
            <Link to="/propertySection"><button className='headerBtnProperty'>List Your Property</button></Link>
            <div className='headerSearch'>
                
                <div className='headerSearchItem'>
                     <MdHotel className='headerIcon'></MdHotel>
                    <input type="text" 
                    placeholder='Where are you going?'
                    className='headerSearchInput text-gray-900'
                    onChange={e=>setDestination(e.target.value)}
                    />
                </div>
                <div className='headerSearchItem'>
                     <SlCalender className='headerIcon'></SlCalender>
                    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                    {openDate &&
                    <DateRange
                    editableInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                    ></DateRange>
                       }
                </div>
                <div className='headerSearchItem'>
                     <GiPerson className='headerIcon'></GiPerson>
                    <span onClick={() =>setOpenOptions (!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                    {
                      openOptions && <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                        <button disabled ={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")} className="optionCounterButton">-</button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button onClick={() => handleOption("adult", "i")} className="optionCounterButton">+</button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                        <button disabled ={options.children <= 1}
                        onClick={() => handleOption("children", "d")} className="optionCounterButton">-</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button disabled ={options.room <= 1}
                        onClick={() => handleOption("children", "i")} className="optionCounterButton">+</button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                        <button onClick={() => handleOption("room", "d")} className="optionCounterButton">-</button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button onClick={() => handleOption("room", "i")} className="optionCounterButton">+</button>
                        </div>
                      </div>
                    </div>
                    }
                </div>
                <div className='headerSearchItem'>
                     <button onClick={handleSearch} className='headerBtnSe'>search</button>
                </div>
                
            </div>
            </>
           }

           </div>
        </div>
    );
};

export default Header;
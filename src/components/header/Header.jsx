
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import './header.css'
import {DateRange} from 'react-date-range';
import  {useState} from 'react'


export default function Header(){

	const [date, setDate] = useState ([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection'
		}
	]);




	return (
		<div className="header" >
		 <div className="headerContainer">
		  <div className="headerList" >
		   <div className="headerListItem active">
		   <FontAwesomeIcon icon={faBed} />
			<span>Stays</span>
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
			<span>Attractions</span>
			</div>
			<div className="headerListItem">
			<FontAwesomeIcon icon={faTaxi} />
			<span>Airport taxis</span> 
		   </div>
		  </div>	
		  	<h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
		 	<p className="headerDesc">
				Get rewarded for your travels - unlock instant savings 10% or more
				with a free Booking account
			</p>
			<button className='headerBtn'>Sign in / Register</button>
			<div className="headerSearch">
				<div className="headerIcon" >
					<FontAwesomeIcon icon={faBed}/>
					<input
						type="text"
						placeholder="Where are you going?"
						className="headerSearchInput"
					/>
				</div>
				<div className='headerSearchItem'>
					<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
					<span className='headerSearchText'>date to date</span>
					<DateRange
					editableDateInputs={true}
					onChange={item => setDate([item.selection])}
					moveRangeOnFirstSelection = {false}
					ranges={date}
					className='date'
					/>
				</div>
				<div className="headerSearchItem">
					<FontAwesomeIcon icon={faPerson} className='headerIcon' />
					<span className='headerSearchText'>2 adults 2 children 1 room</span>

				</div>
			</div>
		 </div>
		</div>

	)
}



import React from 'react'
import Icon from '../../assets/locationIcon.jpeg'
import './card.css'

export default function card({ program }) {
    const { name, location, date_begin, grade, date_end } = program;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const startMonth = new Date(date_begin).getMonth() + 1
    const startDate = new Date(date_begin).getDate()
    const startYear = new Date(date_begin).getFullYear()
    const startDay = new Date(date_begin).getDay()
    const endMonth = new Date(date_end).getMonth() + 1
    const endDate = new Date(date_end).getDate()
    const endYear = new Date(date_end).getFullYear()
    const endDay = new Date(date_end).getDay()

    return (
        <div className="container">
            <div className="program-description">
                <h1 id="Title">
                    {name}
                </h1>
                <div id="grade">
                    {`Grades ${grade}`}
                </div>
                <div id="dates">
                    {`${days[startDay]}, ${months[startMonth]} ${startDate}, ${startYear}  -  ${days[endDay]}, ${months[endMonth]} ${endDate}, ${endYear}`}
                </div>
                <div id="location">
                    <img src={Icon} className="location-icon" />
                    {location}
                </div>
            </div>
            <div className="program-links">
                <div id="register">
                    Register
                </div>
                <div id="learn-more">
                    Learn More
                </div>
            </div>
        </div>
    )
}

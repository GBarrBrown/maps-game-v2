import React from 'react'
import { Fragment } from 'react'

const LocationChoices = (props) => {
    const locations = props.locations
    return (
        <Fragment>
            <h1>Location Choices</h1>   
            {locations.map((location, key) => {
                return <button id={`location${key}`}>{location}</button>
            })}
        </Fragment>



    )
}

export default LocationChoices
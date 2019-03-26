import React from 'react'
import { Component, Fragment } from 'react'

import LocationImg from '../components/LocationImg'
import LocationChoices from '../components/LocationChoices'

class Game extends Component{
    constructor(){
        super()
        this.state = {location: 'London City'}
    }
    render(){
        return(
            <Fragment>
                <LocationImg />
                <h1>{this.state.location}</h1>
                <LocationChoices />
            </Fragment>
        )
    }
}

export default Game
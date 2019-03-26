import React from 'react'
import { Component, Fragment } from 'react'

import LocationImg from '../components/LocationImg'
import LocationChoices from '../components/LocationChoices'

class Game extends Component{
    constructor(){
        super()
        this.state = {
            location: 'London City',
            round: 1,
            score: 0
        }
    }
    render(){
        return(
            <Fragment>
                <LocationImg />
                <h1>Round: {this.state.round}</h1>
                <LocationChoices />
            </Fragment>
        )
    }
}

export default Game
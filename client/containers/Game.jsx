import React from 'react'
import { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { getNewLocations } from '../api/locations'

import LocationImg from '../components/LocationImg'
import LocationChoices from '../components/LocationChoices'

class Game extends Component{
    constructor(){
        super()
        this.state = {
            locations: ['London City', 'Istanbul', 'Mexico City', 'Tokyo'],
            round: 1,
            score: 0
        }
    }
    render(){
        return(
            <Fragment>
                <LocationImg />
                <h1>Round: {this.state.round}</h1>
                <LocationChoices locations={this.state.locations}/>
                <button onClick={() => {this.props.getNewLocations()}}></button>
            </Fragment>
        )
    }
}

function mapStateToProps({updateLocations}){
    let locations = updateLocations
    return {locations}
}

function mapDispatchToProps(dispatch){
    return{
        getNewLocations: () => dispatch(getNewLocations())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
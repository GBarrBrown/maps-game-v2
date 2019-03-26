import React from 'react'
import { Component, Fragment } from 'react'

import Header from './Header'
import Game from '../containers/Game'

class App extends Component{
    render(){
        return (
            <Fragment>
                <Header />
                <Game />
            </Fragment>

        )
    }
}

export default App
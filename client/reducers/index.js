import { combineReducers } from 'redux'
import maps from './reducer_maps'

import { updateLocations } from './locations'

export default combineReducers({
    updateLocations,
    maps
})
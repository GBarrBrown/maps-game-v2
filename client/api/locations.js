import request from 'superagent'

import { loadNewLocations } from '../actions/locations'

export function getNewLocations(){
    return (dispatch) => {
        request.get(`api/v1/locations/newLocations`)
        .then(res => {
            dispatch(loadNewLocations(res.body))
        })
        .catch(err => {
            console.log('ERROR!', err)
        })
    }
}
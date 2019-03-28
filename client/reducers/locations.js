export function updateLocations(state = [], action) {
    switch (action.type) {
        case 'UPDATE_LOCATIONS':
            return action.newLocations
        default:
            return state
    }
}
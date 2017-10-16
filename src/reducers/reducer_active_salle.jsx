export default function (state=null, action) {
    switch (action.type) {
        case 'SALLE_SELECTED' : 
            return action.payload;
    }
    return state
}
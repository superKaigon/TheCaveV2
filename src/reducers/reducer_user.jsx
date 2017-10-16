const userDemarrage = [
        { firstname: 'Jean-Louis', lastname: 'On', identifiant: 'blabla@bla.com', password: 'P@ssword' },
        { firstname: 'Remis', lastname: 'Gaillard', identifiant: 'blibla@bla.com', password: 'P@ssword' },
        { firstname: 'Gerard', lastname: 'Bouchard', identifiant: 'blobla@bla.com', password: 'P@ssword' },
        { firstname: 'Michel', lastname: 'Drucker', identifiant: 'blubla@bla.com', password: 'P@ssword' },
]


export default function (state = userDemarrage, action) {
        switch (action.type) {
                case 'USER_SELECTED':
                        if (action.payload != null) {
                               const {newState} = [...state].push(action.payload)
                                console.log({newState})
                                return [...state]

                        }
                        
        }
        return state
}
const tables_demarrage = [
        { id: '1', name: 'Table 1', occuped: true },
        { id: '2', name: 'Table 2', occuped: false },
        { id: '3', name: 'Table 3', occuped: true },
        { id: '4', name: 'Table 4', occuped: false }
]

export default function (state = tables_demarrage, action) {
        switch (action.type) {
                case 'TABLE_SELECTED':
                  return [...state].map((table) => {
                                if (table.id == action.payload.id) {
                                        return action.payload
                                } else {
                                        return table
                                }

                        })

        }
        return state 
}
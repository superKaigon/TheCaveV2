const salleDemarage = [
        {
                id: '1',
                image: 'https://dundjinni.com/forums/uploads/Bogie/8E9_Desk-Chair-Preset_bg.png',
                full: false,
                tables: [
                        { id: '1', name: 'Table 1', occuped: false },
                        { id: '2', name: 'Table 2', occuped: false },
                        { id: '3', name: 'Table 3', occuped: false },
                        { id: '4', name: 'Table 4', occuped: false }
                ]
        },
        {
                id: '2',
                image: 'https://i.pinimg.com/originals/95/23/90/952390fd9d9d9ac2b98b8118160805e0.jpg',
                full: false,
                tables: [
                        { id: '1', name: 'Table 1', occuped: false },
                        { id: '2', name: 'Table 2', occuped: false },
                        { id: '3', name: 'Table 3', occuped: false },
                        { id: '4', name: 'Table 4', occuped: false }
                ]
        },
        {
                id: '3',
                image: 'http://www.dundjinni.com/forums/uploads/supercaptain/table_and_chairs_sc.png',
                full: false,
                tables: [
                        { id: '1', name: 'Table 1', occuped: false },
                        { id: '2', name: 'Table 2', occuped: false },
                        { id: '3', name: 'Table 3', occuped: false },
                        { id: '4', name: 'Table 4', occuped: false }
                ]
        }
]

export default function (state = salleDemarage, action) {
        switch (action.type) {

                case 'TABLE_SELECTED':
                        [...state].map((salle) => {
                                if (salle.id === action.payload.activeSalle.id) {
                                        console.log(salle.tables.filter((table) => {
                                                if (action.payload.table === null) {
                                                        return table
                                                }else if (table.id === action.payload.table.id) {
                                                        return action.payload.table
                                                }
                                        }))

                                }
                        })
                        break;
                default: return state

        }
        return state
}


/* [...state].map((salle)=> {return salle}).map((tables)=>{return  console.log(tables)})
                return [...state].map((table) => {
                        if (action.payload == null){
                                return table
                        }
                         else if (table.id === action.payload.id) {
                                  table = action.payload
                                  return table
                         } else {
                                 return table
                         }
 */
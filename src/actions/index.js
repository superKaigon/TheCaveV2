export const selectSalle = (salle) => {
  return {
    type: 'SALLE_SELECTED',
    payload: salle
  }
}

export const selectTable = (table, activeSalle) => {
  return {
    type: 'TABLE_SELECTED',
    payload: {table, activeSalle}
  }
}

export const selectUser = (user) => {
  return {
    type: 'USER_SELECTED',
    payload: user
  }
}




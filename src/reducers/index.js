import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import SalleReducer from './reducer_salle'; 
import ActiveSalleReducer from './reducer_active_salle'
import ActiveTableReducer from './reducer_active_table'
import ActiveUserReducer from './reducer_active_user'
import {reducer as ReducerForm} from 'redux-form'

const rootReducer = combineReducers({
  users : UserReducer,
  salles : SalleReducer,
  activeSalle : ActiveSalleReducer,
  activeTable : ActiveTableReducer, 
  activeUser: ActiveUserReducer,
  form: ReducerForm

});

export default rootReducer;

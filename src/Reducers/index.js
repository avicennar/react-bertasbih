import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SelectPopokReducer from './SelectPopokReducer';

export default combineReducers({
    pikachu: () => 'Malakduit.com',
    auth: AuthReducer,
    selectedPopok: SelectPopokReducer
});
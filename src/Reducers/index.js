import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SelectPopokReducer from './SelectPopokReducer';

export default combineReducers({
    pikachu: () => 'MALAKDUIT.COM',
    auth: AuthReducer,
    selectedPopok: SelectPopokReducer
});
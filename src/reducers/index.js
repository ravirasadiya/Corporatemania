import ThemeOptions from './ThemeOptions';
import { registration } from './registration.reducer';
import { combineReducers } from 'redux';
// export default {
//     ThemeOptions,
//     registration
// };
const rootReducer = combineReducers({
    ThemeOptions
  });

export default rootReducer;
import { combineReducers } from '@reduxjs/toolkit';
import UserLoggedSlice from './UserSlice';


export default combineReducers({
  userLogged: UserLoggedSlice,
  
});
import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
// import { composeWithDevTools } from "redux-devtools-extension";



export default configureStore({

  reducer: {
    mail: mailReducer,
  },
});

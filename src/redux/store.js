import { combineReducers, configureStore } from '@reduxjs/toolkit';
import infoReducer from './info/InfoSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';



// Create a root reducer
const rootReducer = combineReducers({user: infoReducer});


export const store = configureStore({
    reducer: {
        user: persistReducer({
            key: 'information',
            storage,
            version: 1
          }, 
          rootReducer
        ),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
  });

// Need to export the persistor
const persistor = persistStore(store);
  
export default persistor;
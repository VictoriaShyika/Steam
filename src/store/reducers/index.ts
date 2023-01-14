import { itemsReducer } from './itemsReducer';
import { combineReducers } from 'redux';
import { likesReducer } from './likesReducer';
import { store } from '..';

export const rootReducer = combineReducers({
  items: itemsReducer,
  likes: likesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

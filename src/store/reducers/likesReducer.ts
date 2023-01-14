import { LikesAction, LikesActionTypes, LikesState } from '../../data/likes';

const initialState: LikesState = { likes: [] };

export const likesReducer = (
  state = initialState,
  action: LikesAction,
): LikesState => {
  switch (action.type) {
    case LikesActionTypes.ADD_LIKE:
      return { likes: action.payload };
    case LikesActionTypes.REMOVE_LIKE:
      return { likes: action.payload };

    default:
      return state;
  }
};
